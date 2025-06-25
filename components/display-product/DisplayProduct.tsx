import React from 'react'
import ProductCard from "@/components/card-product";
import {Button} from "@/components/ui/button";
import {ArrowRightIcon} from "lucide-react";

const products = [
    {
        title: "Sandales Cuir Premium",
        description: "Sandales artisanales en cuir véritable, conçues pour un confort exceptionnel et un style intemporel. Parfaites pour toutes les occasions estivales.",
        image: "/images/sandale-cuir.jpeg",
        buttonText: "En savoir plus",
    },
    {
        title: "Sandales Bohème Chic",
        description: "Collection bohème aux détails raffinés, ornées de perles et motifs ethniques. Idéales pour un look décontracté et élégant.",
        image: "/images/sandale-boheme.jpeg",
        buttonText: "Découvrir",
    },
    {
        title: "Sandales Sport Confort",
        description: "Modèles ergonomiques avec semelle antidérapante et sangles ajustables. Confort optimal pour vos activités outdoor et balades.",
        image: "/images/sandale-sport.jpeg",
        buttonText: "Voir détails",
    },
    {
        title: "Sandales Élégantes Soirée",
        description: "Sandales sophistiquées avec finitions dorées, parfaites pour vos événements spéciaux et soirées estivales chic.",
        image: "/images/sandale-elegante.jpeg",
        buttonText: "Commander",
    },
    {
        title: "Sandales Plage Décontractées",
        description: "Modèles légers et résistants à l'eau, spécialement conçus pour la plage et les activités aquatiques. Style décontracté garanti.",
        image: "/images/sandale-plage.jpeg",
        buttonText: "Acheter maintenant",
    }
]

const DisplayProduct = ({slice = 3}:{slice:number}) => {
    return (
        <div className="w-full px-4 py-8  px-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                    Notre Collection de Sandales
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Découvrez notre sélection exclusive de sandales artisanales,
                    alliant confort, qualité et style pour tous vos moments d'été.
                </p>
            </div>
            <div className="flex justify-end p-3">
                <Button effect="expandIcon" icon={ArrowRightIcon} iconPlacement="right">
                    Voir Plus</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center">
                {products.slice(0,slice).map((product, index) => (
                    <ProductCard
                        key={index}
                        {...product}
                    />
                ))}
            </div>
        </div>
    )
}

export default DisplayProduct