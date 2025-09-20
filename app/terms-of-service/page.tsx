import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Obchodní podmínky - Replikanti',
  description: 'Obchodní podmínky společnosti Replikanti',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Obchodní podmínky
          </h1>
          <p className="text-xl text-gray-600">
            Podmínky poskytování služeb automatizace procesů
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Základní ustanovení</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Tyto obchodní podmínky upravují vztahy mezi společností <strong>Replikanti s.r.o.</strong> 
              (dále jen "Poskytovatel") a zákazníky při poskytování služeb automatizace procesů 
              prostřednictvím WhatsApp.
            </p>
            <div>
              <h4 className="font-semibold mb-2">Poskytovatel:</h4>
              <p>
                Replikanti s.r.o.<br />
                Email: info@replikanti.cz<br />
                Telefon: +420 XXX XXX XXX
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Předmět služeb</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>Poskytovatel nabízí následující služby:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Automatizace WhatsApp komunikace</strong> - nastavení chatbotů a automatických odpovědí</li>
              <li><strong>Integrace obchodních procesů</strong> - propojení s CRM, e-shopy a dalšími systémy</li>
              <li><strong>Analýza a reporting</strong> - měření efektivity automatizovaných procesů</li>
              <li><strong>Technická podpora</strong> - průběžná údržba a optimalizace systémů</li>
              <li><strong>Konzultační služby</strong> - návrhy na zlepšení procesů</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Uzavření smlouvy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Smlouva se uzavírá odesláním objednávky zákazníkem a její následným 
              potvrzením ze strany Poskytovatele.
            </p>
            <p>
              Objednávku lze učinit prostřednictvím:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Kontaktního formuláře na webových stránkách</li>
              <li>Emailu na info@replikanti.cz</li>
              <li>Telefonického hovoru</li>
              <li>Osobní konzultace</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Ceny a platební podmínky</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Ceny služeb jsou uvedeny v aktuálním ceníku na webových stránkách nebo 
              ve specifické nabídce pro zákazníka.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Ceny jsou uvedeny včetně DPH</li>
              <li>Platba je splatná do 14 dnů od vystavení faktury</li>
              <li>Platby lze provádět bankovním převodem nebo kartou</li>
              <li>Při opožděné platbě je účtován úrok z prodlení</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. WhatsApp a automatizace</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Při využívání služeb automatizace přes WhatsApp platí následující podmínky:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Zákazník musí mít aktivní WhatsApp Business účet</li>
              <li>Poskytovatel není odpovědný za výpadky služeb WhatsApp</li>
              <li>Automatizované zprávy musí být v souladu s pravidly WhatsApp</li>
              <li>Zákazník je odpovědný za obsah automatizovaných zpráv</li>
              <li>Poskytovatel si vyhrazuje právo pozastavit služby při porušení pravidel</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6. Povinnosti stran</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Povinnosti Poskytovatele:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Poskytovat služby v dohodnuté kvalitě a termínech</li>
                <li>Zajistit bezpečnost a ochranu dat</li>
                <li>Poskytovat technickou podporu</li>
                <li>Informovat o změnách služeb</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Povinnosti Zákazníka:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Platit za služby ve stanovených termínech</li>
                <li>Poskytnout potřebné informace a přístupy</li>
                <li>Dodržovat pravidla WhatsApp a další platné předpisy</li>
                <li>Informovat o změnách ve svém podnikání</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>7. Odpovědnost a reklamace</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Poskytovatel odpovídá za škody způsobené porušením svých povinností 
              do výše ceny poskytnutých služeb.
            </p>
            <p>
              Reklamace lze uplatnit do 30 dnů od zjištění vady. Reklamace se podávají 
              písemně na email: reklamace@replikanti.cz
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>8. Ukončení smlouvy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Smlouvu lze ukončit:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Dohodou stran kdykoli</li>
              <li>Výpovědí s 30denní výpovědní lhůtou</li>
              <li>Okamžitě při podstatném porušení podmínek</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Závěrečná ustanovení</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Tyto obchodní podmínky se řídí právním řádem České republiky. 
              Případné spory budou řešeny u příslušných českých soudů.
            </p>
            <p>
              Poskytovatel si vyhrazuje právo změnit tyto podmínky. O změnách bude 
              zákazník informován minimálně 30 dní předem.
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-12 text-gray-600">
          <p>Tyto podmínky jsou platné od: {new Date().toLocaleDateString('cs-CZ')}</p>
        </div>
      </div>
    </div>
  );
}