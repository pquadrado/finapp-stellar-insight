import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverSlide from "./slides/CoverSlide";
import ChallengeSlide from "./slides/ChallengeSlide";
import WhatIsBPOSlide from "./slides/WhatIsBPOSlide";
import ServicesSlide from "./slides/ServicesSlide";
import BenefitsSlide from "./slides/BenefitsSlide";
import PlansSlide from "./slides/PlansSlide";
import DifferentialsSlide from "./slides/DifferentialsSlide";
import CEOSlide from "./slides/CEOSlide";
import ContactSlide from "./slides/ContactSlide";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <CoverSlide key="cover" />,
    <ChallengeSlide key="challenge" />,
    <WhatIsBPOSlide key="what-is-bpo" />,
    <ServicesSlide key="services" />,
    <BenefitsSlide key="benefits" />,
    <PlansSlide key="plans" />,
    <DifferentialsSlide key="differentials" />,
    <CEOSlide key="ceo" />,
    <ContactSlide key="contact" />,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slide-bg">
      {/* Slide Content */}
      <div className="h-full w-full animate-fade-in">
        {slides[currentSlide]}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="h-10 w-10 rounded-full bg-background/80 hover:bg-background shadow-lg"
        >
          <ChevronLeft className="h-5 w-5 text-slide-text" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-slide-accent"
                  : "w-2 bg-slide-text-light/40 hover:bg-slide-text-light/60"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="h-10 w-10 rounded-full bg-background/80 hover:bg-background shadow-lg"
        >
          <ChevronRight className="h-5 w-5 text-slide-text" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 text-sm text-slide-text-light font-light">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Presentation;
