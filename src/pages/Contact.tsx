
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import InterventionMap from '@/components/maps/InterventionMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi du formulaire
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-fazio-cream to-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-6">Contactez-nous</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Nous sommes à votre disposition pour répondre à toutes vos questions et vous proposer un devis personnalisé et gratuit pour votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* Coordonnées et formulaire */}
      <section className="py-16 -mt-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-fazio-dark-green to-fazio-green p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Nos coordonnées</h2>
                  <p className="text-fazio-cream opacity-80">Nous sommes disponibles pour vous accompagner dans vos projets</p>
                </div>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-fazio-red/10 flex items-center justify-center mr-4 shrink-0">
                      <MapPin className="h-5 w-5 text-fazio-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fazio-dark-green mb-1">Adresse</h3>
                      <p className="text-gray-700">94 Rue de Montaplan, 01120 Dagneux</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-fazio-red/10 flex items-center justify-center mr-4 shrink-0">
                      <Phone className="h-5 w-5 text-fazio-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fazio-dark-green mb-1">Téléphone</h3>
                      <p>
                        <a 
                          href="tel:+33627262595" 
                          className="text-fazio-red hover:underline transition-colors"
                        >
                          06 27 26 25 95
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-fazio-red/10 flex items-center justify-center mr-4 shrink-0">
                      <Mail className="h-5 w-5 text-fazio-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fazio-dark-green mb-1">Email</h3>
                      <p>
                        <a 
                          href="mailto:faziolaurent@gmail.com" 
                          className="text-fazio-red hover:underline transition-colors"
                        >
                          faziolaurent@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-fazio-red/10 flex items-center justify-center mr-4 shrink-0">
                      <Clock className="h-5 w-5 text-fazio-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fazio-dark-green mb-1">Horaires</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>Lundi - Vendredi: 8h00 - 18h00</li>
                        <li>Samedi: Sur rendez-vous</li>
                        <li>Dimanche: Fermé</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Carte des zones d'intervention */}
              <Card className="overflow-hidden shadow-lg border-none h-[400px]">
                <InterventionMap height={400} />
              </Card>
            </div>

            {/* Formulaire de contact */}
            <div>
              <Card className="shadow-lg border-none overflow-hidden">
                <div className="bg-gradient-to-r from-fazio-red to-fazio-light-red p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Envoyez-nous un message</h2>
                  <p className="opacity-80">Décrivez votre projet et nous vous répondrons rapidement</p>
                </div>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6 p-4">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-fazio-dark-green">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="border-gray-300 focus-visible:ring-fazio-red"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-fazio-dark-green">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="votre@email.com"
                            className="border-gray-300 focus-visible:ring-fazio-red"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-fazio-dark-green">Téléphone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Votre numéro de téléphone"
                            className="border-gray-300 focus-visible:ring-fazio-red"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-fazio-dark-green">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="border-gray-300 focus-visible:ring-fazio-red resize-none min-h-[120px]"
                          placeholder="Détaillez votre projet ou votre demande..."
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Button
                        type="submit"
                        className="w-full bg-fazio-red hover:bg-fazio-light-red text-white font-medium py-2.5 rounded-md transition-all transform hover:shadow-md"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      </Button>
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        * Champs obligatoires
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-gradient-to-r from-fazio-dark-green to-fazio-green text-white overflow-hidden border-none">
            <CardContent className="p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Besoin d'un devis rapide ?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                N'hésitez pas à nous appeler directement pour discuter de votre projet et obtenir un rendez-vous rapide.
              </p>
              <Button asChild size="lg" className="bg-white text-fazio-dark-green hover:bg-fazio-cream hover:text-fazio-green">
                <a href="tel:+33627262595" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> 06 27 26 25 95
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
