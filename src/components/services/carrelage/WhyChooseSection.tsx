
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="w-14 h-14 mb-4 rounded-full bg-fazio-red/10 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

const WhyChooseSection: React.FC = () => {
  const features = [
    {
      title: "Expertise reconnue",
      description: "Plus de 15 ans d'expérience dans la pose de carrelage, avec des centaines de chantiers réalisés dans la région.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Matériaux de qualité",
      description: "Nous utilisons exclusivement des matériaux et des colles de qualité professionnelle pour une durabilité maximale.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Respect des délais",
      description: "Nous planifions méticuleusement chaque chantier pour respecter les délais annoncés et minimiser les désagréments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Conseils personnalisés",
      description: "Nous vous guidons dans le choix des matériaux et des motifs les plus adaptés à votre style et à vos contraintes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Finitions impeccables",
      description: "Nous accordons une attention particulière aux détails et aux finitions pour un résultat esthétique et durable.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fazio-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Devis transparent",
      description: "Nous vous proposons un devis détaillé et sans surprise, avec des tarifs compétitifs et adaptés à votre budget.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-fazio-red">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Pourquoi choisir SARL FAZIO Lorenzo ?</h2>
          <p className="text-lg text-gray-700">
            Notre expertise fait la différence pour votre projet de carrelage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
