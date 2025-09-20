import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Bot, BarChart3, Cog, Users, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Automatizace',
      description: 'Inteligentní chatboty pro automatickou komunikaci s vašimi zákazníky 24/7.',
      features: ['Automatické odpovědi', 'Lead generování', 'Objednávkový systém']
    },
    {
      icon: Bot,
      title: 'AI Asistenti',
      description: 'Pokročilé AI řešení pro komplexní zákaznické dotazy a support.',
      features: ['Chytrá konverzace', 'Učení z dat', 'Vícejazyčná podpora']
    },
    {
      icon: Cog,
      title: 'Integrace Systémů',
      description: 'Propojení WhatsApp s vašimi stávajícími CRM, e-shopy a databázemi.',
      features: ['CRM integrace', 'E-shop propojení', 'API konektory']
    },
    {
      icon: BarChart3,
      title: 'Analýza & Reporting',
      description: 'Detailní metriky a reporty pro optimalizaci vašich automatizovaných procesů.',
      features: ['Real-time analytics', 'Conversion tracking', 'ROI měření']
    },
    {
      icon: Users,
      title: 'Zákaznická Podpora',
      description: 'Automatizovaná i lidská podpora pro dokonalý zákaznický zážitek.',
      features: ['Tier systém', 'Eskalační procesy', 'SLA monitoring']
    },
    {
      icon: Shield,
      title: 'Bezpečnost & GDPR',
      description: 'Plná compliance s českými a evropskými standardy ochrany dat.',
      features: ['GDPR compliance', 'Data encryption', 'Audit logy']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Naše služby
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompletní portfolio služeb pro automatizaci vašich obchodních procesů. 
            Od jednoduchých chatbotů až po složité AI systémy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}