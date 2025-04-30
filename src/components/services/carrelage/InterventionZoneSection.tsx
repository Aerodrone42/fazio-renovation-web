
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const InterventionZoneSection: React.FC = () => {
  const locations = [
    "Dagneux",
    "Bourg-en-Bresse",
    "Villefranche-sur-Saône",
    "Lyon Ouest",
    "Montluel",
    "Meximieux",
    "Miribel",
    "Trévoux",
    "Ambérieu-en-Bugey",
    "Beynost",
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Notre zone d'intervention</h2>
          <p className="text-lg text-gray-700">
            Nous intervenons pour la pose de carrelage dans toute la région ouest lyonnaise et dans le département de l'Ain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-fazio-dark-green">Nos principales zones d'intervention :</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700">
              Et dans tout le département de l'Ain (01) et l'ouest lyonnais. N'hésitez pas à nous contacter pour vérifier notre disponibilité dans votre secteur.
            </p>
            <div className="mt-8">
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Vérifier notre disponibilité
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d353935.3339607201!2d4.650619563876107!3d45.99486222342283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c5d74535be21%3A0x408ab2ae4bfb830!2sAin!5e0!3m2!1sfr!2sfr!4v1667398771132!5m2!1sfr!2sfr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Zone d'intervention - Ain et Ouest Lyonnais"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionZoneSection;
