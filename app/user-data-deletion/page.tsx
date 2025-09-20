"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, AlertTriangle, MessageCircle, Mail, Phone, FileText } from "lucide-react"

export default function UserDataDeletionPage() {
  const openWhatsAppForDeletion = () => {
    const message = encodeURIComponent(
      "Dobrý den, chtěl/a bych požádat o smazání všech mých osobních údajů z vašich systémů. Rozumím, že tento proces je nevratný. Můžete mi prosím pomoci s touto žádostí? Děkuji.",
    )
    const phoneNumber = "420792305456" // Nahraďte skutečným číslem
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="w-fit mx-auto">
            <Trash2 className="w-4 h-4 mr-2" />
            Smazání údajů
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Žádost o smazání osobních údajů</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Máte právo požádat o smazání vašich osobních údajů z našich systémů. Kontaktujte nás přes WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Important Information */}
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="w-5 h-5" />
                Důležité informace
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Před podáním žádosti si prosím přečtěte:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                  <li>
                    Smazání údajů je <strong>nevratný proces</strong> - data nelze obnovit
                  </li>
                  <li>Ztratíte přístup ke všem službám a historii komunikace</li>
                  <li>Některé údaje můžeme být povinni uchovávat ze zákona (účetní doklady)</li>
                  <li>Proces smazání může trvat až 30 dní</li>
                  <li>Budete informováni o dokončení procesu e-mailem</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* What will be deleted */}
          <Card>
            <CardHeader>
              <CardTitle>Co bude smazáno</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-destructive">Údaje určené ke smazání:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Trash2 className="w-4 h-4 text-destructive" />
                      <span className="text-sm">Osobní identifikační údaje</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trash2 className="w-4 h-4 text-destructive" />
                      <span className="text-sm">WhatsApp komunikace a zprávy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trash2 className="w-4 h-4 text-destructive" />
                      <span className="text-sm">Nastavení a preference</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trash2 className="w-4 h-4 text-destructive" />
                      <span className="text-sm">Analytická data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trash2 className="w-4 h-4 text-destructive" />
                      <span className="text-sm">Logy a technická data</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">Údaje uchované ze zákona:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="text-sm">Účetní doklady (5 let)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="text-sm">Daňové dokumenty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="text-sm">Právní dokumentace</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Tyto údaje budou anonymizovány a uchovány pouze pro splnění zákonných povinností.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp Contact Card */}
          <Card className="text-center border-green-200 bg-green-50/50">
            <CardHeader>
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Požádat o smazání údajů přes WhatsApp</CardTitle>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Klikněte na tlačítko níže a napište nám přímo přes WhatsApp. Zpráva bude předvyplněna s vaší žádostí o
                  smazání údajů.
                </p>

                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Co budeme potřebovat:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Vaše celé jméno</li>
                      <li>• E-mailovou adresu spojenou s účtem</li>
                      <li>• Telefonní číslo (pokud je registrované)</li>
                      <li>• Důvod žádosti o smazání</li>
                    </ul>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={openWhatsAppForDeletion}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Požádat o smazání údajů přes WhatsApp
                </Button>

                <p className="text-sm text-muted-foreground">Odpovíme vám do 24 hodin a provedeme vás celým procesem</p>
              </CardContent>
            </CardHeader>
          </Card>

          {/* Process Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Proces smazání</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Kontakt přes WhatsApp</h3>
                  <p className="text-xs text-muted-foreground">Napíšete nám žádost</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Ověření identity</h3>
                  <p className="text-xs text-muted-foreground">Potvrdíme vaši identitu</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Smazání dat</h3>
                  <p className="text-xs text-muted-foreground">Provedeme smazání ze všech systémů</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Potvrzení</h3>
                  <p className="text-xs text-muted-foreground">Zašleme potvrzení o dokončení</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Options */}
          <Card>
            <CardHeader>
              <CardTitle>Alternativní možnosti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">Před smazáním všech údajů zvažte tyto alternativy:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Pozastavení účtu</h3>
                    <p className="text-sm text-muted-foreground">Dočasně pozastavte služby bez ztráty dat</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Export dat</h3>
                    <p className="text-sm text-muted-foreground">Stáhněte si kopii vašich dat před smazáním</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Omezení zpracování</h3>
                    <p className="text-sm text-muted-foreground">Omezte způsob zpracování vašich údajů</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Potřebujete pomoc?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Pokud máte otázky ohledně smazání údajů nebo potřebujete pomoc, kontaktujte nás:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">E-mail</h3>
                      <p className="text-muted-foreground">privacy@replikanti.xyz</p>
                      <p className="text-xs text-muted-foreground">Odpovídáme do 24 hodin</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-muted-foreground">+420 792 305 456</p>
                      <p className="text-xs text-muted-foreground">Dostupné 24/7</p>
                    </div>
                  </div>
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
