import LegalPageLayout from "../components/LegalPageLayout";

export default function DatenschutzPage() {
  return (
    <LegalPageLayout title="Datenschutzerklärung">
      <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold">
        Informationen gemäß Art. 13 DSGVO
      </p>
      <p>
        <strong className="text-zinc-300">1. Verantwortlicher</strong>
        <br />
        Döner & Grill Haus (Demo)
        <br />
        Musterstraße 1, 10115 Berlin
        <br />
        E-Mail: kontakt@demo-doener-grill.de
      </p>
      <p>
        <strong className="text-zinc-300">2. Zweck und Rechtsgrundlage der Verarbeitung</strong>
        <br />
        Beim Besuch dieser Demo-Website werden technisch notwendige Daten (z. B. IP-Adresse,
        Browsertyp, Zeitpunkt des Zugriffs) in Server-Logfiles verarbeitet, um die Website
        bereitzustellen (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
      <p>
        <strong className="text-zinc-300">3. Cookies</strong>
        <br />
        Diese Demo-Seite kann Cookies oder vergleichbare Technologien einsetzen, sofern für den
        Betrieb erforderlich. Eine Einwilligung für nicht notwendige Cookies wäre bei einem
        produktiven Auftritt über ein Consent-Banner einzuholen.
      </p>
      <p>
        <strong className="text-zinc-300">4. Externe Dienste</strong>
        <br />
        Eingebettete Inhalte (z. B. Google Maps) können Daten an Drittanbieter übermitteln. Bitte
        beachten Sie die Datenschutzhinweise der jeweiligen Anbieter.
      </p>
      <p>
        <strong className="text-zinc-300">5. Speicherdauer</strong>
        <br />
        Personenbezogene Daten werden nur so lange gespeichert, wie es für die genannten Zwecke
        erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
      </p>
      <p>
        <strong className="text-zinc-300">6. Ihre Rechte</strong>
        <br />
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch. Beschwerden können Sie bei einer Aufsichtsbehörde
        erheben (z. B. Berliner Beauftragte für Datenschutz und Informationsfreiheit).
      </p>
      <p>
        <strong className="text-zinc-300">7. SSL-Verschlüsselung</strong>
        <br />
        Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung, sofern der Hosting-
        Anbieter dies bereitstellt.
      </p>
      <p className="p-4 rounded-2xl glass border border-brand-gold/20 text-zinc-500 text-xs">
        Hinweis: Muster-Datenschutzerklärung zu Demonstrationszwecken. Für eine echte Website ist
        eine individuelle, rechtlich geprüfte Datenschutzerklärung erforderlich.
      </p>
    </LegalPageLayout>
  );
}
