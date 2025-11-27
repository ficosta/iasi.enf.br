import { Calendar, Heart, MessageCircle, Users, Clock, MapPin } from 'lucide-react';
import { differentials } from '../data/content';

const iconMap: { [key: string]: React.ElementType } = {
  calendar: Calendar,
  heart: Heart,
  'message-circle': MessageCircle,
  users: Users,
  clock: Clock,
  'map-pin': MapPin,
};

const Differentials = () => {
  return (
    <section id="differentials" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Diferenciais</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mt-4 mb-6">
            Por que escolher meu trabalho?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((differential, index) => {
            const Icon = iconMap[differential.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-5">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 leading-snug">
                  {differential.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
