import Link from 'next/link';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Replikanti</span>
            </div>
            <p className="text-gray-300 mb-6">
              Automatizujeme vaše obchodní procesy prostřednictvím WhatsApp. 
              Pomáháme firmám všech velikostí zvýšit efektivitu a spokojnost zákazníků.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                info@replikanti.cz
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                +420 XXX XXX XXX
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                Praha, Česká republika
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Služby</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">WhatsApp Automatizace</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">AI Chatboti</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Integrace systémů</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Analytics & Reporting</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Technická podpora</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">O společnosti</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">O nás</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Kontakt</Link></li>
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Reference</Link></li>
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Kariéra</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Právní dokumenty</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Ochrana osobních údajů</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">Obchodní podmínky</Link></li>
              <li><Link href="/data-deletion" className="hover:text-blue-400 transition-colors">Mazání uživatelských dat</Link></li>
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold mb-3">GDPR Compliance</h4>
              <p className="text-sm text-gray-400">
                Všechna data zpracováváme v souladu s GDPR. 
                Máte právo na přístup, opravu i vymazání vašich údajů.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Replikanti s.r.o. Všechna práva vyhrazena.
          </div>
          <div className="text-gray-400 text-sm">
            Vytvořeno s ❤️ v České republice
          </div>
        </div>
      </div>
    </footer>
  );
}