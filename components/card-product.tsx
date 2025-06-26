import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight, Shapes } from "lucide-react";
import React from "react";
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

const ProductCard = ({
  title,
  description,
  image,
  buttonText,
  link,
}: Props) => {
  return (
    <Card className="shadow-none border bg-background">
      <CardHeader className="pt-4 pb-4 px-5 gap-3 font-semibold">
        <div className="flex items-center gap-x-2 ">
          <div className="h-8 w-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-moon">
            ED
          </div>
          <p> {title}</p>
        </div>
      </CardHeader>

      <CardContent className="text-[15px] text-muted-foreground px-5">
        <p>{description}</p>
        <div className="mt-5 w-full aspect-video bg-muted rounded-xl overflow-hidden relative group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover bg-center"
          />
          {/* Overlay avec DialogImage */}
          <div className="absolute inset-0 md:bg-black/0 bg-black/20  md:group-hover:bg-black/20 md:transition-all md:duration-300 flex items-center justify-center">
            <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <DialogImage src={image} alt={`${title} - Sandales EdjamShoes`} />
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          variant={"outline"}
          className="w-full"
          onClick={() => handleWhatsAppClick(link)}
        >
          {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
