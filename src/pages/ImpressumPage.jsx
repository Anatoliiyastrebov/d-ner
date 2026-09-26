import LegalPageLayout from "../components/LegalPageLayout";
import { phone } from "../data/content";

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum">
      <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold">
        Angaben gemäß § 5 DDG
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
        Telefon: {phone.display}
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
        <strong className="text-zinc-300">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</strong>
        <br />
        Max Mustermann
        <br />
        Musterstraße 1, 10115 Berlin
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
