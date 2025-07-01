"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Trophy, ChevronLeft } from "lucide-react";
import ModernProductCard from "@/components/card-futirist";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleFadingPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ThemeToggleButton from "@/components/button-theme";

const handleWhatsAppClick = () => {
  const whatsappUrl =
    "https://wa.me/+22893034640?text=Bonjour%20EdjamShoes%2C%20je%20souhaiterais%20prendre%20rendez-vous%20pour%20découvrir%20vos%20sandales%20artisanales%20et%20discuter%20d'une%20commande%20personnalisée.";

  window.open(whatsappUrl, "_blank");
};

const modernProducts = [
  {
    title: "Classique d'Élite",
    description:
      "Sandales premium en cuir véritable, symbole d'élégance intemporelle. Conçues pour les hommes exigeants qui apprécient le raffinement discret.",
    image: "/images/image (1).jpg",
    buttonText: "Commander",
  },
  {
    title: "Sophistication Urbaine",
    description:
      "Design urbain moderne avec finitions artisanales. Parfaites pour allier style contemporain et confort traditionnel africain.",
    image: "/images/image (2).jpg",
    buttonText: "Découvrir",
  },
  {
    title: "Luxe Tropical",
    description:
      "Adaptées aux climats tropicaux, ces sandales offrent respirabilité et élégance. Cuir traité spécialement pour la chaleur togolaise.",
    image: "/images/image (3).jpg",
    buttonText: "En savoir plus",
  },
  {
    title: "Artisanat Héritage",
    description:
      "Modèle signature inspiré des traditions togolaises. Chaque détail raconte l'histoire de notre savoir-faire ancestral transmis avec passion.",
    image: "/images/image (4).jpg",
    buttonText: "Découvrir",
  },
  {
    title: "Style Exécutif",
    description:
      "Sandales haut de gamme pour professionnels distingués. Alliance parfaite entre confort de marche et prestance en toute occasion.",
    image: "/images/image (5).jpg",
    buttonText: "Commander",
  },
  {
    title: "Maître Artisan",
    description:
      "Chef-d'œuvre artisanal aux coutures exceptionnelles. Chaque paire est une création unique signée par nos maîtres cordonniers.",
    image: "/images/image (6).jpg",
    buttonText: "Voir détails",
  },
  {
    title: "Bohème Raffiné",
    description:
      "Style bohème aux accents sophistiqués. Ornements délicats et finitions précieuses pour un look décontracté mais distingué.",
    image: "/images/image (7).jpg",
    buttonText: "Explorer",
  },
  {
    title: "Classique Contemporain",
    description:
      "Réinterprétation moderne des codes classiques. Lignes épurées et matériaux nobles pour un style intemporel et actuel.",
    image: "/images/image (8).jpg",
    buttonText: "Découvrir",
  },
  {
    title: "Collection Prestige",
    description:
      "Édition limitée de notre collection prestige. Cuirs d'exception et finitions artisanales pour les connaisseurs les plus exigeants.",
    image: "/images/image (9).jpg",
    buttonText: "Collection",
  },
  {
    title: "Décontraction Premium",
    description:
      "Décontraction assumée sans compromis sur la qualité. Confort optimal pour vos moments de détente avec une touche d'élégance.",
    image: "/images/image (10).jpg",
    buttonText: "Essayer",
  },
  {
    title: "Série Signature",
    description:
      "Série signature EdjamShoes aux détails distinctifs. Marquage subtil et finitions exclusives qui affirment votre goût pour l'exception.",
    image: "/images/image (11).jpg",
    buttonText: "Signature",
  },
  {
    title: "Confort d'Élite",
    description:
      "Technologie de confort avancée dans un écrin de luxe. Semelles ergonomiques et cuirs souples pour un bien-être inégalé.",
    image: "/images/image (12).jpg",
    buttonText: "Confort",
  },
  {
    title: "Édition Chef-d'Œuvre",
    description:
      "Pièce maîtresse de notre collection, synthèse parfaite de notre expertise. Création d'exception pour les amateurs d'art et de beauté.",
    image: "/images/image (13).jpg",
    buttonText: "Chef-d'œuvre",
  },
];

const DisplayModernProducts = () => {
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto min-h-screen bg-background ">
      {/* Barre de navigation avec bouton retour */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex justify-between items-center">
          <Button variant="ghost" onClick={() => router.back()}>
            <ChevronLeft className="w-5 h-5 mr-1" />
            Retour
          </Button>

          {/* Logo ou autre élément */}
          <div className="text-primary font-moon font-bold text-lg flex justify-center items-center gap-x-2">
            <ThemeToggleButton />

            <Link href="/"> EdjamShoes</Link>
          </div>
        </div>
      </div>

      {/* Alert Header */}
      <div className="container md:mb-12 mb-6 mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Alert className="bg-primary/10 border-primary text-foreground">
          <CircleFadingPlus className="h-4 w-4 text-primary" />
          <AlertTitle className="font-semibold">
            Artisanat Togolais d'Exception
          </AlertTitle>
          <AlertDescription>
            Chaque paire raconte l'histoire de nos maîtres artisans. Découvrez un savoir-faire ancestral sublimé par des finitions contemporaines.
          </AlertDescription>
        </Alert>
      </div>



      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modernProducts.map((product, index) => (
            <ModernProductCard key={index} {...product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Prêt à créer votre paire unique ?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nos artisans vous attendent pour créer ensemble la sandale parfaite,
            adaptée à vos goûts et à votre style de vie.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Commencer votre projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisplayModernProducts;
