import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {Facebook, Instagram, Twitter} from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex flex-row items-center justify-between px-4 py-3 mx-auto text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                    <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                        Mentions légales
                    </Link>
                    <Link href="/politique-de-confidentialite" className="hover:text-primary transition-colors">
                        Confidentialité
                    </Link>
                    <Link href="/conditions-generales" className="hover:text-primary transition-colors">
                        CGU
                    </Link>
                </div>
                <div>
                    © {new Date().getFullYear()} Edjam Shoes. Tous droits réservés.
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="https://youtube.com" target={"_blank"} className="hover:text-primary transition-colors">
                        <Button size="icon" className="rounded-full">
                            <Facebook />
                        </Button>
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                        <Button size="icon" className="rounded-full">
                            <Instagram />
                        </Button>
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                        <Button size="icon" className="rounded-full">
                            <Twitter />
                        </Button>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;