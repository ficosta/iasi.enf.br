import { Stethoscope, Home, Heart, Users } from 'lucide-react';
import { services } from '../data/content';

const iconMap: { [key: number]: React.ElementType } = {
  0: Stethoscope,
  1: Home,
  2: Heart,
  3: Users,
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Serviços</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mt-4 mb-6">
            Como posso ajudar seu familiar
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-neutral-100 hover:border-primary/20 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="bg-primary/5 border-l-4 border-primary rounded-2xl p-6">
          <p className="text-neutral-700 leading-relaxed">
            <strong>Importante:</strong> Atuo em colaboração com a equipe de saúde, garantindo conforto, segurança e comunicação constante com a família e profissionais responsáveis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
