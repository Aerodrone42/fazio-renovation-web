
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">À propos de SARL FAZIO Lorenzo</h1>
            <p className="text-lg text-gray-700">
              Votre spécialiste de la pose de carrelage et de la rénovation clé en main dans l'Ouest Lyonnais et l'Ain.
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-fazio-dark-green mb-6">Notre histoire</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Fondée par Lorenzo Fazio, artisan passionné par le travail bien fait, notre entreprise s'est construite sur des valeurs fortes : l'excellence technique, l'attention aux détails et le respect de nos engagements.
                </p>
                <p>
                  Fort d'une expérience de plus de 15 ans dans le domaine du carrelage et de la rénovation, Lorenzo a décidé de créer sa propre entreprise pour offrir un service personnalisé et de qualité à ses clients.
                </p>
                <p>
                  Aujourd'hui, la SARL FAZIO Lorenzo est reconnue dans la région pour son savoir-faire, sa rigueur et la qualité de ses finitions. Nous intervenons aussi bien auprès des particuliers que des professionnels.
                </p>
                <p>
                  Notre objectif est simple : transformer vos espaces avec expertise et passion, en respectant vos goûts, vos contraintes et votre budget.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg flex items-center justify-center p-8 bg-white">
              <img 
                src="/lovable-uploads/3f50bd39-e720-4137-a2c1-2b1f154d2f64.png" 
                alt="Logo FAZIO Lorenzo" 
                className="w-full h-auto object-contain max-h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 bg-fazio-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Nos valeurs</h2>
            <p className="text-lg text-gray-700">
              Ces principes guident chacune de nos actions et sont au cœur de notre relation avec nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Qualité</h3>
                <p className="text-gray-600">
                  Nous ne faisons aucun compromis sur la qualité de notre travail. Chaque détail compte pour un résultat impeccable qui traversera le temps.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ponctualité</h3>
                <p className="text-gray-600">
                  Le respect des délais est primordial. Nous planifions méticuleusement chaque étape du projet pour livrer dans les temps convenus.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Communication</h3>
                <p className="text-gray-600">
                  Nous privilégions une communication claire et transparente à chaque étape de votre projet pour vous tenir informé.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                <p className="text-gray-600">
                  Notre équipe est composée d'artisans qualifiés et expérimentés, maîtrisant parfaitement les techniques traditionnelles et modernes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Confiance</h3>
                <p className="text-gray-600">
                  La relation de confiance avec nos clients est essentielle. Nous sommes transparents sur les coûts et les délais.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Nous restons à l'affût des nouvelles techniques et matériaux pour vous proposer des solutions modernes et durables.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos partenaires */}
      <section className="py-16 bg-fazio-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Nos partenaires</h2>
            <p className="text-lg text-gray-700">
              Nous collaborons avec des professionnels de confiance pour vous offrir un service complet et de qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Plomberie</h3>
              <p className="text-gray-600 mb-4">
                Des plombiers qualifiés pour tous vos travaux d'installation et de rénovation sanitaire.
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                  alt="Plomberie" 
                  className="h-14 w-auto object-contain opacity-80"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Électricité</h3>
              <p className="text-gray-600 mb-4">
                Des électriciens certifiés pour une installation aux normes et sécurisée.
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1584949602334-4e99f98286a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Électricité" 
                  className="h-14 w-auto object-contain opacity-80"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Plaquisterie</h3>
              <p className="text-gray-600 mb-4">
                Des plaquistes expérimentés pour vos cloisons, plafonds et aménagements intérieurs.
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Plaquisterie" 
                  className="h-14 w-auto object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à concrétiser votre projet ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé et gratuit.
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

export default About;
