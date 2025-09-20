"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Zap, Shield, Users, ArrowRight, CheckCircle, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🚀 Nová generace automatizace
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Automatizujte své procesy přes <span className="text-primary">WhatsApp</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Zvyšte efektivitu vašeho podnikání s našimi pokročilými řešeními pro automatizaci komunikace a
                  obchodních procesů pomocí WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8"
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Dobrý den, mám zájem o Vaše služby. Můžeme si o tom pohovořit? Děkuji.",
                    )
                    const phoneNumber = "420123456789"
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
                  }}
                >
                  Začít zdarma
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent"
                  onClick={() => {
                    const element = document.getElementById("sluzby")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Zjistit více
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">100+ spokojených klientů</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-card rounded-2xl p-8 shadow-2xl border border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">WhatsApp Automatizace</h3>
                      <p className="text-sm text-muted-foreground">Aktivní nyní</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm">Nová objednávka přijata ✅</p>
                      <p className="text-xs text-muted-foreground">Automaticky zpracováno</p>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-3">
                      <p className="text-sm">Zákazník kontaktován 📱</p>
                      <p className="text-xs text-muted-foreground">Odpověď za 2 sekundy</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3">
                      <p className="text-sm">Platba potvrzena 💳</p>
                      <p className="text-xs text-muted-foreground">Proces dokončen</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="sluzby" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Naše služby
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Proč si vybrat Replikanti?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Nabízíme komplexní řešení pro automatizaci vašich obchodních procesů
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>WhatsApp Integrace</CardTitle>
                <CardDescription>
                  Plná integrace s WhatsApp Business API pro automatickou komunikaci s klienty
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Automatické odpovědi
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Správa objednávek
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Notifikace v reálném čase
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Rychlá Automatizace</CardTitle>
                <CardDescription>Okamžité zpracování požadavků a automatizace opakujících se úkolů</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Zpracování za sekundy
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    24/7 dostupnost
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Škálovatelné řešení
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Bezpečnost & Soukromí</CardTitle>
                <CardDescription>Nejvyšší standardy zabezpečení a ochrany osobních údajů podle GDPR</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    GDPR compliance
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    End-to-end šifrování
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Pravidelné audity
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                O nás
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">Jsme experti na automatizaci</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Replikanti je český technologický brand specializující se na automatizaci obchodních procesů. Naším
                cílem je pomoci podnikům zvýšit efektivitu a ušetřit čas prostřednictvím inteligentních řešení.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Spokojených klientů</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50k+</div>
                  <div className="text-sm text-muted-foreground">Zpracovaných zpráv</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Dostupnost systému</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Technická podpora</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Náš tým</h3>
                      <p className="text-sm text-muted-foreground">Odborníci s dlouholetými zkušenostmi</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-medium">Technologické expertíza</h4>
                      <p className="text-sm text-muted-foreground">
                        Specializujeme se na nejmodernější technologie pro automatizaci
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-medium">Zákaznický přístup</h4>
                      <p className="text-sm text-muted-foreground">
                        Každé řešení přizpůsobujeme specifickým potřebám klienta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Připraveni začít automatizovat?</h2>
            <p className="text-xl opacity-90 text-pretty">
              Kontaktujte nás ještě dnes a zjistěte, jak můžeme pomoci vašemu podnikání růst
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Dobrý den, mám zájem o Vaše služby. Můžeme si o tom pohovořit? Děkuji.",
                  )
                  const phoneNumber = "420123456789"
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
                }}
              >
                Bezplatná konzultace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                onClick={() => {
                  const element = document.getElementById("sluzby")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Zobrazit demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Kontakt
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Pojďme si promluvit</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Máte otázky nebo chcete začít s automatizací? Jsme tu pro vás.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Kontaktujte nás přes WhatsApp</CardTitle>
                <CardDescription className="text-lg">
                  Klikněte na tlačítko níže a napište nám přímo přes WhatsApp. Odpovíme vám co nejdříve!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-muted-foreground">+420 123 456 789</p>
                    </div>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Dobrý den, mám zájem o Vaše služby. Můžeme si o tom pohovořit? Děkuji.",
                    )
                    const phoneNumber = "420123456789"
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Napsat na WhatsApp
                </Button>
                <p className="text-sm text-muted-foreground">Zpráva bude předvyplněna, stačí ji odeslat</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
