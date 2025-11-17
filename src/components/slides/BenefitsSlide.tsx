import { DollarSign, Clock, Eye, Target, Handshake } from "lucide-react";

const BenefitsSlide = () => {
  const benefits = [
    { 
      icon: DollarSign, 
      title: "Redução de custos", 
      description: "Elimine despesas com contratação e treinamento de equipe interna",
      highlight: "Economia de até 40%"
    },
    { 
      icon: Clock, 
      title: "Ganho de tempo", 
      description: "Foque no core business enquanto cuidamos do financeiro",
      highlight: "+15h/semana"
    },
    { 
      icon: Eye, 
      title: "Visão clara", 
      description: "Entenda exatamente para onde vai cada centavo da empresa",
      highlight: "100% transparente"
    },
    { 
      icon: Target, 
      title: "Decisões baseadas em dados", 
      description: "Relatórios precisos para tomadas de decisão assertivas",
      highlight: "Dados em tempo real"
    },
    { 
      icon: Handshake, 
      title: "Suporte estratégico", 
      description: "Consultoria financeira para impulsionar seu crescimento",
      highlight: "Parceria contínua"
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8 md:px-16 py-12">
      <h1 className="text-4xl md:text-5xl font-light text-slide-text mb-12 text-center">
        Benefícios para sua empresa
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="flex flex-col p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-slide-accent/50 transition-all duration-300 animate-scale-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="w-10 h-10 rounded-lg bg-slide-accent/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-slide-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-slide-text mb-1">{benefit.title}</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-slide-accent/10 text-xs font-medium text-slide-accent mb-2">
                  {benefit.highlight}
                </div>
              </div>
            </div>
            <p className="text-sm text-slide-text-light leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSlide;
