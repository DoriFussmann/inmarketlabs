import { Link } from "wouter";
import LegalPage, { EmailLink, LegalSection } from "@/pages/LegalPage";

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" documentTitle="Terms of Use | InMarketLab">
      <p>
        These Terms of Use govern your use of this website (the "Site"), operated by InMarketLabs, LLC ("InMarketLab," "we," "us"). By using the Site, you agree to these terms. If you do not agree, please do not use the Site.
      </p>
      <LegalSection title="Informational purposes only">
        <p>The Site describes our services for general informational purposes. Nothing on it is an offer, a guarantee of results, or professional advice. Any services we provide are governed by a separate written agreement, which controls over anything on the Site.</p>
      </LegalSection>
      <LegalSection title="Intellectual property">
        <p>The Site and its content, including text, graphics, logos, and design, are owned by InMarketLabs, LLC or its licensors. You may view and share the Site for your own informational purposes. You may not copy, modify, distribute, or commercially use its content without our written permission. Other company names mentioned on the Site belong to their respective owners.</p>
      </LegalSection>
      <LegalSection title="Acceptable use">
        <p>You agree not to use the Site unlawfully, interfere with its operation or security, attempt to gain unauthorized access, or scrape or harvest its content by automated means.</p>
      </LegalSection>
      <LegalSection title="Third-party services">
        <p>The Site links to third-party services, such as Google Calendar for booking meetings. We are not responsible for third-party services, and your use of them is subject to their own terms and policies.</p>
      </LegalSection>
      <LegalSection title="Disclaimer">
        <p>The Site is provided "as is" and "as available," without warranties of any kind, express or implied, including warranties of accuracy, merchantability, fitness for a particular purpose, and non-infringement.</p>
      </LegalSection>
      <LegalSection title="Limitation of liability">
        <p>To the fullest extent permitted by law, InMarketLabs, LLC will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your use of the Site.</p>
      </LegalSection>
      <LegalSection title="Changes">
        <p>We may update these terms from time to time. The effective date above shows when they were last updated. Continued use of the Site after changes means you accept the updated terms.</p>
      </LegalSection>
      <LegalSection title="Privacy">
        <p>
          Our <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link> explains how we handle information in connection with the Site.
        </p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>Questions about these terms: <EmailLink /></p>
      </LegalSection>
    </LegalPage>
  );
}
