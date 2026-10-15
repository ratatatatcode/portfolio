import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

const title = 'Momendoom Privacy Policy';
const description =
  'How Momendoom handles local session data, notes, tags, notifications, backups, and deletion.';
const policyPath = '/momendoom/privacy-policy';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: policyPath },
  openGraph: { title, description, url: policyPath, type: 'website' },
  twitter: { card: 'summary', title, description },
};

const sections = [
  {
    id: 'scope',
    title: '1. About this policy',
    paragraphs: [
      `This Privacy Policy applies to Momendoom, a time-awareness application developed by ${siteConfig.owner.fullName} (ratatatatcode). It explains how the app accesses, stores, uses, and shares information.`,
      'Momendoom records time you choose to track as Doom or Productive sessions. It does not monitor other apps, websites, browsing history, or your device activity. No account or sign-in is required.',
    ],
  },
  {
    id: 'information',
    title: '2. Information stored and how it is used',
    paragraphs: [
      'Momendoom stores session identifiers, session type (Doom or Productive), start and end times, optional notes and tags, and app preferences such as notification and introduction settings. This information is stored locally in the app’s SQLite database on your device.',
      'The app uses these records to run timers, display session history, calculate totals and charts, and let you edit, delete, export, or restore your records. All session summaries and analysis run locally. Notes and tags are not sent to AI services or analyzed remotely.',
      'The app does not request your name, email address, contacts, location, camera, microphone, advertising identifier, or payment details. It has no backend, cloud sync, advertising SDK, third-party analytics, or telemetry, and does not automatically send your session data to the developer.',
    ],
  },
  {
    id: 'permissions',
    title: '3. Notifications and file access',
    paragraphs: [
      'If you enable the optional active-session notification, Momendoom requests notification permission. Notifications are generated locally and can show your active session and elapsed time, including on a lock screen according to your device settings. You can turn them off in the app or device settings; declining permission does not prevent session tracking.',
      'Importing a backup uses the system file picker to access the file you select. Exporting uses the system share sheet or a browser download. The app does not require broad access to your files or storage, app-usage access, or accessibility monitoring permissions.',
    ],
  },
  {
    id: 'sharing',
    title: '4. Sharing and backups',
    paragraphs: [
      'The developer does not receive, sell, rent, or share your locally stored session records. Momendoom does not automatically upload these records to external services.',
      'When you choose Export JSON, the backup contains completed sessions, notes, and tags in unencrypted, readable text. Active sessions and device settings are excluded. Any app, person, storage provider, or cloud service you choose as the export destination can access that file under its own privacy practices. Only share backups with destinations you trust.',
      'Importing reads the backup you select and merges valid records into your local database. Android automatic app backup is disabled in the current app configuration. On iOS, device backups may include app data depending on your operating-system settings. Operating-system backups are controlled by the platform, rather than by a Momendoom cloud-sync service.',
    ],
  },
  {
    id: 'retention',
    title: '5. Retention and deletion',
    paragraphs: [
      'Local session records and preferences remain on your device until you remove them or clear the app’s storage. You can edit or remove notes and tags and delete completed sessions from session details. In Settings, use Delete all local data to clear session records and preferences and cancel session notifications. You can also clear app storage through Android settings or uninstall the app to remove its local app storage.',
      'Delete all local data also attempts to remove the app-owned export cache. Temporary import copies are removed after reading. Successful share copies may remain in a private cache so the receiving app can finish reading them; exports older than one day are pruned on the next export, and the operating system may also clear the cache.',
      'Deleting app data does not delete backups you saved or shared elsewhere, or copies in device backups. Delete those copies separately with the relevant storage or backup provider. Local deletion is a logical database deletion and is not a guaranteed forensic secure erase.',
      'There is no Momendoom account or server-side session history for the developer to delete. Because the developer cannot access your local database, deleting your local records must be done on your device.',
    ],
  },
  {
    id: 'security',
    title: '6. Data security',
    paragraphs: [
      'Momendoom uses the operating system’s app storage protections. Its local SQLite database does not use additional application-level encryption, and exported JSON backups are not encrypted. Protect your device with a screen lock, take care when entering sensitive information in notes, and store backups securely. No storage method can guarantee absolute security.',
    ],
  },
  {
    id: 'contact-data',
    title: '7. Information you send when contacting us',
    paragraphs: [
      'If you email the developer, you voluntarily provide your email address, message, and any attachments. This information is used to respond to your inquiry and resolve support or privacy issues. Email providers process the communication to deliver and store it under their own policies. Please do not send session backups or sensitive notes unless necessary for your request.',
      'Support correspondence is retained only as long as needed to address the inquiry and meet any applicable legal obligations. You may contact the developer to request deletion of correspondence you have provided, subject to those obligations.',
    ],
  },
  {
    id: 'children',
    title: '8. Children’s privacy',
    paragraphs: [
      'Momendoom does not knowingly collect children’s personal information through a remote service. The local-storage practices described in this policy apply to everyone using the app. If you believe a child has sent personal information to the developer through support, contact us so we can address it and delete it where appropriate.',
    ],
  },
  {
    id: 'changes',
    title: '9. Changes to this policy',
    paragraphs: [
      'This policy may be updated when the app or its data practices change. Updates will appear on this page with a revised effective date. Material changes that require additional notice or consent will be communicated as required before those practices take effect.',
    ],
  },
];

export default function MomendoomPrivacyPolicy() {
  return (
    <main className="min-h-screen px-5 py-10 text-slate-800 sm:px-8 sm:py-16">
      <article className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12">
        <Link href="/" className="text-sm text-slate-600 underline underline-offset-4">
          Back to portfolio
        </Link>
        <header className="mt-8 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold tracking-widest text-orange-700 uppercase">
            Momendoom
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-600">
            Effective date: <time dateTime="2026-10-16">October 16, 2026</time>
          </p>
          <p className="mt-6 text-base leading-7">
            Your time, your records. Momendoom keeps session tracking on your device, with backups
            shared only when you choose to export them.
          </p>
        </header>
        <nav aria-label="Privacy policy sections" className="my-8 rounded-xl bg-slate-50 p-5">
          <p className="font-semibold">On this page</p>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="underline underline-offset-4">
                  {section.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="underline underline-offset-4">
                10. Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-8">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-base leading-7 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <section id="contact" className="scroll-mt-8 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-semibold">10. Contact</h2>
            <p className="mt-3 leading-7 text-slate-700">
              For privacy questions or requests, contact {siteConfig.owner.fullName}, the developer
              of Momendoom, at{' '}
              <a
                className="break-all underline underline-offset-4"
                href={`mailto:${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
