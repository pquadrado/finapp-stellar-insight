import { Building2, CheckCircle2, TrendingUp } from "lucide-react";

const WhatIsBPOSlide = () => {
  const benefits = [
    { icon: Building2, text: "Terceirização completa do setor financeiro" },
    { icon: CheckCircle2, text: "Organização de rotinas e redução de erros" },
    { icon: TrendingUp, text: "Melhoria na tomada de decisão estratégica" },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8 md:px-16">
      <h1 className="text-4xl md:text-5xl font-light text-slide-text mb-6 text-center">
        O que é o BPO Financeiro?
      </h1>
      
      <p className="text-xl text-slide-text-light text-center max-w-3xl mb-16 leading-relaxed">
        É a terceirização estratégica do seu departamento financeiro.
        <br />
        <span className="text-slide-accent font-medium">A Finapp cuida de tudo</span> para você focar no crescimento do seu negócio.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-slide-accent/50 transition-all duration-300 animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-16 h-16 rounded-full bg-slide-accent/20 flex items-center justify-center mb-4">
              <benefit.icon className="w-8 h-8 text-slide-accent" />
            </div>
            <p className="text-lg text-slide-text">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIsBPOSlide;
