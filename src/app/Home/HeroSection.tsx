import React from "react";

const HeroSection = () => {
  return (
    <div id="beranda" className="relative h-[80vh] w-full overflow-hidden">
      <img
        src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-331625-933054.jpg&fm=jpg"
        alt="Gunung"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl text-white font-bold tracking-wider drop-shadow-md animate-fade-in">
          Wisata Gunung Indah
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
