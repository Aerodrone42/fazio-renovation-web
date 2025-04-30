
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, location, rating, className }) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md", className)}>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div className="font-semibold">{author}</div>
      <div className="text-sm text-gray-600">{location}</div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "La pose de notre sol en travertin dans notre villa à Bourg-en-Bresse a été réalisée avec un professionnalisme remarquable. La finition est impeccable et le rendu sublime notre intérieur.",
      author: "Michel et Françoise D.",
      location: "Bourg-en-Bresse (01)",
      rating: 5
    },
    {
      quote: "Notre plan de travail en marbre de Carrare est magnifique. L'équipe de FAZIO Lorenzo a su nous conseiller sur le choix de la pierre parfaite pour notre cuisine haut de gamme.",
      author: "Sandrine L.",
      location: "Villeurbanne (69)",
      rating: 5
    },
    {
      quote: "Un grand merci pour la réalisation de notre habillage mural en pierre naturelle. Le travail est minutieux et le résultat dépasse nos attentes.",
      author: "Jean-Pierre M.",
      location: "Lyon (69)",
      rating: 4
    }
  ];

  return (
    <section className="bg-gray-50 -mt-32 pt-4">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Ce que nos clients disent de nous</h2>
          <p className="text-lg text-gray-700">
            Satisfaction garantie pour tous nos projets en pierre naturelle et marbre dans la région Rhône-Alpes et sur la Côte d'Azur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              rating={testimonial.rating}
              className="hover:shadow-lg transition-all duration-300 h-full"
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center justify-center bg-fazio-cream px-6 py-4 rounded-lg border-l-4 border-fazio-dark-green">
            <div className="flex items-center">
              <svg className="h-8 w-8 text-fazio-dark-green mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700">
                <strong className="font-bold">Notre expertise régionale en pierre naturelle</strong><br />
                Chez FAZIO Lorenzo, nous sommes spécialisés dans la sélection et la pose de pierres naturelles parfaitement adaptées au climat et à l'architecture de la région Rhône-Alpes. Notre connaissance approfondie des matériaux et des techniques de pose nous permet de vous proposer des solutions durables et esthétiques pour votre habitat.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-gray-700">
          <p className="text-center">
            Que vous habitiez dans le centre historique de Lyon, dans les quartiers résidentiels de Villeurbanne, dans le vignoble de Villefranche-sur-Saône, au cœur de Bourg-en-Bresse, dans la zone industrielle d'Oyonnax ou aux portes du Bugey à Ambérieu-en-Bugey, notre équipe d'artisans qualifiés saura mettre en valeur votre intérieur avec des revêtements en pierre naturelle et en marbre de la plus haute qualité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
