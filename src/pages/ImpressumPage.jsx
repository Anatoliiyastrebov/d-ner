import LegalPageLayout from "../components/LegalPageLayout";

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum">
      <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold">
        Angaben gemäß § 5 TMG
      </p>
      <p>
        <strong className="text-zinc-300">Döner & Grill Haus</strong> (Demo)
        <br />
        Musterstraße 1
        <br />
        10115 Berlin
        <br />
        Deutschland
      </p>
      <p>
        <strong className="text-zinc-300">Vertreten durch:</strong>
        <br />
        Max Mustermann (Demo)
      </p>
      <p>
        <strong className="text-zinc-300">Kontakt</strong>
        <br />
        Telefon: +49 30 123 456 78
        <br />
        E-Mail:{" "}
        <a
          href="mailto:kontakt@demo-doener-grill.de"
          className="text-brand-orange hover:text-brand-amber transition-colors"
        >
          kontakt@demo-doener-grill.de
        </a>
      </p>
      <p>
        <strong className="text-zinc-300">Umsatzsteuer-ID</strong>
        <br />
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        DE123456789 (Muster, Demo)
      </p>
      <p>
        <strong className="text-zinc-300">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong>
        <br />
        Max Mustermann
        <br />
        Musterstraße 1, 10115 Berlin
      </p>
      <p>
        <strong className="text-zinc-300">EU-Streitschlichtung</strong>
        <br />
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange hover:text-brand-amber transition-colors"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
      <p>
        <strong className="text-zinc-300">Verbraucherstreitbeilegung / Universalschlichtungsstelle</strong>
        <br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <p className="p-4 rounded-2xl glass border border-brand-gold/20 text-zinc-500 text-xs">
        Hinweis: Dies ist eine Demo-Webseite. Es handelt sich um kein echtes Unternehmen und keine
        rechtsverbindlichen Angaben.
      </p>
    </LegalPageLayout>
  );
}
