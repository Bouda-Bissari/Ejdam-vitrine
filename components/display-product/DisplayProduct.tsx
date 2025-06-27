import React from "react";
import ProductCard from "@/components/card-product";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react";
import { link } from "fs";
import { useRouter } from "next/navigation";
import ModernProductCard from "../card-futirist";

const handleWhatsAppClick = () => {
  const whatsappUrl =
    "https://wa.me/+22893034640?text=Bonjour%20EdjamShoes%2C%20je%20souhaiterais%20prendre%20rendez-vous%20pour%20découvrir%20vos%20sandales%20artisanales%20et%20discuter%20d'une%20commande%20personnalisée.";

  window.open(whatsappUrl, "_blank");
};

const products = [
  {
    title: "Sandales Cuir Premium",
    description:
      "Sandales artisanales en cuir véritable, conçues pour un confort exceptionnel et un style intemporel. Parfaites pour le climat tropical togolais.",
    image: "/images/image (1).jpg",
    buttonText: "En savoir plus",
    link: "https://wa.me/+22893034640?text=Bonjour%20EdjamShoes%2C%20je%20souhaiterais%20prendre%20rendez-vous%20pour%20découvrir%20vos%20sandales%20artisanales%20et%20discuter%20d'une%20commande%20personnalisée.",
  },
  {
    title: "Sandales Bohème Chic",
    description:
      "Collection bohème aux détails raffinés, ornées de perles et motifs ethniques. Idéales pour un look décontracté et élégant.",
    image: "/images/image (7).jpg",
    buttonText: "Découvrir",
    link: "https://wa.me/+22893034640?text=Bonjour%20EdjamShoes%2C%20je%20souhaiterais%20prendre%20rendez-vous%20pour%20découvrir%20vos%20sandales%20artisanales%20et%20discuter%20d'une%20commande%20personnalisée.",
  },
];

// Composant pour la carte de prise de rendez-vous
const AppointmentCard = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm mx-auto">
      <div className="text-center space-y-4">
        {/* Icône centrale */}
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-primary-foreground" />
        </div>

        {/* Titre */}
        <h3 className="text-xl font-bold text-primary">Prise de Rendez-vous</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          Réservez votre consultation personnalisée avec nos artisans. Découvrez
          nos modèles, discutez de vos besoins et créez la paire parfaite.
        </p>

        {/* Avantages */}
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span>Consultation gratuite</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>Devis sur mesure</span>
          </div>
        </div>

        {/* Bouton d'action */}
        <Button
          onClick={handleWhatsAppClick}
          className="w-full mt-4 bg-primary hover:bg-primary/90"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Prendre Rendez-vous
        </Button>

        {/* Note */}
        <p className="text-xs text-muted-foreground/70 mt-2">
          Réponse rapide via WhatsApp
        </p>
      </div>
    </div>
  );
};

const DisplayProduct = ({ slice = 2 }: { slice: number }) => {
  const router = useRouter();
  return (
    <div className="w-full px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="md:text-4xl text-3xl font-clash font-bold text-primary mb-4">
          Notre Collection de Sandales
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez notre sélection exclusive de sandales artisanales
          togolaises, alliant confort, qualité et style pour votre quotidien
          sous le soleil tropical.
        </p>
      </div>

      <div className="flex justify-end p-3">
        <Button
          onClick={() => router.push("/products")}
          effect="expandIcon"
          icon={ArrowRight}
          iconPlacement="right"
        >
          Voir Plus
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {/* Affichage des 2 premières cartes produits */}
        {products.slice(0, slice).map((product, index) => (
          <ModernProductCard key={index} {...product} />
        ))}

        <AppointmentCard />
      </div>
    </div>
  );
};

export default DisplayProduct;
