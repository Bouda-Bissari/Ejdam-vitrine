import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Expand, Download } from "lucide-react";
import { DialogImage } from "./dialog-image/dialog-image";

interface Props {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link?: string;
}

const handleWhatsAppClick = (link: string | undefined) => {
  if (link) {
    window.open(link, "_blank");
  } else {
    const whatsappUrl =
      "https://wa.me/+22893034640?text=Bonjour%20EdjamShoes%2C%20je%20souhaiterais%20prendre%20rendez-vous%20pour%20découvrir%20vos%20sandales%20artisanales%20et%20discuter%20d'une%20commande%20personnalisée.";
    window.open(whatsappUrl, "_blank");
  }
};

const handleImageDownload = (imageUrl: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = `EdjamShoes-${fileName}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ModernProductCard = ({
  title,
  description,
  image,
  buttonText,
  link,
}: Props) => {
  return (
    <div className="relative bg-background border rounded-3xl p-6 shadow-sm overflow-hidden group hover:scale-105 transition-transform duration-300">
      {/* En-tête avec année et logo */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-muted-foreground/70 font-light text-sm">
          Édition 2025
        </span>
        <span className="text-muted-foreground/70 font-light text-sm">
          EdjamShoes
        </span>
      </div>

      {/* Image principale */}
      <div className="relative mb-6 rounded-2xl overflow-hidden bg-muted">
        <img src={image} alt={title} className="w-full h-64 object-cover" />

        {/* Overlay avec actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            className="bg-black/20 backdrop-blur-sm p-2 rounded-full hover:bg-black/30 transition-colors"
            aria-label="Voir en grand"
          >
            <DialogImage src={image} alt={`${title} - Sandales EdjamShoes`} />
          </button>
          <button
            onClick={() => handleImageDownload(image, title)}
            className="bg-black/20 backdrop-blur-sm p-2 rounded-full hover:bg-black/30 transition-colors"
            aria-label="Télécharger l'image"
          >
            <Download className="h-4 w-10 text-white" />
          </button>
        </div>
      </div>

      {/* Contenu texte */}
      <div className="space-y-4">
        <div>
          <h3 className="text-foreground font-bold text-xl mb-2 uppercase tracking-wide">
            {title}
          </h3>
          <p className="text-muted-foreground/90 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bouton d'action */}
        <Button
          onClick={() => handleWhatsAppClick(link)}
          className="w-full"
          variant="outline"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Effet de brillance */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </div>
  );
};

export default ModernProductCard;
