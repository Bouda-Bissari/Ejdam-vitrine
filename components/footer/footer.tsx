import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";

const TikTokIcon = ({ className }:{className:string}) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-6">
        {/* Version Mobile - Stack vertical */}
        <div className="flex flex-col items-center space-y-4 md:hidden">
          {/* Réseaux sociaux en premier sur mobile */}
          <div className="flex items-center space-x-3">
            {/* <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Button
                size="icon"
                variant="outline"
                className="rounded-full h-8 w-8"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </Link> */}
            {/* <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Button
                size="icon"
                variant="outline"
                className="rounded-full h-8 w-8"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </Link> */}
            <Link
              href="https://www.tiktok.com/@edjamshoeshouse?_t=ZM-8xVZ6BCmuHe&_r=1"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Button
                size="icon"
                variant="outline"
                className="rounded-full h-8 w-8"
              >
                <TikTokIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Edjam Shoes. Tous droits réservés.
          </div>

          {/* Liens légaux */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <Link
              href="/mentions-legales"
              className="hover:text-primary transition-colors"
            >
              Mentions légales
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-primary transition-colors"
            >
              Confidentialité
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/conditions-generales"
              className="hover:text-primary transition-colors"
            >
              CGU
            </Link>
          </div>
        </div>

        {/* Version Desktop - Layout horizontal */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
          {/* Liens légaux */}
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link
              href="/mentions-legales"
              className="hover:text-primary transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-primary transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="/conditions-generales"
              className="hover:text-primary transition-colors"
            >
              CGU
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Edjam Shoes. Tous droits réservés.
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center space-x-3">
            {/* <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Button size="icon" variant="outline" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
            </Link> */}
            {/* <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Button size="icon" variant="outline" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
            </Link> */}
            <Link
              href="https://www.tiktok.com/@edjamshoeshouse?_t=ZM-8xVZ6BCmuHe&_r=1"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Button size="icon" variant="outline" className="rounded-full">
                <TikTokIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
