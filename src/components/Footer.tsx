import { contactInfo } from '../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">Karla Alexandra Iasi</h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Enfermeira e cuidadora dedicada ao acompanhamento humanizado de idosos desde 2016. Atuação em hospitais, clínicas, casas de repouso e domicílios.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-bold mb-4">Áreas de Atuação</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>Itapecerica da Serra</p>
              <p>Embu das Artes</p>
              <p>Taboão da Serra</p>
              <p>Cotia</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-sm text-neutral-400">
            © {currentYear} Karla Alexandra Iasi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
