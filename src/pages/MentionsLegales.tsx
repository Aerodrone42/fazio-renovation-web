
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';

const MentionsLegales = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <Helmet>
        <title>Mentions Légales | SARL FAZIO Lorenzo</title>
        <meta 
          name="description" 
          content="Mentions légales de SARL FAZIO Lorenzo, entreprise de carrelage basée à Dagneux. Informations juridiques, droits d'auteur et politique de confidentialité." 
        />
        <link rel="canonical" href="https://www.carrelage-fazio.fr/mentions-legales" />
      </Helmet>

      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-fazio-dark-green mb-6">
            Mentions Légales
          </h1>
          
          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Éditeur du site
            </h2>
            <p className="mb-4">
              <strong>SARL FAZIO Lorenzo</strong><br />
              94 Rue de Montaplan<br />
              01120 Dagneux<br />
              France
            </p>
            <p className="mb-4">
              <strong>SIREN :</strong> 982 823 452<br />
              <strong>SIRET :</strong> 982 823 452 00015<br />
              <strong>Capital social :</strong> 3 000 €<br />
              <strong>Numéro de TVA intracommunautaire :</strong> FR87982823452
            </p>
            <p className="mb-4">
              <strong>Téléphone :</strong> 06 27 26 25 95<br />
              <strong>Email :</strong> faziolaurent@gmail.com
            </p>
            <p>
              <strong>Directeur de la publication :</strong> Laurent Fazio
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Hébergement
            </h2>
            <p>
              Le site www.carrelage-fazio.fr est hébergé par la société [Nom de l'hébergeur], 
              dont le siège social est situé à [Adresse de l'hébergeur], 
              joignable par téléphone au [Téléphone de l'hébergeur].
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Propriété intellectuelle
            </h2>
            <p className="mb-4">
              L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, 
              images, vidéos, sons, plans, logos, marques, etc.) ainsi que le site lui-même, relèvent 
              des législations françaises et internationales sur les droits d'auteur et la propriété 
              intellectuelle.
            </p>
            <p className="mb-4">
              Tous ces éléments sont la propriété exclusive de SARL FAZIO Lorenzo, à l'exception 
              des éléments émanant de partenaires ou fournisseurs.
            </p>
            <p>
              Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme 
              que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, 
              sans l'accord préalable et écrit de SARL FAZIO Lorenzo, est strictement interdite et 
              constituerait un délit de contrefaçon sanctionné par les articles L.335-2 et suivants 
              du Code de la propriété intellectuelle.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Limitation de responsabilité
            </h2>
            <p className="mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et le site 
              est périodiquement mis à jour, mais peut toutefois contenir des inexactitudes, des 
              omissions ou des lacunes.
            </p>
            <p className="mb-4">
              Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, 
              merci de bien vouloir le signaler par email à faziolaurent@gmail.com en décrivant 
              le problème de la manière la plus précise possible.
            </p>
            <p>
              SARL FAZIO Lorenzo ne pourra être tenue responsable des dommages directs et indirects 
              causés au matériel de l'utilisateur, lors de l'accès au site www.carrelage-fazio.fr, 
              et résultant de l'apparition d'un bug ou d'une incompatibilité.
            </p>
          </section>
          
          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Liens hypertextes
            </h2>
            <p className="mb-4">
              Le site www.carrelage-fazio.fr peut offrir des liens vers d'autres sites internet 
              ou d'autres ressources disponibles sur Internet. SARL FAZIO Lorenzo ne dispose 
              d'aucun moyen pour contrôler les sites en connexion avec son site internet et ne 
              répond pas de la disponibilité de tels sites et sources externes.
            </p>
            <p>
              SARL FAZIO Lorenzo ne peut être tenue pour responsable de tout dommage, de quelque 
              nature que ce soit, résultant du contenu de ces sites ou sources externes.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Droit applicable et juridiction compétente
            </h2>
            <p className="mb-4">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, 
              les tribunaux français seront seuls compétents.
            </p>
            <p>
              Pour toute question relative aux présentes mentions légales du site, vous pouvez 
              nous contacter à l'adresse email : faziolaurent@gmail.com
            </p>
          </section>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : 30/04/2025
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MentionsLegales;
