import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Colonne de gauche - Texte */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Notre Histoire
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                EdjamShoes est né du rêve d'un artisan togolais passionné par l'art de la chaussure. Notre mission est de redonner à chaque pas la noblesse qu'il mérite, en créant des pièces uniques faites à la main, avec amour et précision. C'est bien plus que des chaussures : c'est un style, un engagement, une vision.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                Nous aspirons à devenir l'un des meilleurs "shoesmakers" du Togo, avec une signature qui allie tradition africaine et finesse du luxe contemporain.
                            </p>
                        </div>

                        <div className="bg-muted p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-bold text-primary mb-4">Fait Main. Fierté Togolaise.</h3>

                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-foreground">Un savoir-faire d'exception</h4>
                                <p className="text-muted-foreground">
                                    Chez EdjamShoes, chaque paire est façonnée à la main, dans le respect des traditions artisanales. Nos artisans sélectionnent un cuir véritable pleine fleur, choisi pour sa souplesse, sa durabilité et sa noblesse.
                                </p>
                                <p className="text-muted-foreground">
                                    Ce travail de précision donne naissance à des chaussures uniques, où chaque couture raconte une histoire. Plus qu'un produit, c'est un engagement : celui de l'authenticité, de la qualité et de l'excellence.
                                </p>
                            </div>

                            <Button className="mt-6">
                                Découvrir notre engagement
                            </Button>
                        </div>
                    </div>

                    {/* Colonne de droite - Image */}
                    <div  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <img src="/images/about.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;