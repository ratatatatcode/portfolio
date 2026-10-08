// Run with the server running: node scripts/check-explore-drag.mjs [--dialog-speed]
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
