"use client"

import Navbar from "@/components/navbar/navbar";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import ProductCard from "@/components/card-product";
import DisplayProduct from "@/components/display-product/DisplayProduct";
import ContactPage from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import AboutSection from "@/components/about/about";

export default function Page(){
  return(
      <div>
          <div className=" relative" style={{backgroundImage: `url(images/hero.png)`}}>
              <div className="bg-black/70 absolute inset-0 top-0"></div>
              <div className="z-50 relative">
                  <Navbar />
                  <Hero />
              </div>

          </div>

          <div className="max-w-6xl mx-auto">

              <DisplayProduct slice={3} />
              <AboutSection />
              <ContactPage />
              <Footer />


          </div>
      </div>

  )
}