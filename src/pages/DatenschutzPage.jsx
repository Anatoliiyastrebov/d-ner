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
        <strong className="text-zinc-300">2. Hosting</strong>
        <br />
        Diese Website wird bei Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA
        gehostet. Beim Aufruf der Website verarbeitet Cloudflare technisch notwendige Daten (z. B.
        IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs), um die Website auszuliefern und vor
        Angriffen zu schützen. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren
        und zuverlässigen Bereitstellung (Art. 6 Abs. 1 lit. f DSGVO). Mit Cloudflare besteht ein
        Auftragsverarbeitungsvertrag. Cloudflare ist nach dem EU-US Data Privacy Framework
        zertifiziert; Übermittlungen in die USA stützen sich auf den Angemessenheitsbeschluss der
        EU-Kommission (Art. 45 DSGVO).
      </p>
      <p>
        <strong className="text-zinc-300">3. Cookies und Tracking</strong>
        <br />
        Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste.
      </p>
      <p>
        <strong className="text-zinc-300">4. Schriftarten</strong>
        <br />
        Die verwendeten Schriftarten sind lokal auf unserem Server eingebunden. Beim Aufruf der
        Website wird keine Verbindung zu Servern von Google oder anderen Anbietern hergestellt.
      </p>
      <p>
        <strong className="text-zinc-300">5. Google Maps</strong>
        <br />
        Auf der Startseite kann eine Karte von Google Maps angezeigt werden (Anbieter: Google
        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Die Karte wird erst
        geladen, wenn du auf „Karte laden“ klickst. Erst dann werden Daten wie deine IP-Adresse an
        Google übertragen; dabei kann auch eine Übermittlung an Google LLC in den USA erfolgen, die
        nach dem EU-US Data Privacy Framework zertifiziert ist. Rechtsgrundlage ist deine
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Die Einwilligung gilt nur für
        den aktuellen Seitenaufruf und wird nicht gespeichert. Weitere Informationen:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange hover:text-brand-amber transition-colors"
        >
          policies.google.com/privacy
        </a>
        .
      </p>
      <p>
        <strong className="text-zinc-300">6. Kontakt per Telefon oder E-Mail</strong>
        <br />
        Wenn du uns anrufst oder eine E-Mail schreibst, verarbeiten wir deine Angaben (z. B. Name,
        Telefonnummer, Lieferadresse, Bestellung), um deine Anfrage oder Bestellung zu bearbeiten
        (Art. 6 Abs. 1 lit. b DSGVO, bei sonstigen Anfragen Art. 6 Abs. 1 lit. f DSGVO).
      </p>
      <p>
        <strong className="text-zinc-300">7. Speicherdauer</strong>
        <br />
        Personenbezogene Daten werden nur so lange gespeichert, wie es für die genannten Zwecke
        erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
      </p>
      <p>
        <strong className="text-zinc-300">8. Deine Rechte</strong>
        <br />
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch gegen Verarbeitungen auf Grundlage berechtigter
        Interessen (Art. 15–18, 20, 21 DSGVO). Eine erteilte Einwilligung kannst du jederzeit mit
        Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Beschwerden kannst du bei einer
        Aufsichtsbehörde einreichen, z. B. bei der Berliner Beauftragten für Datenschutz und
        Informationsfreiheit.
      </p>
      <p>
        <strong className="text-zinc-300">9. SSL-/TLS-Verschlüsselung</strong>
        <br />
        Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennst du an „https://“ in der Adresszeile deines Browsers.
      </p>
      <p className="p-4 rounded-2xl glass border border-brand-gold/20 text-zinc-500 text-xs">
        Hinweis: Muster-Datenschutzerklärung zu Demonstrationszwecken. Für eine echte Website ist
        eine individuelle, rechtlich geprüfte Datenschutzerklärung erforderlich.
      </p>
    </LegalPageLayout>
  );
}
