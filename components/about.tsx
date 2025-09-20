import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Naše mise',
      description: 'Demokratizovat pokročilé technologie automatizace pro malé a střední podniky v České republice.'
    },
    {
      icon: Users,
      title: 'Náš tým',
      description: 'Skupina zkušených vývojářů, business analytiků a marketing specialistů s více než 50 projekty.'
    },
    {
      icon: Lightbulb,
      title: 'Naše vize',
      description: 'Svět, kde každá firma má přístup k AI automatizaci bez ohledu na velikost nebo rozpočet.'
    },
    {
      icon: Award,
      title: 'Naše hodnoty',
      description: 'Transparentnost, rychlost implementace, měřitelné výsledky a dlouhodobé partnerství.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O společnosti <span className="text-blue-600">Replikanti</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Jsme česká technologická společnost zaměřená na automatizaci obchodních procesů 
              prostřednictvím WhatsApp. Naším cílem je pomoci firmám všech velikostí 
              implementovat inteligentní řešení, která šetří čas, snižují náklady a zvyšují zákaznickou spokojenost.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Prokázané výsledky</h4>
                  <p className="text-gray-600">Naši klienti dosahují průměrně 300% návratnosti investice do 6 měsíců.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Komplexní podpora</h4>
                  <p className="text-gray-600">Od analýzy procesů až po dlouhodobou údržbu - postaráme se o vše.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                  <Award className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Certifikovaní odborníci</h4>
                  <p className="text-gray-600">Tým s WhatsApp Business API certifikací a AI specializací.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircle({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}