"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Dobrý den, mám zájem o Vaše služby. Můžeme si o tom pohovořit? Děkuji.")
    const phoneNumber = "420123456789" // Nahraďte skutečným číslem
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/replikanti-logo.svg"
              alt="Replikanti Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-xl font-bold text-foreground">Replikanti</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors">
              Domů
            </button>
            <button
              onClick={() => scrollToSection("sluzby")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection("o-nas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              O nás
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </button>
            <Button onClick={openWhatsApp}>Začít nyní</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors text-left">
                Domů
              </button>
              <button
                onClick={() => scrollToSection("sluzby")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Služby
              </button>
              <button
                onClick={() => scrollToSection("o-nas")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                O nás
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Kontakt
              </button>
              <Button className="w-full" onClick={openWhatsApp}>
                Začít nyní
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
