import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Eye } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="md:min-h-screen min-h-[600px]  z-50 flex items-center justify-center px-6 bg-transparent ">
      <div
        data-scroll
        data-scroll-speed={0.8}
        className="text-center max-w-2xl"
      >
        <Badge className="bg-gradient-to-br via-70% from-primary via-primary/30 to-primary rounded-full py-1 border-none text-primary-foreground">
          Nouvelle Collection 2025
        </Badge>
        <h1 className="mt-6 text-4xl font-bold font-clash sm:text-5xl md:text-6xl md:leading-[1.2] text-background dark:text-muted-foreground">
          Edjam's Shoes
          <span className="block mt-2">Sandales d'Exception</span>
        </h1>
        <p className="mt-6 text-[17px] md:text-lg text-background dark:text-muted-foreground">
          Découvrez notre collection exclusive de sandales artisanales
          togolaises. Confort premium, élégance authentique et savoir-faire
          d'exception pour accompagner votre quotidien sous le soleil tropical.
        </p>
      </div>
    </div>
  );
};

export default Hero;
