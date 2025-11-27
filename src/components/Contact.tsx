import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/content';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mt-4 mb-6">
            Vamos conversar
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Entre em contato para saber mais sobre o acompanhamento profissional para seu familiar
          </p>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Prefere conversar pelo WhatsApp?
          </h3>
          <p className="text-white/90 mb-8 text-lg">
            Clique no botão abaixo e tire suas dúvidas diretamente comigo
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Chamar no WhatsApp
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-neutral-900 mb-2">Telefone</h4>
            <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="text-neutral-600 hover:text-primary transition-colors">
              {contactInfo.phone}
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-neutral-900 mb-2">E-mail</h4>
            <a href={`mailto:${contactInfo.email}`} className="text-neutral-600 hover:text-primary transition-colors break-all">
              {contactInfo.email}
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-neutral-900 mb-2">Localização</h4>
            <p className="text-neutral-600 text-sm">
              {contactInfo.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
