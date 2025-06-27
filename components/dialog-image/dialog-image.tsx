import { Variants, Transition } from "motion/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../motion-primitives/dialog";
import { Search, X } from "lucide-react";

interface DialogImageProps {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

export function DialogImage({ src, alt = "Image" }: DialogImageProps) {
  const customVariants: Variants = {
    initial: {
      scale: 0.9,
      filter: "blur(10px)",
      y: "100%",
    },
    animate: {
      scale: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  const customTransition: Transition = {
    type: "spring",
    bounce: 0,
    duration: 0.4,
  };

  return (
    <Dialog variants={customVariants} transition={customTransition}>
      <DialogTrigger className="bg-zinc-950/80 min-h-10 backdrop-blur-sm px-3 py-2 rounded-full text-white hover:bg-zinc-900/90 transition-all duration-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        <Search className="w-4 h-4" />
      </DialogTrigger>
      <DialogContent className="w-full max-w-6xl bg-white p-0 dark:bg-zinc-900 border-none overflow-hidden">
        {/* Conteneur relatif pour positionnement */}
        <div className="relative w-full h-full max-h-[90vh]">
          {/* Conteneur flex pour centrer l'image */}
          <div className="flex items-center justify-center w-full h-full p-4">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Bouton de fermeture positionné en haut à droite */}
          <DialogClose className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm hover:bg-black/90 text-white transition-colors z-10">
            <X className="w-5 h-5" />
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
