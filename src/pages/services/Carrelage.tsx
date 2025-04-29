import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Carrelage = () => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">Pose de carrelage</h1>
            <p className="text-lg text-gray-700">
              Un savoir-faire artisanal pour sublimer vos sols et murs dans l'Ouest Lyonnais et l'Ain.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation du service */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-fazio-dark-green mb-6">Notre expertise en pose de carrelage</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  La SARL FAZIO Lorenzo met à votre service son expertise et son savoir-faire artisanal pour la pose de carrelage dans tous vos espaces. Que ce soit pour votre salle de bain, votre cuisine, votre salon ou vos espaces extérieurs, nous garantissons un travail soigné et durable.
                </p>
                <p>
                  Notre équipe maîtrise parfaitement toutes les techniques de pose (droite, diagonale, en chevron, etc.) et s'adapte à tous types de carreaux : grès cérame, faïence, mosaïque, grands formats et même carreaux de ciment.
                </p>
                <p>
                  Nous intervenons dans toute la région ouest lyonnaise et dans le département de l'Ain, notamment à Dagneux, Bourg-en-Bresse et Villefranche-sur-Saône.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                  <Link to="/contact">
                    Demander un devis gratuit
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={16/9}>
                <img 
                  src="/lovable-uploads/1b3b9e35-ec04-42c4-b14a-4fdfe2d6b954.png" 
                  alt="Pose de carrelage cuisine moderne" 
                  className="w-full h-full object-cover"
                  onLoad={() => setImageError(false)}
                  onError={() => setImageError(true)}
                />
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <p className="text-gray-500">Image non disponible</p>
                  </div>
                )}
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Nos prestations */}
      <section className="py-16 bg-fazio-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Nos prestations de carrelage</h2>
            <p className="text-lg text-gray-700">
              Des solutions adaptées à tous vos projets, pour l'intérieur comme pour l'extérieur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-fazio-dark-green">Carrelage intérieur</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Pose de carrelage au sol (toutes pièces)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Faïence murale (salle de bain, cuisine, etc.)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Mosaïque décorative</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Plans de travail carrelés</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Crédences de cuisine</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Carrelage grands formats</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-fazio-dark-green">Carrelage extérieur</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Terrasses carrelées</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Plages de piscine</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Allées et chemins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Carrelage antidérapant</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Carrelage imitation bois</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Margelles et bordures</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-fazio-dark-green">Préparation des supports</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Ragréage et nivellement</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Chape traditionnelle ou liquide</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Étanchéité sous carrelage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Dépose d'ancien carrelage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-fazio-dark-green">Types de pose</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Pose droite classique</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Pose en diagonale</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Pose en chevrons</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Pose à joints décalés</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Formats spéciaux et motifs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-fazio-dark-green">Finitions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Joints traditionnels</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Joints époxy</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Plinthes assorties</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Profilés de finition</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
                  <span>Seuils et transitions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Pourquoi choisir SARL FAZIO Lorenzo ?</h2>
            <p className="text-lg text-gray-700">
              Notre expertise fait la différence pour votre projet de carrelage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise reconnue</h3>
              <p className="text-gray-600">
                Plus de 15 ans d'expérience dans la pose de carrelage, avec des centaines de chantiers réalisés dans la région.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Matériaux de qualité</h3>
              <p className="text-gray-600">
                Nous utilisons exclusivement des matériaux et des colles de qualité professionnelle pour une durabilité maximale.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Respect des délais</h3>
              <p className="text-gray-600">
                Nous planifions méticuleusement chaque chantier pour respecter les délais annoncés et minimiser les désagréments.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conseils personnalisés</h3>
              <p className="text-gray-600">
                Nous vous guidons dans le choix des matériaux et des motifs les plus adaptés à votre style et à vos contraintes.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Finitions impeccables</h3>
              <p className="text-gray-600">
                Nous accordons une attention particulière aux détails et aux finitions pour un résultat esthétique et durable.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-fazio-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Devis transparent</h3>
              <p className="text-gray-600">
                Nous vous proposons un devis détaillé et sans surprise, avec des tarifs compétitifs et adaptés à votre budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-16 bg-fazio-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Nos réalisations</h2>
            <p className="text-lg text-gray-700">
              Découvrez quelques-unes de nos réalisations récentes en pose de carrelage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1603825491103-bd638b1873b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                alt="Salle de bain carrelée" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Salle de bain contemporaine</h3>
                <p className="text-sm text-gray-600">Dagneux (01)</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Cuisine carrelée" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Cuisine moderne</h3>
                <p className="text-sm text-gray-600">Bourg-en-Bresse (01)</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/5195b6f4-5b5d-4610-b957-1b37a61f7fa0.png" 
                alt="Terrasse carrelée" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Terrasse extérieure</h3>
                <p className="text-sm text-gray-600">Villefranche-sur-Saône (69)</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-fazio-dark-green text-fazio-dark-green hover:bg-fazio-dark-green hover:text-white">
              <Link to="/realisations" className="flex items-center">
                Voir toutes nos réalisations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Zone d'intervention */}
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
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>Dagneux</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>Bourg-en-Bresse</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>Villefranche-sur-Saône</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>Lyon Ouest</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>Montluel</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>Meximieux</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>Miribel</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>Trévoux</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>Ambérieu-en-Bugey</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>Beynost</span>
                </li>
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

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre espace ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé et gratuit pour votre carrelage.
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

export default Carrelage;
