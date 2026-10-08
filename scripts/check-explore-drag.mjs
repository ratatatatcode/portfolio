// Run with the server running: node scripts/check-explore-drag.mjs [--performance | --preview-layout]
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const browserPath = [
  process.env.CHROME_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
]
  .filter(Boolean)
  .find((file) => fs.existsSync(file));
assert(browserPath, 'Set CHROME_PATH to a Chrome or Edge executable.');
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-drag-test-'));
const browser = spawn(
  browserPath,
  [
    '--headless=new',
    '--window-size=1600,1200',
    '--disable-gpu',
    '--no-first-run',
    '--remote-debugging-port=0',
    `--user-data-dir=${profile}`,
    'about:blank',
  ],
  { windowsHide: true, stdio: 'ignore' }
);
let socket;
let send;

async function evaluate(expression) {
  const response = await send('Runtime.evaluate', { expression, returnByValue: true });
  if (response.exceptionDetails) throw new Error(response.exceptionDetails.text);
  return response.result.value;
}

async function waitFor(expression) {
  for (let i = 0; i < 100; i++) {
    if (await evaluate(expression)) return;
    await pause(100);
  }
  throw new Error('Timed out: ' + expression);
}

async function click(selector) {
  const point = await evaluate(
    `(() => { const r = document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; })()`
  );
  await send('Input.dispatchMouseEvent', {
    type: 'mousePressed',
    ...point,
    button: 'left',
    clickCount: 1,
  });
  await send('Input.dispatchMouseEvent', {
    type: 'mouseReleased',
    ...point,
    button: 'left',
    clickCount: 1,
  });
  await pause(100);
}

const panelExpression = `(() => { const heading = [...document.querySelectorAll('h2')].find(el => el.textContent === window.testDialogTitle); return heading?.closest('.react-draggable') || heading?.closest('[role="dialog"]')?.querySelector('.relative'); })()`;
async function drag(pointExpression, shouldMove, label) {
  const start = await evaluate(
    `(() => { const panel = ${panelExpression}; const r = panel.getBoundingClientRect(); return { x: r.x, y: r.y }; })()`
  );
  const point = await evaluate(
    `(() => { const panel = ${panelExpression}; return ${pointExpression}; })()`
  );
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', ...point });
  await send('Input.dispatchMouseEvent', {
    type: 'mousePressed',
    ...point,
    button: 'left',
    clickCount: 1,
  });
  await send('Input.dispatchMouseEvent', {
    type: 'mouseMoved',
    x: point.x + 40,
    y: point.y + 30,
    button: 'left',
    buttons: 1,
  });
  await pause(100);
  const end = await evaluate(
    `(() => { const r = (${panelExpression}).getBoundingClientRect(); return { x: r.x, y: r.y }; })()`
  );
  await send('Input.dispatchMouseEvent', {
    type: 'mouseReleased',
    x: point.x + 40,
    y: point.y + 30,
    button: 'left',
    clickCount: 1,
  });
  const distance = Math.hypot(end.x - start.x, end.y - start.y);
  assert(
    shouldMove ? distance > 25 : distance < 1,
    `${label}: expected ${shouldMove ? 'movement' : 'no movement'}, observed ${distance.toFixed(1)}px`
  );
  console.log('PASS:', label);
}

