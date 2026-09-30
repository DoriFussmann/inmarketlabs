import LegalPage, { EmailLink, LegalSection } from "@/pages/LegalPage";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" documentTitle="Privacy Policy | InMarketLab">
      <p>
        This Privacy Policy explains how InMarketLabs, LLC ("InMarketLab," "we," "us") handles information in connection with this website (the "Site"). It covers this Site only. Data we process on behalf of clients under service agreements is governed by those agreements.
      </p>
      <LegalSection title="Information we collect">
        <p>This Site does not have user accounts or contact forms, and we do not use cookies, analytics tools, or advertising pixels on it. The limited information involved is:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Technical data. Our hosting provider automatically processes standard technical information, such as IP address, browser type, pages requested, and timestamps, to deliver and secure the Site.</li>
          <li>Fonts. The Site loads fonts from Google Fonts, which means your browser connects to Google's servers and Google receives your IP address.</li>
          <li>Booking a meeting. Our "Book a strategy session" links open a Google Calendar booking page. Information you enter there, such as your name and email address, is collected through Google and shared with us so we can schedule the meeting. Google's privacy policy also applies to that page.</li>
          <li>Emails. If you email us, we receive the information you choose to send.</li>
        </ul>
      </LegalSection>
      <LegalSection title="How we use information">
        <p>We use this information to respond to you, schedule and hold meetings, operate and secure the Site, and comply with legal obligations.</p>
      </LegalSection>
      <LegalSection title="How we share information">
        <p>We do not sell personal information, and we do not share it for cross-context behavioral advertising. We share information only with service providers that help us operate the Site and schedule meetings (such as our hosting provider and Google), when required by law, or in connection with a business transaction such as a merger or acquisition.</p>
      </LegalSection>
      <LegalSection title="Retention">
        <p>We keep information only as long as needed for the purposes described above or as required by law.</p>
      </LegalSection>
      <LegalSection title="Your choices and rights">
        <p>You can ask us to access, correct, or delete personal information we hold about you by emailing <EmailLink />. Depending on where you live, including California, you may have additional rights under applicable law. We will not discriminate against you for exercising them.</p>
      </LegalSection>
      <LegalSection title="Do Not Track">
        <p>We do not track visitors over time or across third-party websites, so Do Not Track signals do not change how this Site operates.</p>
      </LegalSection>
      <LegalSection title="Children">
        <p>This Site is intended for business audiences and is not directed to children under 16. We do not knowingly collect personal information from children.</p>
      </LegalSection>
      <LegalSection title="Security">
        <p>We use reasonable measures to protect information, but no method of transmission or storage is completely secure.</p>
      </LegalSection>
      <LegalSection title="Changes to this policy">
        <p>We may update this policy from time to time. The effective date above shows when it was last updated.</p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>Questions about this policy: <EmailLink /></p>
      </LegalSection>
    </LegalPage>
  );
}
