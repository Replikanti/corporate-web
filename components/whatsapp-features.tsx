import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Zap, Users, Clock, TrendingUp } from 'lucide-react';

export function WhatsAppFeatures() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Instant Messaging',
      description: 'Okamžitá komunikace s klienty přes nejpopulárnější messenger.'
    },
    {
      icon: Zap,
      title: 'Rychlé nasazení',
      description: 'Automatizace běží během 24 hodin od schválení návrhu.'
    },
    {
      icon: Users,
      title: 'Masové oslovení',
      description: 'Komunikujte s tisíci zákazníků současně bez lidských zdrojů.'
    },
    {
      icon: Clock,
      title: 'Non-stop provoz',
      description: 'Vaši zákazníci získají odpovědi 24/7, včetně víkendů a svátků.'
    },
    {
      icon: TrendingUp,
      title: 'Růst konverzí',
      description: 'Automatizované follow-up zprávy zvyšují prodeje o 40-60%.'
    },
    {
      icon: CheckCircle,
      title: 'Spolehlivost',
      description: '99.9% dostupnost systému s automatickým zálohováním.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proč WhatsApp automatizace?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            WhatsApp má v ČR penetraci 85% obyvatel. Vaši zákazníci jsou už připojeni - 
            využijte tuto příležitost pro růst vašeho podnikání.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Zajímavé statistiky o WhatsApp v ČR
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-blue-100">Penetrace obyvatel ČR</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-blue-100">Otevřenost zpráv</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">3 min</div>
                <div className="text-blue-100">Průměrná doba odpovědi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}