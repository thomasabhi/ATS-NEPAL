import React from "react";
import HeroSectionImage from "../../assets/Herosection.png"

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url( " + HeroSectionImage + " )",
      }}
    >
 
     
    </section>
  );
};

export default HeroSection;