async function main() {
  const portFile = path.join(profile, 'DevToolsActivePort');
  for (let i = 0; i < 100 && !fs.existsSync(portFile); i++) await pause(100);
  const port = fs.readFileSync(portFile, 'utf8').split('\n')[0];
  const target = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, {
    method: 'PUT',
  }).then((r) => r.json());
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve) => socket.addEventListener('open', resolve, { once: true }));
  let sequence = 0;
  const pending = new Map();
  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (!pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  });
  send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++sequence;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });
  await send('Page.enable');
  await send('Performance.enable');
  await send('Page.bringToFront');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await send('Page.navigate', { url: process.env.TEST_URL || 'http://localhost:3000' });
  await waitFor(
    `document.readyState === 'complete' && !!document.querySelector('nav[aria-label="Portfolio sections"]')`
  );
  await pause(1500);
  if (process.argv.includes('--dialog-speed')) {
    await send('Network.enable');
    await send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 1500,
      downloadThroughput: 512000,
      uploadThroughput: 512000,
    });
    for (const [label, title] of [
      ['Open certifications modal', 'Certifications'],
      ['Open GitHub modal', 'GitHub'],
      ['Open freelance modal', 'Freelance services'],
      ['Open learning challenges modal', 'Learning challenges'],
      ['Open free template details', 'Free Template'],
    ]) {
      const start = await evaluate(
        `(() => { window.testDialogTitle = ${JSON.stringify(title)}; const start = performance.now(); document.querySelector('button[aria-label="${label}"]').click(); return start; })()`
      );
      await waitFor(`!!(${panelExpression})`);
      const elapsed = await evaluate(`performance.now() - ${start}`);
      console.log(`${title}: ${Math.round(elapsed)}ms with 1500ms network latency`);
      assert(
        elapsed < 500,
        title + ': dialog shell must open without waiting for a network request'
      );
      await evaluate(`(${panelExpression}).querySelector('button').click()`);
      await waitFor(`!(${panelExpression})`);
    }
    return;
  }
  if (process.argv.includes('--preview-layout')) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 1,
      mobile: true,
    });
    await evaluate(
      `document.querySelector('#projects-mobile video').scrollIntoView({behavior:'instant',block:'center'})`
    );
    await waitFor(`document.querySelector('#projects-mobile video').videoWidth > 0`);
    const preview = await evaluate(
      `(() => { const video = document.querySelector('#projects-mobile video'); const r = video.getBoundingClientRect(); const style = getComputedStyle(video); return { width: r.width, height: r.height, videoWidth: video.videoWidth, videoHeight: video.videoHeight, border: parseFloat(style.borderTopWidth), background: style.backgroundColor }; })()`
    );
    console.log(JSON.stringify(preview));
    if (process.env.CAPTURE_PREVIEW === '1') {
      const screenshot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('.next/preview-border.png', Buffer.from(screenshot.data, 'base64'));
    }
    assert.equal(
      preview.border,
      0,
      'Preview should not add a second border inside its project card'
    );
    assert(
      Math.abs(preview.width / preview.height - preview.videoWidth / preview.videoHeight) < 0.01,
      'Preview frame should match the recording aspect ratio'
    );
    console.log('PASS: preview uses its natural ratio without an extra border');
    return;
  }
  if (process.argv.includes('--performance')) {
    const sample = async () =>
      evaluate(`(() => {
      const videos = [...document.querySelectorAll('video')];
      const visible = video => { const r = video.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth; };
      return { width: innerWidth, videos: videos.length, loadedVideos: videos.filter(video => !!video.currentSrc).length, visibleVideos: videos.filter(visible).length, playingVideos: videos.filter(video => !video.paused).length, playingOffscreen: videos.filter(video => !video.paused && !visible(video)).length, mediaRequests: performance.getEntriesByType('resource').filter(entry => /\\.(mp4|mkv)(\\?|$)/.test(entry.name)).length, calendarRequests: performance.getEntriesByType('resource').filter(entry => entry.name.includes('github-contributions-api')).length };
    })()`);
    const initial = await sample();
    const before = await send('Performance.getMetrics');
    await pause(3000);
    const after = await send('Performance.getMetrics');
    const metric = (result, name) =>
      result.metrics.find((entry) => entry.name === name)?.value || 0;
    console.log(
      JSON.stringify({
        ...initial,
        idleTaskMs: Math.round(
          (metric(after, 'TaskDuration') - metric(before, 'TaskDuration')) * 1000
        ),
        idleScriptMs: Math.round(
          (metric(after, 'ScriptDuration') - metric(before, 'ScriptDuration')) * 1000
        ),
      })
    );
    assert.equal(initial.playingOffscreen, 0, 'Offscreen and hidden videos must not keep playing');
    assert(
      initial.loadedVideos <= initial.visibleVideos,
      'Initial media loading must be limited to visible previews'
    );
    assert.equal(
      initial.calendarRequests,
      0,
      'The hidden mobile calendar must not fetch on desktop'
    );
    console.log('PASS: desktop initial media work is limited to visible content');
    const desktopVideo = await evaluate(
      `(() => { const video = [...document.querySelectorAll('video')].find(video => { const r = video.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.top >= 0 && r.bottom <= innerHeight; }); if (!video) return false; video.setAttribute('data-test-video', ''); return true; })()`
    );
    if (desktopVideo) {
      await evaluate(
        `document.querySelector('[data-test-video]').closest('main > section').scrollTo({top: 0, behavior: 'instant'})`
      );
      await pause(300);
      assert(
        await evaluate(`document.querySelector('[data-test-video]').paused`),
        'Preview must pause when scrolled offscreen'
      );
    }
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 1,
      mobile: true,
    });
    await send('Page.navigate', { url: process.env.TEST_URL || 'http://localhost:3000' });
    await waitFor(
      `document.readyState === 'complete' && !!document.getElementById('projects-mobile')`
    );
    await pause(1500);
    const mobile = await sample();
    console.log(JSON.stringify(mobile));
    assert.equal(
      mobile.loadedVideos,
      0,
      'Mobile must not load project videos before scrolling to them'
    );
    assert.equal(mobile.calendarRequests, 0, 'Mobile calendar must wait until it is visible');
    await evaluate(
      `document.querySelector('#projects-mobile video').scrollIntoView({behavior:'instant',block:'center'})`
    );
    await waitFor(`!!document.querySelector('#projects-mobile video').currentSrc`);
    await waitFor(`!document.querySelector('#projects-mobile video').paused`);
    assert(
      (await sample()).loadedVideos <= 2,
      'Scrolling to a preview must not load the entire gallery'
    );
    await evaluate(`window.scrollTo({top:0,behavior:'instant'})`);
    await pause(300);
    assert(
      await evaluate(`[...document.querySelectorAll('video')].every(video => video.paused)`),
      'All previews pause when offscreen'
    );
    console.log('PASS: mobile previews load on visibility and pause offscreen');
    return;
  }
  await evaluate(
    `document.addEventListener('click', event => { if (event.target.closest('a')) event.preventDefault(); }, true)`
  );
  for (const label of [
    'Open certifications modal',
    'Open GitHub modal',
    'Open freelance modal',
    'Open learning challenges modal',
    'Open free template details',
  ]) {
    await click(`button[aria-label="${label}"]`);
  }
  await waitFor(`document.querySelectorAll('[role="dialog"]').length === 5`);
  const stacking = await evaluate(`(() => {
    const backdrop = document.querySelector('button[aria-label="Close Free Template backdrop"]');
    const frame = backdrop.parentElement;
    return [...document.querySelectorAll('[role="dialog"]')].filter(el => el.getAttribute('aria-modal') !== 'true').every(panel => {
      const r = panel.querySelector('h2').getBoundingClientRect();
      return frame.contains(document.elementFromPoint(r.left + 10, r.top + 10));
    });
  })()`);
  assert(stacking, 'Free Template and its backdrop must cover every other Explore dialog');
  console.log('PASS: Free Template and its overlay cover all four open dialogs');
  await click('button[aria-label="Close Free Template"]');
  await evaluate(
    `document.querySelectorAll('[role="dialog"] button').forEach(button => button.click())`
  );
  await waitFor(`document.querySelectorAll('[role="dialog"]').length === 0`);
  for (const [label, title] of [
    ['Open certifications modal', 'Certifications'],
    ['Open GitHub modal', 'GitHub'],
    ['Open freelance modal', 'Freelance services'],
    ['Open learning challenges modal', 'Learning challenges'],
    ['Open free template details', 'Free Template'],
  ]) {
    await evaluate(`window.testDialogTitle = ${JSON.stringify(title)}`);
    await click(`button[aria-label="${label}"]`);
    await waitFor(`!!(${panelExpression})`);
    const descriptionGap = await evaluate(
      `(() => { const panel = ${panelExpression}; const description = panel.querySelector('[data-dialog-description]'); return description ? description.getBoundingClientRect().top - panel.querySelector('h2').getBoundingClientRect().bottom : null; })()`
    );
    assert.equal(descriptionGap, 4, title + ': description sits 4px below the heading');
    await drag(
      `(() => { const r = panel.getBoundingClientRect(); return { x: r.left + 5, y: r.top + 5 }; })()`,
      false,
      title + ': panel padding does not drag'
    );
    await drag(
      `(() => { const r = panel.querySelector('h2').getBoundingClientRect(); return { x: r.left + 10, y: r.top + 10 }; })()`,
      true,
      title + ': title drags'
    );
    await drag(
      `(() => { const el = panel.querySelector('[data-dialog-content]') || panel.querySelector('.no-drag.flex') || panel.querySelector('p.mt-4'); const r = el.getBoundingClientRect(); return { x: r.left + 10, y: r.top + 10 }; })()`,
      false,
      title + ': content does not drag'
    );
    if (await evaluate(`!!(${panelExpression}).querySelector('[data-dialog-description]')`)) {
      await drag(
        `(() => { const r = panel.querySelector('[data-dialog-description]').getBoundingClientRect(); return { x: r.left + 10, y: r.top + 5 }; })()`,
        false,
        title + ': description does not drag'
      );
    }
    if (await evaluate(`!!(${panelExpression}).querySelector('a')`)) {
      await drag(
        `(() => { const r = panel.querySelector('a').getBoundingClientRect(); return { x: r.left + 10, y: r.top + 5 }; })()`,
        false,
        title + ': link does not drag'
      );
    }
    await drag(
      `(() => { const r = panel.querySelector('button').getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; })()`,
      false,
      title + ': close button does not drag'
    );
    const scroll = await evaluate(
      `(() => { const content = (${panelExpression}).querySelector('[data-dialog-content]'); if (!content || content.scrollHeight <= content.clientHeight) return null; const r = content.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; })()`
    );
    if (scroll) {
      await send('Input.dispatchMouseEvent', { type: 'mouseMoved', ...scroll });
      await send('Input.dispatchMouseEvent', {
        type: 'mouseWheel',
        ...scroll,
        deltaX: 0,
        deltaY: 100,
      });
      await waitFor(`(${panelExpression}).querySelector('[data-dialog-content]').scrollTop > 0`);
      console.log('PASS:', title + ': content scrolls');
    }
    await evaluate(
      `(() => { const panel = ${panelExpression}; panel.querySelector('button').setAttribute('data-test-close', ''); })()`
    );
    await click('[data-test-close]');
    await waitFor(`!(${panelExpression})`);
    console.log('PASS:', title + ': close button works');
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (send && socket?.readyState === WebSocket.OPEN) await send('Browser.close').catch(() => {});
    socket?.close();
    await pause(500);
    if (browser.exitCode === null) browser.kill();
    assert(
      path.dirname(path.resolve(profile)) === path.resolve(os.tmpdir()) &&
        path.basename(profile).startsWith('portfolio-drag-test-'),
      'Refusing to remove a browser profile outside the test temporary directory.'
    );
    fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  });
