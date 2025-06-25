import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { ArrowRight, Shapes } from "lucide-react";
import React from "react";

interface Props {
    title: string;
    description: string;
    image: string;
    buttonText: string;
}

const ProductCard = ({ title, description, image, buttonText }: Props) => {
    return (
        <Card className="shadow-none border bg-background">
            <CardHeader className="pt-4 pb-4 px-5 gap-3 font-semibold">
                <div className="flex items-center gap-x-2 ">

                    <div className="h-8 w-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-moon">
                        ED
                    </div>
                    <p>                {title}
                    </p>
                </div>

            </CardHeader>

            <CardContent className="text-[15px] text-muted-foreground px-5">
                <p>{description}</p>
                <div className="mt-5 w-full aspect-video bg-muted rounded-xl overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </CardContent>

            <CardFooter>
                <Button>
                    {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;