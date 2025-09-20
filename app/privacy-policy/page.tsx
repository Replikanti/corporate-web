import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Mail, Phone, FileText } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="w-fit mx-auto">
            <Shield className="w-4 h-4 mr-2" />
            Ochrana osobních údajů
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Zásady ochrany osobních údajů</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Vaše soukromí je pro nás prioritou. Zde najdete podrobné informace o tom, jak zpracováváme vaše osobní
            údaje.
          </p>
          <p className="text-sm text-muted-foreground">Poslední aktualizace: 20. září 2025</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Úvod
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Brand Replikanti (dále jen "my", "nás", "naše" nebo "Replikanti") respektuje vaše soukromí a zavazuje se
                chránit vaše osobní údaje. Tyto zásady ochrany osobních údajů vysvětlují, jak shromažďujeme, používáme,
                sdílíme a chráníme vaše informace při používání našich služeb automatizace procesů přes WhatsApp.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle>1. Jaké údaje shromažďujeme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Osobní identifikační údaje</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Jméno a příjmení</li>
                  <li>E-mailová adresa</li>
                  <li>Telefonní číslo</li>
                  <li>Název společnosti a pozice</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Komunikační údaje</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>WhatsApp zprávy a jejich obsah</li>
                  <li>Metadata komunikace (čas, datum, typ zprávy)</li>
                  <li>Preference komunikace</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technické údaje</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>IP adresa</li>
                  <li>Informace o zařízení a prohlížeči</li>
                  <li>Logy používání služby</li>
                  <li>Cookies a podobné technologie</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle>2. Jak používáme vaše údaje</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Poskytování služeb</h3>
                  <p className="text-muted-foreground">
                    Používáme vaše údaje k poskytování, provozu a zlepšování našich služeb automatizace WhatsApp
                    komunikace.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Komunikace</h3>
                  <p className="text-muted-foreground">
                    Kontaktujeme vás ohledně vašeho účtu, aktualizací služeb, technické podpory a marketingových sdělení
                    (se souhlasem).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Zlepšování služeb</h3>
                  <p className="text-muted-foreground">
                    Analyzujeme používání našich služeb pro jejich vylepšení a vývoj nových funkcí.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Právní požadavky</h3>
                  <p className="text-muted-foreground">
                    Dodržujeme právní povinnosti, řešíme spory a vymáháme naše smlouvy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Basis */}
          <Card>
            <CardHeader>
              <CardTitle>3. Právní základ zpracování</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Souhlas</h3>
                    <p className="text-sm text-muted-foreground">Pro marketingovou komunikaci a nepovinné služby</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Smlouva</h3>
                    <p className="text-sm text-muted-foreground">Pro poskytování našich služeb podle smlouvy</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Oprávněný zájem</h3>
                    <p className="text-sm text-muted-foreground">Pro zlepšování služeb a technickou podporu</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Právní povinnost</h3>
                    <p className="text-sm text-muted-foreground">Pro dodržování právních předpisů</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle>4. Sdílení údajů</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Vaše osobní údaje nesdílíme s třetími stranami, kromě následujících případů:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Poskytovatelé služeb:</strong> Důvěryhodní partneři, kteří nám pomáhají provozovat naše
                    služby (hosting, analytika, technická podpora)
                  </li>
                  <li>
                    <strong>WhatsApp/Meta:</strong> Pro funkčnost WhatsApp Business API podle jejich podmínek
                  </li>
                  <li>
                    <strong>Právní požadavky:</strong> Když to vyžaduje zákon nebo soudní příkaz
                  </li>
                  <li>
                    <strong>Ochrana práv:</strong> Pro ochranu našich práv, majetku nebo bezpečnosti
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle>5. Zabezpečení údajů</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Implementujeme přiměřená technická a organizační opatření k ochraně vašich osobních údajů:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold mb-2">Šifrování</h3>
                    <p className="text-sm text-muted-foreground">
                      End-to-end šifrování komunikace a SSL/TLS pro přenos dat
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold mb-2">Přístupové kontroly</h3>
                    <p className="text-sm text-muted-foreground">Omezený přístup pouze pro autorizované osoby</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold mb-2">Pravidelné audity</h3>
                    <p className="text-sm text-muted-foreground">
                      Kontrola bezpečnostních opatření a aktualizace systémů
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold mb-2">Zálohování</h3>
                    <p className="text-sm text-muted-foreground">Pravidelné zálohy s bezpečným uložením</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle>6. Doba uchovávání údajů</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left">Typ údajů</th>
                        <th className="border border-border p-3 text-left">Doba uchovávání</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">Účetní údaje</td>
                        <td className="border border-border p-3">Po dobu aktivního účtu + 3 roky</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Komunikační data</td>
                        <td className="border border-border p-3">Po dobu poskytování služby + 1 rok</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Technické logy</td>
                        <td className="border border-border p-3">12 měsíců</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Marketingové údaje</td>
                        <td className="border border-border p-3">Do odvolání souhlasu</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>7. Vaše práva</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Podle GDPR máte následující práva ohledně vašich osobních údajů:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Právo na přístup</h3>
                    <p className="text-sm text-muted-foreground">Můžete požádat o kopii vašich osobních údajů</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Právo na opravu</h3>
                    <p className="text-sm text-muted-foreground">Můžete požádat o opravu nesprávných údajů</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Právo na výmaz</h3>
                    <p className="text-sm text-muted-foreground">Můžete požádat o smazání vašich údajů</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Právo na přenositelnost</h3>
                    <p className="text-sm text-muted-foreground">
                      Můžete požádat o přenos údajů k jinému poskytovateli
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Právo na omezení</h3>
                    <p className="text-sm text-muted-foreground">Můžete omezit zpracování vašich údajů</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Právo vznést námitku</h3>
                    <p className="text-sm text-muted-foreground">Můžete vznést námitku proti zpracování</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>8. Kontaktní informace</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Pokud máte jakékoli otázky ohledně těchto zásad nebo chcete uplatnit svá práva, kontaktujte nás:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">E-mail</h3>
                      <p className="text-muted-foreground">privacy@replikanti.xyz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Telefon</h3>
                      <p className="text-muted-foreground">+420 792 305 456</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold mb-2">Pověřenec pro ochranu osobních údajů</h3>
                  <p className="text-muted-foreground">
                    Pro záležitosti týkající se ochrany osobních údajů můžete kontaktovat našeho pověřence na adrese:
                    dpo@replikanti.xyz
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold mb-2">Úřad pro ochranu osobních údajů</h3>
                  <p className="text-muted-foreground">
                    Máte právo podat stížnost u dozorového úřadu - Úřadu pro ochranu osobních údajů ČR (www.uoou.cz).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card>
            <CardHeader>
              <CardTitle>9. Změny těchto zásad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tyto zásady můžeme čas od času aktualizovat. O významných změnách vás budeme informovat e-mailem nebo
                prostřednictvím naší služby. Doporučujeme pravidelně kontrolovat tyto zásady, abyste byli informováni o
                tom, jak chráníme vaše údaje.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
