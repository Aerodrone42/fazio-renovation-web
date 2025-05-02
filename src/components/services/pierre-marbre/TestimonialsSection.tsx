
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  className?: string;
  avatar?: string;
  date?: string;
  isNew?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, location, rating, className, avatar, date, isNew }) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md", className)}>
      <div className="flex items-start gap-3 mb-3">
        {avatar && (
          <div className="rounded-full overflow-hidden w-12 h-12 shrink-0">
            <img 
              src={avatar} 
              alt={`Photo de ${author}`} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-gray-600">{location}</div>
        </div>
      </div>
      <div className="flex mb-4 items-center">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
        {date && <span className="text-sm text-gray-500 ml-2">{date}</span>}
        {isNew && (
          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-md ml-2">NOUVEAU</span>
        )}
      </div>
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "La pose de notre sol en travertin dans notre villa à Bourg-en-Bresse a été réalisée avec un professionnalisme remarquable. La finition est impeccable et le rendu sublime notre intérieur.",
      author: "Michel et Françoise D.",
      location: "Bourg-en-Bresse (01)",
      rating: 5,
      date: "il y a 2 mois",
      avatar: "/lovable-uploads/679ba1af-3648-401a-b77c-2798744be8aa.png"
    },
    {
      quote: "Notre plan de travail en marbre de Carrare est magnifique. L'équipe de FAZIO Lorenzo a su nous conseiller sur le choix de la pierre parfaite pour notre cuisine haut de gamme.",
      author: "Sandrine L.",
      location: "Villeurbanne (69)",
      rating: 5,
      date: "il y a 5 mois",
      avatar: "/lovable-uploads/7f0aab32-2bdf-4fe9-adcb-64c5e212c993.png"
    },
    {
      quote: "Un grand merci pour la réalisation de notre habillage mural en pierre naturelle. Le travail est minutieux et le résultat dépasse nos attentes.",
      author: "Jean-Pierre M.",
      location: "Lyon (69)",
      rating: 4,
      date: "il y a 8 mois",
      avatar: "/lovable-uploads/dab6b5ba-7faf-4e86-bdea-2effd60518ba.png"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 w-full">
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
              date={testimonial.date}
              avatar={testimonial.avatar}
              className="hover:shadow-lg transition-all duration-300 h-full"
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            asChild 
            className="bg-fazio-red hover:bg-fazio-light-red transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://www.google.com/search?sa=X&sca_esv=613adaf9b5e05094&biw=1707&bih=791&tbm=lcl&sxsrf=AHTn8zpzyTjmcXnpJIqqjos5cYCjTawcUg:1746170832217&q=avis%20sur%20sarl%20fazio%20lorenzo%20dagneux&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI1NjEysTAysjS0MDA2MzQxttjAyPiKUTmxLLNYobi0SKE4sShHIS2xKjNfISe_KDWvKl8hJTE9L7W0YhErMaoAqJc4A2cAAAA&rldimm=12534248229180361438&hl=fr-FR&ved=0CAgQ5foLahcKEwjw9JihoYSNAxUAAAAAHQAAAAAQCg#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnTURvb3F2YjdRRRAB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Star className="h-5 w-5" />
              Laisser un avis
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
