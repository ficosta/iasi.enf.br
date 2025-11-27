import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/content';

const Testimonials = () => {
  const abbreviateName = (fullName: string) => {
    const parts = fullName.trim().split(' ');
    if (parts.length === 1) return fullName;
    const firstInitial = parts[0][0];
    const lastName = parts[parts.length - 1];
    return `${firstInitial}. ${lastName}`;
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mt-4 mb-6">
            O que as famílias dizem
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-neutral-100 rounded-3xl p-8 relative hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-neutral-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-neutral-100">
                <p className="font-bold text-neutral-900">{abbreviateName(testimonial.name)}</p>
                <p className="text-sm text-neutral-600">{testimonial.relation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
