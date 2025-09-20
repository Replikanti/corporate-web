import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">Replikanti</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Automatizace obchodních procesů pomocí WhatsApp pro moderní podnikání.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Služby</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp Automatizace
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Chatbot Řešení
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Integrace Systémů
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Společnost</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#o-nas" className="text-muted-foreground hover:text-primary transition-colors">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Právní informace</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  Obchodní podmínky
                </Link>
              </li>
              <li>
                <Link href="/user-data-deletion" className="text-muted-foreground hover:text-primary transition-colors">
                  Smazání údajů
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2024 Replikanti. Všechna práva vyhrazena.</p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">Vytvořeno s ❤️ v České republice</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
