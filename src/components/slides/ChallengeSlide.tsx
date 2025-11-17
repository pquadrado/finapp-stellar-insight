import { AlertCircle, Clock, TrendingDown, FileQuestion } from "lucide-react";

const ChallengeSlide = () => {
  const challenges = [
    { icon: TrendingDown, text: "Falta de controle do fluxo de caixa" },
    { icon: Clock, text: "Atrasos constantes nos pagamentos" },
    { icon: AlertCircle, text: "Erros manuais recorrentes" },
    { icon: FileQuestion, text: "Decisões sem base em dados confiáveis" },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8 md:px-16">
      <h1 className="text-4xl md:text-5xl font-light text-slide-text mb-16 text-center">
        Os desafios das empresas
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {challenges.map((challenge, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-slide-accent/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slide-accent/20 flex items-center justify-center">
              <challenge.icon className="w-6 h-6 text-slide-accent" />
            </div>
            <p className="text-lg text-slide-text mt-2">{challenge.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengeSlide;
