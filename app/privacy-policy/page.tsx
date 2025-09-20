import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Zásady ochrany osobních údajů - Replikanti',
  description: 'Zásady ochrany osobních údajů společnosti Replikanti',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zásady ochrany osobních údajů
          </h1>
          <p className="text-xl text-gray-600">
            Transparentní informace o zpracování vašich osobních údajů
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Správce osobních údajů</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Správcem vašich osobních údajů je společnost <strong>Replikanti s.r.o.</strong>
            </p>
            <p>
              <strong>Kontaktní údaje:</strong><br />
              Email: privacy@replikanti.cz<br />
              Telefon: +420 XXX XXX XXX
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Jaké údaje zpracováváme</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>Zpracováváme následující kategorie osobních údajů:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Identifikační údaje:</strong> jméno, příjmení, email, telefon</li>
              <li><strong>Komunikační údaje:</strong> zprávy přes WhatsApp, historie komunikace</li>
              <li><strong>Technické údaje:</strong> IP adresa, typ zařízení, prohlížeč</li>
              <li><strong>Obchodní údaje:</strong> informace o službách, fakturační údaje</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Účel zpracování a právní základ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Poskytování služeb automatizace</h4>
              <p>Právní základ: Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">WhatsApp komunikace</h4>
              <p>Právní základ: Souhlas (čl. 6 odst. 1 písm. a) GDPR)</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Marketingové účely</h4>
              <p>Právní základ: Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. WhatsApp a automatizace</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Naše služby využívají WhatsApp Business API pro automatizaci vašich procesů. 
              Při využívání těchto služeb:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Zpracováváme zprávy pouze pro automatizaci vašich obchodních procesů</li>
              <li>Údaje nesdílíme s třetími stranami bez vašeho souhlasu</li>
              <li>Používáme bezpečné šifrování pro ochranu komunikace</li>
              <li>Máte kontrolu nad automatizovanými procesy</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. Doba uchovávání údajů</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Smluvní údaje:</strong> po dobu trvání smlouvy + 3 roky</li>
              <li><strong>WhatsApp komunikace:</strong> po dobu poskytování služby</li>
              <li><strong>Marketingové účely:</strong> do odvolání souhlasu</li>
              <li><strong>Účetní doklady:</strong> 10 let podle zákona</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6. Vaše práva</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>Máte následující práva ohledně svých osobních údajů:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Právo na přístup</strong> - získat kopii svých údajů</li>
              <li><strong>Právo na opravu</strong> - opravit nesprávné údaje</li>
              <li><strong>Právo na vymazání</strong> - požádat o smazání údajů</li>
              <li><strong>Právo na omezení</strong> - omezit zpracování</li>
              <li><strong>Právo na přenositelnost</strong> - získat údaje v přenositelném formátu</li>
              <li><strong>Právo vznést námitku</strong> - namítat proti zpracování</li>
            </ul>
            <p className="mt-4">
              Pro uplatnění svých práv nás kontaktujte na: <strong>privacy@replikanti.cz</strong>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Kontakt a stížnosti</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              V případě dotazů nebo stížností nás kontaktujte na <strong>privacy@replikanti.cz</strong>
            </p>
            <p>
              Máte také právo podat stížnost u Úřadu pro ochranu osobních údajů:
            </p>
            <p>
              <strong>Úřad pro ochranu osobních údajů</strong><br />
              Pplk. Sochora 27<br />
              170 00 Praha 7<br />
              Web: www.uoou.cz
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-12 text-gray-600">
          <p>Tyto zásady byly naposledy aktualizovány: {new Date().toLocaleDateString('cs-CZ')}</p>
        </div>
      </div>
    </div>
  );
}