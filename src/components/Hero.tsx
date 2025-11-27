import { MessageCircle, Heart, Shield, Clock } from 'lucide-react';
import { contactInfo } from '../data/content';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  const highlights = [
    { icon: Heart, text: 'Cuidado humanizado desde 2016' },
    { icon: Shield, text: 'Graduada em Enfermagem (FAEM 2025)' },
    { icon: Clock, text: 'Disponível para plantões 24h' }
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
          {/* Left - Photo (1/3) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start flex-shrink-0">
            <div className="relative">
              {/* Main circle */}
              <div className="relative w-[280px] h-[280px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-primary/5 to-secondary/5">
                <img
                  src="/profile.png"
                  alt="Karla Alexandra Iasi - Enfermeira e Cuidadora de Idosos"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative circle behind */}
              <div className="absolute inset-0 -z-10 w-[280px] h-[280px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl scale-110"></div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 md:p-3 lg:p-4">
                <p className="text-2xl md:text-xl lg:text-2xl font-bold text-primary mb-1">9+ anos</p>
                <p className="text-xs text-neutral-600 whitespace-nowrap">de experiência</p>
              </div>
            </div>
          </div>

          {/* Right - Content (2/3) */}
          <div className="w-full md:w-2/3 space-y-6 md:space-y-5 lg:space-y-7">
            <div className="inline-block">
              <span className="px-3 py-2 md:px-3.5 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-semibold">
                Enfermeira & Cuidadora Profissional
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-neutral-900 leading-[1.1]">
              Cuidado Humanizado e Presença Profissional
              <span className="block text-primary mt-2">para Idosos</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed">
              Acompanhamento especializado em hospitais, clínicas, casas de repouso e domicílio. Trabalho em parceria com equipes médicas, mantendo a família sempre informada.
            </p>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-3 md:gap-3 lg:gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2 md:gap-2.5">
                    <div className="w-9 h-9 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <span className="text-xs md:text-xs lg:text-sm text-neutral-700 leading-tight">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-2 md:pt-3">
              <button
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center justify-center gap-2 md:gap-2.5 px-6 py-4 md:px-6 md:py-3.5 lg:px-8 lg:py-4 bg-secondary text-white rounded-2xl font-semibold text-base md:text-base lg:text-lg hover:bg-secondary-dark transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
                Conversar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
