
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-fazio-dark-green text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations de l'entreprise */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-fazio-beige">SARL FAZIO Lorenzo</h3>
            <p className="text-sm leading-relaxed">
              Spécialistes du carrelage et de la rénovation dans l'Ouest Lyonnais et l'Ain.
            </p>
            <p className="text-sm mt-4">SIREN : 982 823 452</p>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-fazio-beige">Coordonnées</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-fazio-light-red shrink-0" />
                <span>94 Rue de Montaplan, 01120 Dagneux</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-fazio-light-red shrink-0" />
                <a href="tel:+33627262595" className="hover:text-fazio-beige transition-colors">
                  06 27 26 25 95
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-fazio-light-red shrink-0" />
                <a href="mailto:faziolaurent@gmail.com" className="hover:text-fazio-beige transition-colors">
                  faziolaurent@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-fazio-beige">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-fazio-beige transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services/carrelage" className="hover:text-fazio-beige transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-fazio-beige transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-fazio-beige transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-fazio-beige">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fazio-light-red transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fazio-light-red transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-fazio-green" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} SARL FAZIO Lorenzo. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/mentions-legales" className="hover:text-fazio-beige transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-fazio-beige transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
