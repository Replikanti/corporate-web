import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Shield, Clock } from 'lucide-react';

export const metadata = {
  title: 'Mazání uživatelských dat - Replikanti',
  description: 'Požádejte o smazání vašich osobních údajů',
};

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-3 rounded-full">
              <Trash2 className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mazání uživatelských dat
          </h1>
          <p className="text-xl text-gray-600">
            Vymazání vašich osobních údajů z našich systémů
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-blue-600" />
              Vaše práva podle GDPR
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              V souladu s Nařízením GDPR máte právo požádat o vymazání vašich osobních údajů 
              (právo být zapomenut). Toto právo můžete uplatnit v následujících případech:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Osobní údaje již nejsou potřebné pro původní účely zpracování</li>
              <li>Odvoláváte souhlas se zpracováním</li>
              <li>Vznášíte námitku proti zpracování</li>
              <li>Údaje byly zpracovávány nezákonně</li>
              <li>Údaje je třeba vymazat pro splnění právní povinnosti</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Jaká data můžeme vymazat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">✓ Můžeme vymazat:</h4>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>Kontaktní údaje (email, telefon)</li>
                  <li>WhatsApp komunikační historie</li>
                  <li>Marketingové preference</li>
                  <li>Technické logy a cookies</li>
                  <li>Nepovinné profilové informace</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">⚠ Nemůžeme vymazat:</h4>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>Účetní doklady (zákonná povinnost - 10 let)</li>
                  <li>Smluvní dokumenty (právní nároky)</li>
                  <li>Anonymizované analytické údaje</li>
                  <li>Zálohy systému (po dobu zálohování)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-blue-600" />
              Proces mazání dat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold mb-2">Podání žádosti</h4>
                <p className="text-sm">Zašlete nám žádost o vymazání dat na uvedený email</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold mb-2">Ověření identity</h4>
                <p className="text-sm">Ověříme vaši identitu pro zabezpečení procesu</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">Vymazání dat</h4>
                <p className="text-sm">Provedeme vymazání do 30 dnů a potvrdíme vám</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Jak požádat o vymazání dat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Důležité informace:</h4>
              <ul className="list-disc ml-4 text-yellow-700 text-sm space-y-1">
                <li>Žádost musí být podána z emailu, který máme v naší databázi</li>
                <li>Vymazání dat je nevratné</li>
                <li>Po vymazání dat nebudeme moci poskytovat některé služby</li>
                <li>Některé zákonné povinnosti nás nutí údaje uchovat</li>
              </ul>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-700">
                Pro podání žádosti o vymazání dat nás kontaktujte na:
              </p>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 inline-block">
                <div className="space-y-2">
                  <p className="text-lg font-semibold">📧 privacy@replikanti.cz</p>
                  <p className="text-sm text-gray-600">Předmět: Žádost o vymazání osobních údajů</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Nebo použijte náš kontaktní formulář:
                </p>
                <Button 
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Kontaktní formulář
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vzor žádosti o vymazání dat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 border rounded-lg p-4 font-mono text-sm">
              <p><strong>Předmět:</strong> Žádost o vymazání osobních údajů</p>
              <br />
              <p>Dobrý den,</p>
              <br />
              <p>
                na základě čl. 17 Nařízení GDPR žádám o vymazání všech mých osobních údajů 
                z vašich systémů.
              </p>
              <br />
              <p><strong>Identifikační údaje:</strong></p>
              <p>Jméno a příjmení: [Vaše jméno]</p>
              <p>Email: [Váš email]</p>
              <p>Telefon: [Váš telefon - pokud jej máme]</p>
              <br />
              <p><strong>Důvod žádosti:</strong> [Uveďte důvod - např. odvolání souhlasu]</p>
              <br />
              <p>Děkuji za vyřízení.</p>
              <br />
              <p>S pozdravem,<br />[Vaše jméno]</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 text-gray-600">
          <p>Máte další otázky? Kontaktujte nás na <strong>privacy@replikanti.cz</strong></p>
        </div>
      </div>
    </div>
  );
}