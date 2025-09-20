"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, AlertTriangle, CheckCircle, Clock, Mail, Phone, FileText } from "lucide-react"
import { useState } from "react"

export default function UserDataDeletionPage() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    reason: "",
    confirmDeletion: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
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
            Máte právo požádat o smazání vašich osobních údajů z našich systémů. Tento proces je nevratný.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {!isSubmitted ? (
            <>
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

              {/* Deletion Process */}
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
                      <h3 className="font-semibold text-sm mb-2">Podání žádosti</h3>
                      <p className="text-xs text-muted-foreground">Vyplníte formulář níže</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <h3 className="font-semibold text-sm mb-2">Ověření identity</h3>
                      <p className="text-xs text-muted-foreground">Kontaktujeme vás pro potvrzení</p>
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

              {/* Deletion Request Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Formulář žádosti o smazání</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-sm font-medium">
                          Celé jméno *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background"
                          placeholder="Vaše celé jméno"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          E-mailová adresa *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background"
                          placeholder="vas@email.cz"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Telefonní číslo (WhatsApp)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                        placeholder="+420 123 456 789"
                      />
                      <p className="text-xs text-muted-foreground">
                        Uveďte číslo spojené s vaším WhatsApp účtem, pokud jej máte
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="reason" className="text-sm font-medium">
                        Důvod žádosti o smazání
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      >
                        <option value="">Vyberte důvod</option>
                        <option value="no-longer-needed">Již nepotřebuji služby</option>
                        <option value="privacy-concerns">Obavy o soukromí</option>
                        <option value="switching-provider">Přecházím k jinému poskytovateli</option>
                        <option value="business-closure">Ukončení podnikání</option>
                        <option value="other">Jiný důvod</option>
                      </select>
                    </div>

                    <div className="space-y-4 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="confirmDeletion"
                          name="confirmDeletion"
                          required
                          checked={formData.confirmDeletion}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                        <label htmlFor="confirmDeletion" className="text-sm">
                          <strong>Potvrzuji, že:</strong>
                          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                            <li>Rozumím, že smazání údajů je nevratné</li>
                            <li>Ztratím přístup ke všem službám a datům</li>
                            <li>Některé údaje mohou být uchovány ze zákona</li>
                            <li>Žádám o smazání všech mých osobních údajů</li>
                          </ul>
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                      disabled={!formData.confirmDeletion}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Podat žádost o smazání údajů
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </>
          ) : (
            /* Success Message */
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  Žádost byla úspěšně odeslána
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Vaše žádost o smazání osobních údajů byla přijata a bude zpracována v souladu s našimi zásadami
                  ochrany osobních údajů.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-background/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold">Co bude následovat</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ověříme vaši identitu (1-2 dny)</li>
                      <li>• Provedeme smazání dat (až 30 dní)</li>
                      <li>• Zašleme potvrzení o dokončení</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold">Referenční číslo</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>DEL-{Date.now().toString().slice(-8)}</strong>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Uložte si toto číslo pro případné dotazy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

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
                      <p className="text-muted-foreground">privacy@replikanti.cz</p>
                      <p className="text-xs text-muted-foreground">Odpovídáme do 24 hodin</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Telefon</h3>
                      <p className="text-muted-foreground">+420 123 456 789</p>
                      <p className="text-xs text-muted-foreground">Po-Pá 9:00-17:00</p>
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
