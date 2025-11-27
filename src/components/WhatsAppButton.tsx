import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/content';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-secondary hover:bg-secondary-dark text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />

      {/* Ripple animation */}
      <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20"></span>
    </button>
  );
};

export default WhatsAppButton;
