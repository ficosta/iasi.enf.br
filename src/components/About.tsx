import { Sparkles, GraduationCap } from 'lucide-react';
import { education, courses } from '../data/content';

const About = () => {
  const stats = [
    { value: '2025', label: 'Graduada em Enfermagem' },
    { value: '9+', label: 'Anos de experiência' },
    { value: '24/7', label: 'Disponibilidade' }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre mim</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mt-4 mb-6">
            Dedicação total ao cuidado de idosos
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Profissional com experiência desde 2016 em acompanhamento hospitalar, clínico e domiciliar. Trabalho em parceria com equipes médicas, garantindo que o idoso receba atenção adequada e que a família esteja sempre informada.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Formation + Always Updated */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formation */}
          <div className="bg-white rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900">Formação</h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {edu.year}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-1">{edu.title}</h4>
                  <p className="text-neutral-600">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Always Updated */}
          <div className="bg-white rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900">Sempre Atualizada</h3>
            </div>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <div key={index} className="pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
                  <h4 className="font-semibold text-neutral-900 mb-1">{course.title}</h4>
                  <p className="text-sm text-neutral-600">{course.institution} • {course.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
