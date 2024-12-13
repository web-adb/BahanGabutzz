import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./Home/HeroSection";
import InfoSection from "./Home/InfoSection";
import GallerySection from "./Home/GallerySection";
import ContactSection from "./Home/ContactSection";

const Home = () => {
  return (
    <section className="relative">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <InfoSection />
        <GallerySection />
        <ContactSection />
      </div>
    </section>
  );
};

export default Home;
