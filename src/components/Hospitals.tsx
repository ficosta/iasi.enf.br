import { Building2, Activity, Cross } from 'lucide-react';
import { citiesByHospitals, type Hospital } from '../data/hospitals';

const getIcon = (type: Hospital['type']) => {
  switch (type) {
    case 'hospital':
      return Building2;
    case 'upa':
      return Activity;
    default:
      return Cross;
  }
};

const Hospitals = () => {
  return (
    <section id="hospitals" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Hospitais e Unidades</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mt-4 mb-6">
            Onde posso acompanhar
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Acompanhamento em hospitais, prontos-socorros e unidades de saúde, conforme normas de cada instituição. Consulte sobre a possibilidade de outros hospitais e clínicas!
          </p>
        </div>

        {/* Hospitals by City */}
        <div className="space-y-12">
          {citiesByHospitals.map((cityGroup, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                {cityGroup.city}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cityGroup.hospitals.map((hospital, hospitalIndex) => {
                  const Icon = getIcon(hospital.type);
                  return (
                    <div
                      key={hospitalIndex}
                      className="bg-white rounded-2xl p-5 border-2 border-neutral-100 hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-neutral-900 leading-tight mb-1">
                            {hospital.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl p-6">
          <p className="text-neutral-700 leading-relaxed">
            <strong className="text-yellow-800">Importante:</strong> Não possuo vínculo empregatício com essas instituições. Atuo como profissional que acompanha o paciente, em parceria com a equipe de saúde, sempre respeitando as normas de cada local.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hospitals;
