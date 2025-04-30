
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqItems = [
    {
      question: "Combien de temps dure une rénovation de salle de bain ?",
      answer: "La durée d'une rénovation complète de salle de bain varie généralement entre 2 et 4 semaines selon l'ampleur des travaux et la taille de la pièce. Nous établissons un planning précis lors du devis pour vous permettre d'organiser votre quotidien."
    },
    {
      question: "Est-il possible de transformer une baignoire en douche à l'italienne ?",
      answer: "Oui, c'est l'une de nos spécialités ! Nous pouvons transformer votre ancienne baignoire en une douche à l'italienne moderne et accessible. Cette transformation nécessite généralement des travaux de plomberie et d'étanchéité que nous prenons entièrement en charge."
    },
    {
      question: "Proposez-vous des conseils pour le choix des matériaux et des équipements ?",
      answer: "Absolument, nous vous guidons dans le choix des matériaux (carrelage, faïence, pierre naturelle) et des équipements sanitaires en fonction de votre budget, de vos goûts et des contraintes techniques de votre salle de bain."
    },
    {
      question: "Pouvez-vous agrandir ma salle de bain en abattant une cloison ?",
      answer: "Oui, si la configuration de votre logement le permet. Nos équipes sont habilitées à réaliser les travaux de démolition et de reconstruction de cloisons, y compris les cloisons porteuses (avec étude préalable)."
    }
  ];

  return (
    <section className="py-16 bg-fazio-cream">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Questions fréquentes</h2>
          <p className="text-lg text-gray-700">
            Tout ce que vous devez savoir sur la rénovation de salle de bain
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-fazio-dark-green font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
