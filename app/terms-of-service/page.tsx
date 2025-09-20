import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="w-fit mx-auto">
            <Scale className="w-4 h-4 mr-2" />
            Obchodní podmínky
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Obchodní podmínky</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Tyto obchodní podmínky upravují používání našich služeb automatizace procesů přes WhatsApp.
          </p>
          <p className="text-sm text-muted-foreground">Poslední aktualizace: 20. září 2025</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Úvodní ustanovení
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Tyto obchodní podmínky (dále jen "Podmínky") upravují vztah mezi brandem Replikanti (dále jen
                "Poskytovatel" nebo "my") a uživateli našich služeb (dále jen "Zákazník" nebo "vy").
              </p>
              <p>
                Používáním našich služeb souhlasíte s těmito Podmínkami. Pokud s nimi nesouhlasíte, nepoužívejte naše
                služby.
              </p>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card>
            <CardHeader>
              <CardTitle>1. Popis služeb</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Automatizace WhatsApp komunikace</h3>
                <p className="text-muted-foreground mb-4">
                  Poskytujeme služby automatizace obchodních procesů prostřednictvím WhatsApp Business API, včetně:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automatické odpovědi na zprávy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Správa objednávek a rezervací</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Integrace s CRM systémy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Analytika a reporty</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Technická podpora</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Školení a konzultace</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration and Account */}
          <Card>
            <CardHeader>
              <CardTitle>2. Registrace a účet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Vytvoření účtu</h3>
                <p className="text-muted-foreground">
                  Pro používání našich služeb je nutné vytvořit účet a poskytnout pravdivé, aktuální a úplné informace.
                  Jste odpovědní za udržování bezpečnosti vašeho účtu a hesla.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Oprávnění k používání</h3>
                <p className="text-muted-foreground">
                  Musíte být starší 18 let nebo mít souhlas zákonného zástupce. Pokud jednáte jménem společnosti, musíte
                  mít oprávnění k uzavření této smlouvy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">WhatsApp Business účet</h3>
                <p className="text-muted-foreground">
                  Pro využívání našich služeb musíte mít platný WhatsApp Business účet a souhlasit s podmínkami
                  WhatsApp.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Usage Rules */}
          <Card>
            <CardHeader>
              <CardTitle>3. Pravidla používání</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Povolené použití</h3>
                <p className="text-muted-foreground mb-2">
                  Naše služby můžete používat pouze pro zákonné obchodní účely v souladu s:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Těmito obchodními podmínkami</li>
                  <li>Podmínkami WhatsApp Business</li>
                  <li>Platnými zákony a předpisy</li>
                  <li>Dobrými mravy a obchodními praktikami</li>
                </ul>
              </div>
              <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Zakázané použití
                </h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                  <li>Odesílání spamu nebo nevyžádané komunikace</li>
                  <li>Porušování práv duševního vlastnictví</li>
                  <li>Šíření škodlivého obsahu nebo malwaru</li>
                  <li>Obtěžování nebo diskriminace uživatelů</li>
                  <li>Obcházení bezpečnostních opatření</li>
                  <li>Používání služeb pro nezákonné účely</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Pricing and Payment */}
          <Card>
            <CardHeader>
              <CardTitle>4. Ceny a platby</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Cenové plány</h3>
                <p className="text-muted-foreground">
                  Aktuální ceny našich služeb jsou uvedeny na našich webových stránkách. Ceny jsou uvedeny bez DPH,
                  která bude připočtena podle platných předpisů.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Platební podmínky</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-medium text-sm">Měsíční plány</h4>
                    <p className="text-xs text-muted-foreground">Platba předem, automatické obnovení</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-medium text-sm">Roční plány</h4>
                    <p className="text-xs text-muted-foreground">Platba předem, sleva za roční závazek</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-medium text-sm">Enterprise</h4>
                    <p className="text-xs text-muted-foreground">Individuální cenová nabídka</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-medium text-sm">Splatnost</h4>
                    <p className="text-xs text-muted-foreground">14 dní od vystavení faktury</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Změny cen</h3>
                <p className="text-muted-foreground">
                  Vyhrazujeme si právo změnit ceny s 30denním předstihem. Stávající zákazníci budou informováni
                  e-mailem.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card>
            <CardHeader>
              <CardTitle>5. Dostupnost služeb</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Úroveň služeb (SLA)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Dostupnost systému</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">&lt;2s</div>
                    <div className="text-sm text-muted-foreground">Doba odezvy</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Plánované výpadky</h3>
                <p className="text-muted-foreground">
                  O plánovaných údržbách budeme informovat minimálně 24 hodin předem. Snažíme se je plánovat mimo
                  pracovní dobu.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Závislost na třetích stranách</h3>
                <p className="text-muted-foreground">
                  Naše služby závisí na dostupnosti WhatsApp Business API. Nejsme odpovědní za výpadky způsobené třetími
                  stranami.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data and Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>6. Údaje a soukromí</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Zpracování osobních údajů</h3>
                <p className="text-muted-foreground">
                  Zpracování osobních údajů se řídí našimi Zásadami ochrany osobních údajů, které jsou nedílnou součástí
                  těchto podmínek.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Vaše odpovědnost</h3>
                <p className="text-muted-foreground">
                  Jste odpovědní za to, že máte oprávnění zpracovávat osobní údaje vašich zákazníků prostřednictvím
                  našich služeb v souladu s GDPR.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Zabezpečení dat</h3>
                <p className="text-muted-foreground">
                  Implementujeme přiměřená technická a organizační opatření k ochraně vašich dat. Podrobnosti najdete v
                  našich bezpečnostních zásadách.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Liability and Warranties */}
          <Card>
            <CardHeader>
              <CardTitle>7. Odpovědnost a záruky</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Omezení odpovědnosti</h3>
                <p className="text-muted-foreground">
                  Naše odpovědnost za škody je omezena na výši ročního poplatku za služby. Neneseme odpovědnost za
                  nepřímé škody, ztrátu zisku nebo dat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Záruka služeb</h3>
                <p className="text-muted-foreground">
                  Poskytujeme služby s odbornou péčí, ale nezaručujeme, že budou bezchybné nebo nepřerušované.
                  Nezaručujeme kompatibilitu se všemi systémy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Vaše odpovědnost</h3>
                <p className="text-muted-foreground">
                  Jste odpovědní za obsah, který prostřednictvím našich služeb odesíláte, a za dodržování všech platných
                  zákonů a předpisů.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle>8. Ukončení smlouvy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Ukončení ze strany zákazníka</h3>
                <p className="text-muted-foreground">
                  Můžete ukončit používání našich služeb kdykoli prostřednictvím vašeho účtu nebo kontaktováním naší
                  podpory. Při měsíčních plánech platí výpovědní lhůta do konce fakturačního období.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Ukončení z naší strany</h3>
                <p className="text-muted-foreground">
                  Můžeme ukončit poskytování služeb při porušení těchto podmínek, nezaplacení poplatků nebo z jiných
                  závažných důvodů s 30denní výpovědní lhůtou.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Následky ukončení</h3>
                <p className="text-muted-foreground">
                  Po ukončení smlouvy bude váš přístup k službám ukončen a data budou smazána podle našich zásad
                  uchovávání dat.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>9. Změny podmínek</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tyto podmínky můžeme změnit s 30denním předstihem. O změnách vás budeme informovat e-mailem nebo
                prostřednictvím naší služby. Pokračováním v používání služeb po účinnosti změn s nimi souhlasíte.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>10. Rozhodné právo a řešení sporů</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Rozhodné právo</h3>
                <p className="text-muted-foreground">Tyto podmínky se řídí právním řádem České republiky.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Řešení sporů</h3>
                <p className="text-muted-foreground">
                  Spory se budeme snažit řešit smírnou cestou. Pokud to nebude možné, jsou k řešení sporů příslušné
                  soudy České republiky.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Spotřebitelské spory</h3>
                <p className="text-muted-foreground">
                  Spotřebitelé mohou využít mimosoudní řešení sporů prostřednictvím České obchodní inspekce nebo
                  evropské platformy ODR.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>11. Kontaktní informace</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Pro otázky týkající se těchto obchodních podmínek nás kontaktujte:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Obecné dotazy</h3>
                    <p className="text-sm text-muted-foreground">info@replikanti.xyz</p>
                    <p className="text-sm text-muted-foreground">+420 123 456 789</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Právní záležitosti</h3>
                    <p className="text-sm text-muted-foreground">legal@replikanti.xyz</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Provisions */}
          <Card>
            <CardHeader>
              <CardTitle>12. Závěrečná ustanovení</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Pokud se některé ustanovení těchto podmínek stane neplatným nebo nevymahatelným, ostatní ustanovení
                  zůstávají v platnosti.
                </p>
                <p className="text-muted-foreground">
                  Tyto podmínky představují úplnou dohodu mezi námi a nahrazují všechny předchozí dohody týkající se
                  předmětu těchto podmínek.
                </p>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Účinnost:</strong> Tyto obchodní podmínky nabývají účinnosti dnem 20. září 2025.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
