import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ScrollToTop } from '@/components/layout/ScrollToTop';

const Index = () => {
  return (
    <div>
      {/* Le header est maintenant géré par Layout.tsx */}
      
      {/* Hero Section */}
      <section className="py-16 bg-fazio-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">
                Votre expert en carrelage et rénovation dans l'Ain et l'Ouest Lyonnais
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                SARL FAZIO Lorenzo vous accompagne dans tous vos projets de carrelage,
                de la pose à la rénovation, avec un savoir-faire artisanal et des
                matériaux de qualité.
              </p>
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">Demander un devis gratuit</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/images/carreleur-dagneux.webp"
                alt="Carreleur à Dagneux"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carrelage */}
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/lovable-uploads/09949995-9597-40ca-8903-978484a3996f.png"
                  alt="Pose de carrelage"
                  className="object-cover rounded-md"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">
                  Pose de carrelage
                </h3>
                <p className="text-gray-700">
                  Nous réalisons la pose de carrelage intérieur et extérieur, avec un
                  large choix de matériaux et de finitions.
                </p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/services/carrelage">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mosaïque */}
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/lovable-uploads/cdfc9eb7-b9b7-4c7f-b8a5-143288a35b85.png"
                  alt="Pose de mosaïque"
                  className="object-cover rounded-md"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">
                  Pose de mosaïque
                </h3>
                <p className="text-gray-700">
                  La mosaïque est un art que nous maîtrisons pour personnaliser vos
                  espaces avec créativité et originalité.
                </p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/services/mosaique">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pierre naturelle et marbre */}
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/lovable-uploads/6999a957-490c-4e38-9c91-1d104ca83c7c.png"
                  alt="Pose de pierre naturelle et marbre"
                  className="object-cover rounded-md"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">
                  Pierre naturelle et marbre
                </h3>
                <p className="text-gray-700">
                  Nous posons la pierre naturelle et le marbre avec une grande
                  précision pour un rendu élégant et durable.
                </p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/services/pierre-marbre">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Douche à l'italienne */}
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/lovable-uploads/4959a95f-6c99-496c-a90f-e49ca044a86d.png"
                  alt="Création de douche à l'italienne"
                  className="object-cover rounded-md"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">
                  Douche à l'italienne
                </h3>
                <p className="text-gray-700">
                  Nous concevons et réalisons des douches à l'italienne sur mesure,
                  alliant esthétisme et fonctionnalité.
                </p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/services/douche-italienne">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Rénovation de salle de bain */}
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/lovable-uploads/8bfe4682-ae69-48cc-8f91-a4bdaf3d9e5e.png"
                  alt="Rénovation de salle de bain"
                  className="object-cover rounded-md"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">
                  Rénovation de salle de bain
                </h3>
                <p className="text-gray-700">
                  Nous rénovons votre salle de bain de A à Z, en vous offrant un
                  service clé en main et des finitions soignées.
                </p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/services/renovation-salle-de-bain">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Coordination de travaux */}
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/lovable-uploads/269b564f-4985-4898-b498-a2798433a6ca.png"
                  alt="Coordination de travaux"
                  className="object-cover rounded-md"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">
                  Coordination de travaux
                </h3>
                <p className="text-gray-700">
                  Nous coordonnons tous les corps de métier pour vos projets de
                  rénovation, en vous garantissant un suivi personnalisé et une
                  réalisation dans les délais.
                </p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/services/coordination">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">
            Témoignages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                "Grâce à SARL FAZIO Lorenzo, notre salle de bain est devenue un
                véritable havre de paix. Les finitions sont parfaites et le
                service impeccable."
              </p>
              <p className="text-fazio-dark-green font-semibold">
                - Sophie et Marc D.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                "Nous avons fait appel à SARL FAZIO Lorenzo pour la pose de
                carrelage dans notre cuisine, et nous sommes ravis du résultat.
                Un travail soigné et une équipe à l'écoute."
              </p>
              <p className="text-fazio-dark-green font-semibold">
                - Isabelle et Pierre L.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-fazio-cream">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">
            FAQ
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Quels types de carrelage posez-vous ?</AccordionTrigger>
              <AccordionContent>
                Nous posons tous types de carrelage : faïence, grès cérame, terre
                cuite, pierre naturelle, etc. Nous vous conseillons sur le choix
                des matériaux en fonction de vos besoins et de votre budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Proposez-vous des devis gratuits ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, nous proposons des devis gratuits et personnalisés pour tous
                vos projets. Contactez-nous pour prendre rendez-vous et discuter
                de vos besoins.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Êtes-vous assurés pour les travaux que vous réalisez ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, nous sommes assurés en responsabilité civile et décennale
                pour tous les travaux que nous réalisons. Vous bénéficiez ainsi
                d'une garantie en cas de dommages ou de malfaçons.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-fazio-red text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">
            Prêt à donner vie à vos projets de carrelage et rénovation ?
          </h2>
          <p className="text-lg mb-8">
            Contactez-nous dès maintenant pour discuter de vos besoins et obtenir
            un devis gratuit et personnalisé.
          </p>
          <Button asChild size="lg" className="bg-white text-fazio-red hover:bg-fazio-cream">
            <Link to="/contact">Demander un devis gratuit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
