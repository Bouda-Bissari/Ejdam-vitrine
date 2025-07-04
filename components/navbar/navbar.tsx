import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Link, PhoneCall } from "lucide-react";
import ThemeToggleButton from "@/components/button-theme";

const Navbar = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl =
      "https://wa.me/+22893034640?text=Bonjour%20EdjamShoes%2C%20je%20suis%20intéressé(e)%20par%20vos%20sandales%20artisanales.%20Pouvez-vous%20me%20donner%20plus%20d'informations%20%3F";

    window.open(whatsappUrl, "_blank");
  };

  return (
    <nav className="h-16  bg-transparent">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Menu */}
        {/*<NavMenu className="hidden md:block" />*/}

        <div className="flex items-center gap-3">
          {/*<Button variant="outline" className="hidden sm:inline-flex">*/}
          {/*  Sign In*/}
          {/*</Button>*/}
          <ThemeToggleButton />
          <Button onClick={handleWhatsAppClick}>
            <PhoneCall />
            Contactez Nous
          </Button>
          {/* Mobile Menu */}
          <div className="md:hidden">{/*<NavigationSheet />*/}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
