import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Colonne de gauche - Texte */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-clash font-bold text-foreground mb-6">
                Qui sommes-nous
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
                EdjamShoes – L'âme du cuir, l'élégance du geste
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Basée à Lomé, au Togo, EdjamShoes est une maison artisanale
                spécialisée dans la fabrication de sandales haut de gamme pour
                homme. Chaque paire est entièrement cousue à la main, pensée
                pour durer, et conçue comme une pièce unique.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Portée par la passion de son fondateur, la marque redonne ses
                lettres de noblesse à la sandale africaine, en mêlant
                authenticité, exigence et raffinement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                EdjamShoes incarne un luxe discret, enraciné en Afrique et
                ouvert sur le monde. Nos créations s'adressent aux hommes qui
                valorisent le style, le savoir-faire et l'artisanat vrai.
              </p>
            </div>
          </div>

          {/* Colonne de droite - Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/cuir.jpg"
              alt="Artisan EdjamShoes travaillant le cuir dans l'atelier de Lomé"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
