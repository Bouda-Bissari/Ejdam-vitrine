import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Eye } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
      <div className="md:min-h-screen h-full md:my-0 my-24 z-50 flex items-center justify-center px-6 bg-transparent ">
        <div data-scroll data-scroll-speed={0.8} className="text-center max-w-2xl">
          <Badge className="bg-gradient-to-br via-70% from-primary via-primary/30 to-primary rounded-full py-1 border-none text-primary-foreground">
            Nouvelle Collection  2025
          </Badge>
          <h1 className="mt-6  text-4xl font-bold font-clash sm:text-5xl md:text-6xl md:leading-[1.2] text-background dark:text-muted-foreground">
            Edjam's Shoes
            <span className="block t mt-2">
            Sandales d'Exception
          </span>
          </h1>
          <p className="mt-6 text-[17px] md:text-lg text-background dark:text-muted-foreground">
            Découvrez notre collection exclusive de sandales artisanales.
            Confort premium, style intemporel et qualité exceptionnelle pour
            accompagner tous vos moments d'été.
          </p>
          {/*<div className="mt-12 flex items-center justify-center gap-4">*/}
          {/*  <Button size="lg" className="rounded-full text-base bg-primary hover:bg-primary/90 text-primary-foreground">*/}
          {/*    Nous contacter <ArrowUpRight className="!h-5 !w-5" />*/}
          {/*  </Button>*/}
          {/*  <Button*/}
          {/*      variant="outline"*/}
          {/*      size="lg"*/}
          {/*      className="rounded-full text-base shadow-none border-primary  "*/}
          {/*  >*/}
          {/*    <Eye className="!h-5 !w-5" /> Voir articles*/}
          {/*  </Button>*/}
          {/*</div>*/}
        </div>


      </div>
  );
};

export default Hero;