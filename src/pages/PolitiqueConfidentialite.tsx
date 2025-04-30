
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';

const PolitiqueConfidentialite = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <Helmet>
        <title>Politique de Confidentialité | SARL FAZIO Lorenzo</title>
        <meta 
          name="description" 
          content="Politique de confidentialité de SARL FAZIO Lorenzo. Informations sur la collecte et le traitement des données personnelles." 
        />
        <link rel="canonical" href="https://www.carrelage-fazio.fr/politique-confidentialite" />
      </Helmet>

      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-fazio-dark-green mb-6">
            Politique de Confidentialité
          </h1>
          
          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Introduction
            </h2>
            <p className="mb-4">
              SARL FAZIO Lorenzo s'engage à protéger la vie privée des utilisateurs de son site internet. 
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
              vos informations personnelles lorsque vous utilisez notre site www.carrelage-fazio.fr.
            </p>
            <p>
              En utilisant notre site, vous acceptez les pratiques décrites dans la présente politique de confidentialité.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Collecte des informations
            </h2>
            <p className="mb-4">
              Nous collectons des informations lorsque vous remplissez un formulaire sur notre site, 
              notamment lors d'une demande de devis ou lorsque vous nous contactez. Les informations 
              recueillies peuvent inclure votre nom, adresse email, numéro de téléphone et adresse postale.
            </p>
            <p className="mb-4">
              Nous collectons également automatiquement des informations techniques lorsque vous naviguez 
              sur notre site, comme votre adresse IP, votre navigateur, votre système d'exploitation et 
              les pages que vous consultez.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Utilisation des informations
            </h2>
            <p className="mb-4">
              Les informations que nous collectons peuvent être utilisées pour :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
              <li>Améliorer notre site internet</li>
              <li>Améliorer notre service client et vos besoins en assistance</li>
              <li>Vous contacter par email ou téléphone pour répondre à vos demandes</li>
              <li>Traiter vos demandes de devis et proposer des services adaptés</li>
            </ul>
          </section>
          
          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Cookies
            </h2>
            <p className="mb-4">
              Notre site utilise des cookies pour améliorer votre expérience en ligne. Un cookie est un 
              petit fichier texte stocké sur votre ordinateur qui nous permet de reconnaître votre navigateur 
              lorsque vous visitez notre site.
            </p>
            <p className="mb-4">
              Les cookies que nous utilisons nous aident à comprendre quelles pages sont les plus populaires, 
              à mémoriser vos préférences et à améliorer globalement votre expérience sur notre site. Vous 
              pouvez configurer votre navigateur pour refuser les cookies ou vous avertir lorsque des cookies 
              sont envoyés.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Partage des informations
            </h2>
            <p className="mb-4">
              Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables 
              à des tiers sans votre consentement, sauf dans les cas nécessaires pour fournir un service 
              demandé (par exemple, pour la mise en œuvre de prestations ou la livraison de produits).
            </p>
            <p>
              Nous pouvons être amenés à divulguer vos informations personnelles si la loi nous y oblige 
              ou si vous violez nos conditions d'utilisation.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Protection des informations
            </h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures de sécurité adaptées pour protéger vos informations 
              personnelles. Nous utilisons des protocoles sécurisés pour la transmission de données 
              sensibles et nous nous efforçons de protéger vos informations personnelles contre la 
              perte, l'utilisation abusive ou l'altération.
            </p>
            <p>
              Cependant, aucune méthode de transmission sur Internet ou méthode de stockage électronique 
              n'est totalement sûre et fiable, et nous ne pouvons garantir sa sécurité absolue.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Durée de conservation des données
            </h2>
            <p>
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités 
              pour lesquelles elles ont été collectées, notamment pour satisfaire aux exigences légales 
              et réglementaires. Les données utilisées à des fins de prospection commerciale sont conservées 
              pendant une durée maximale de trois ans à compter de la fin de la relation commerciale.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-fazio-dark-green mb-4">
              Vos droits
            </h2>
            <p className="mb-4">
              Conformément à la Loi Informatique et Libertés et au Règlement Général sur la Protection des 
              Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition</li>
              <li>Droit à la portabilité de vos données</li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits ou pour toute question concernant le traitement de vos données, 
              vous pouvez nous contacter à l'adresse email suivante : faziolaurent@gmail.com ou par 
              courrier à l'adresse suivante : 94 Rue de Montaplan, 01120 Dagneux, France.
            </p>
            <p>
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous 
              pouvez adresser une réclamation à la CNIL : www.cnil.fr.
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

export default PolitiqueConfidentialite;
