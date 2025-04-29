
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Phone } from 'lucide-react';

const Index = () => {
  // Animation au défilement
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Carrelage & rénovation clé en main
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Dans l'Ouest Lyonnais et l'Ain, nous transformons vos espaces avec expertise et passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-fazio-red hover:bg-fazio-light-red text-white">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                <a href="tel:+33627262595" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Nous appeler
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nos services */}
      <section className="section bg-fazio-cream">
        <div className="container">
          <div className="section-title animate-on-scroll">
            <h2 className="text-fazio-dark-green">Nos services spécialisés</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              De la pose de carrelage à la rénovation complète, notre expertise s'étend à tous vos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Service 1 */}
            <Card className="animate-on-scroll bg-white hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/9114248b-e86d-4d6d-961a-23538b98512a.png" 
                  alt="Pose de carrelage" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Pose de carrelage</h3>
                <p className="text-gray-600 mb-4">
                  Un savoir-faire artisanal pour une finition impeccable de vos sols et murs.
                </p>
                <Link 
                  to="/services/carrelage" 
                  className="text-fazio-red hover:text-fazio-light-red flex items-center font-medium"
                >
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="animate-on-scroll bg-white hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599619585752-c3edb42a414c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" 
                  alt="Douche à l'italienne" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Douche à l'italienne</h3>
                <p className="text-gray-600 mb-4">
                  Créez un espace élégant et accessible avec nos douches à l'italienne sur-mesure.
                </p>
                <Link 
                  to="/services/douche-italienne" 
                  className="text-fazio-red hover:text-fazio-light-red flex items-center font-medium"
                >
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="animate-on-scroll bg-white hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Rénovation salle de bain" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Rénovation salle de bain</h3>
                <p className="text-gray-600 mb-4">
                  Une transformation clé en main de votre salle de bain, de la conception à la réalisation.
                </p>
                <Link 
                  to="/services/renovation-salle-de-bain" 
                  className="text-fazio-red hover:text-fazio-light-red flex items-center font-medium"
                >
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="border-fazio-dark-green text-fazio-dark-green hover:bg-fazio-dark-green hover:text-white">
              <Link to="/services/carrelage">
                Découvrir tous nos services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title animate-on-scroll">
            <h2 className="text-fazio-dark-green">Pourquoi nous choisir ?</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Notre engagement envers l'excellence et la satisfaction client fait la différence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="animate-on-scroll p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-fazio-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Artisans qualifiés</h3>
              <p className="text-gray-600">
                Notre équipe combine expertise technique et sens artistique pour des finitions impeccables.
              </p>
            </div>

            <div className="animate-on-scroll p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-fazio-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.25 2.25m-15-2.25L4.5 6.75m1.5-.75C7.456 6.22 8.809 6.05 10.22 6c.36-.03.72-.06 1.08-.08.19-.87.38-1.73.55-2.58v0c.81-.31 1.63-.54 2.46-.72.5 1.84 1.11 3.52 1.26 4.3a47.487 47.487 0 001.76-.29 48.14 48.14 0 013.74-.35v0c-.92-1.78-2-3.42-3.14-4.94a48.24 48.24 0 00-3.55 4.94v0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Matériaux de qualité</h3>
              <p className="text-gray-600">
                Nous sélectionnons soigneusement des matériaux durables et esthétiques pour chaque projet.
              </p>
            </div>

            <div className="animate-on-scroll p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-fazio-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Garantie travaux</h3>
              <p className="text-gray-600">
                Tous nos travaux sont garantis pour votre tranquillité d'esprit et votre satisfaction totale.
              </p>
            </div>

            <div className="animate-on-scroll p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-fazio-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Délais respectés</h3>
              <p className="text-gray-600">
                Nous nous engageons à respecter les délais convenus pour minimiser les désagréments.
              </p>
            </div>

            <div className="animate-on-scroll p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-fazio-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Satisfaction client</h3>
              <p className="text-gray-600">
                Notre priorité est votre entière satisfaction, du premier contact à la fin des travaux.
              </p>
            </div>

            <div className="animate-on-scroll p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-fazio-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Devis gratuit</h3>
              <p className="text-gray-600">
                Nous vous proposons un devis détaillé et transparent, sans engagement ni frais cachés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="section bg-fazio-green text-white">
        <div className="container">
          <div className="section-title animate-on-scroll">
            <h2 className="text-white">Notre zone d'intervention</h2>
            <p className="mt-4 text-lg text-fazio-cream/90 max-w-3xl mx-auto">
              Nous intervenons dans toute la région ouest lyonnaise et dans le département de l'Ain.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1606567595334-d39972c85dbe?q=80&w=1974&auto=format&fit=crop"
                alt="Carte de la région Auvergne-Rhône-Alpes" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-6">Nous intervenons dans :</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fazio-light-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  L'Ouest Lyonnais
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fazio-light-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Département de l'Ain (01)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fazio-light-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Dagneux
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fazio-light-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Bourg-en-Bresse
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fazio-light-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Villefranche-sur-Saône
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fazio-light-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Et les communes environnantes
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-fazio-green hover:bg-fazio-cream">
                  <Link to="/contact">
                    Vérifier notre disponibilité
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title animate-on-scroll">
            <h2 className="text-fazio-dark-green">Ce que disent nos clients</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              La satisfaction de nos clients est notre meilleure publicité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Témoignage 1 */}
            <div className="animate-on-scroll p-6 rounded-lg border border-gray-200 bg-fazio-cream/30 hover:shadow-md transition-shadow">
              <div className="flex space-x-1 mb-4">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="italic text-gray-600 mb-4">
                "Travail soigné et rapide, le résultat est magnifique. Je recommande vivement cette entreprise pour la rénovation de votre salle de bain."
              </p>
              <div className="flex items-center">
                <div className="font-semibold">Marie D.</div>
                <span className="mx-2">•</span>
                <div className="text-gray-500">Lyon</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
