import Hero from "@/components/lp/Hero";
import WhatIsBPO from "@/components/lp/WhatIsBPO";
import Challenge from "@/components/lp/Challenge";
import Benefits from "@/components/lp/Benefits";
import Testimonials from "@/components/lp/Testimonials";
import Differentials from "@/components/lp/Differentials";
import CEO from "@/components/lp/CEO";
import Plans from "@/components/lp/Plans";
import FAQ from "@/components/lp/FAQ";
import Contact from "@/components/lp/Contact";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhatIsBPO />
      <Challenge />
      <Benefits />
      <Testimonials />
      <Differentials />
      <CEO />
      <Plans />
      <FAQ />
      <Contact />
    </div>
  );
};

export default LandingPage;
