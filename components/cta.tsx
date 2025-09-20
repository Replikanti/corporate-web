import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function CTA() {
  const benefits = [
    'Bezplatná konzultace a analýza procesů',
    'Návrh řešení na míru během 48 hodin',
    'Implementace do 2 týdnů',
    'Garantovaná návratnost investice',
    'Podpora v češtině 24/7'
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Připraveni začít automatizovat?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Neváhejte a získejte konkurenční výhodu ještě dnes. 
            Naše řešení se rychle vrátí a vaše podnikání posune na novou úroveň.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Co získáte?</h3>
              <ul className="space-y-3 text-left">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Typické úspory</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Čas na zákaznický servis:</span>
                  <span className="text-green-400 font-bold">-75%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Náklady na provoz:</span>
                  <span className="text-green-400 font-bold">-60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Rychlost odpovědi:</span>
                  <span className="text-green-400 font-bold">+90%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Spokojenost zákazníků:</span>
                  <span className="text-green-400 font-bold">+85%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="text-5xl font-bold text-white mr-4">0 Kč</div>
              <div className="text-left">
                <div className="text-xl text-white">Vstupní investice</div>
                <div className="text-gray-300">První měsíc zdarma</div>
              </div>
            </div>
            <p className="text-gray-300">
              Platíte až od druhého měsíce, když vidíte výsledky. 
              Bez skrytých poplatků, bez závazků.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Chci bezplatnou konzultaci
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Zobrazit reference
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            ⭐⭐⭐⭐⭐ Průměrné hodnocení 4.9/5 od 200+ klientů
          </p>
        </div>
      </div>
    </section>
  );
}