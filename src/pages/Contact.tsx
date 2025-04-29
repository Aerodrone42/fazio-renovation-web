
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">Contactez-nous</h1>
            <p className="text-lg text-gray-700">
              Nous sommes à votre disposition pour répondre à toutes vos questions et vous proposer un devis personnalisé et gratuit pour votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* Coordonnées et formulaire */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-fazio-dark-green mb-6">Nos coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-fazio-red mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-gray-700">94 Rue de Montaplan, 01120 Dagneux</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-fazio-red mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <p>
                        <a 
                          href="tel:+33627262595" 
                          className="text-gray-700 hover:text-fazio-red transition-colors"
                        >
                          06 27 26 25 95
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-fazio-red mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p>
                        <a 
                          href="mailto:faziolaurent@gmail.com" 
                          className="text-gray-700 hover:text-fazio-red transition-colors"
                        >
                          faziolaurent@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-fazio-red mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Horaires</h3>
                      <p className="text-gray-700">
                        Lundi - Vendredi: 8h00 - 18h00<br />
                        Samedi: Sur rendez-vous<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.5446739984776!2d5.0807483!3d45.8369713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4b78ea5c8743b%3A0x6af5e01ce4841577!2s94%20Rue%20de%20Montaplan%2C%2001120%20Dagneux!5e0!3m2!1sfr!2sfr!4v1667047429444!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SARL FAZIO Lorenzo - 94 Rue de Montaplan, 01120 Dagneux"
                ></iframe>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-fazio-dark-green mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre numéro de téléphone"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Détaillez votre projet ou votre demande..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-fazio-red hover:bg-fazio-light-red"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">
                    * Champs obligatoires
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-green text-white py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Besoin d'un devis rapide ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            N'hésitez pas à nous appeler directement pour discuter de votre projet et obtenir un rendez-vous rapide.
          </p>
          <Button asChild size="lg" className="bg-white text-fazio-green hover:bg-fazio-cream">
            <a href="tel:+33627262595" className="flex items-center gap-2">
              <Phone className="h-5 w-5" /> 06 27 26 25 95
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
