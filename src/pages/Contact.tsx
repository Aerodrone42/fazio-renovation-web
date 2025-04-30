import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import InterventionMap from '@/components/maps/InterventionMap';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">Contactez-nous</h1>
            <p className="text-lg text-gray-700">
              Nous sommes à votre écoute pour discuter de votre projet de carrelage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-fazio-dark-green mb-6">Formulaire de contact</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fazio-green focus:ring-fazio-green sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fazio-green focus:ring-fazio-green sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fazio-green focus:ring-fazio-green sm:text-sm" />
                </div>
                <Button type="submit" className="bg-fazio-red hover:bg-fazio-light-red">Envoyer</Button>
              </form>
            </div>

            {/* Contact information */}
            <div>
              <h2 className="text-2xl font-bold text-fazio-dark-green mb-6">Nos coordonnées</h2>
              <p className="text-gray-700 mb-4">
                N'hésitez pas à nous contacter pour toute question ou demande de devis.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-fazio-green">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.95l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Lyon et ses environs
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-fazio-green">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.988.836l.733 3.665a1 1 0 01-.943 1.164L5.178 8.499a1 1 0 00-.195.491l-.231.92a1 1 0 00.94 1.165h4.178a1 1 0 00.943-1.164l.733-3.665a1 1 0 01.988-.836H17a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" />
                  </svg>
                  06 12 34 56 78
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-fazio-green">
                    <path d="M3 4a2 2 0 00-2 2v1.11a.75.75 0 00.447.658l7.938 4.461a.75.75 0 00.61-.075l7.938-4.461A.75.75 0 0019 7.11V6a2 2 0 00-2-2H3z" />
                    <path d="M15.536 8.946l-7.938 4.461a.75.75 0 01-.61.075l-7.938-4.461A.75.75 0 001 9.11v4.444a2 2 0 002 2h14a2 2 0 002-2V9.11a.75.75 0 00-.464-.164z" />
                  </svg>
                  contact@faziocarrelage.fr
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intervention map section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">
            Notre zone d'intervention
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Nous intervenons dans l'Ouest Lyonnais et l'Ain pour tous vos projets de carrelage.
          </p>
          <InterventionMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à discuter de votre projet ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour bénéficier de notre expertise et obtenir un devis gratuit.
          </p>
          <Button asChild size="lg" className="bg-white text-fazio-red hover:bg-fazio-cream">
            <Link to="/contact">
              Demander un devis gratuit
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
