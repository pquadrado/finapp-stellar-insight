import { Clock, DollarSign, FileQuestion, TrendingDown, Users, BarChart3, Building2 } from "lucide-react";

const Challenge = () => {
  const challenges = [
    { 
      icon: Clock, 
      description: "Passa horas cuidando de pagamentos e boletos?" 
    },
    { 
      icon: DollarSign, 
      description: "Paga juros e multas por falta de controle?" 
    },
    { 
      icon: FileQuestion, 
      description: "Não sabe pra onde está indo o dinheiro da empresa?" 
    },
    { 
      icon: Users, 
      description: "Sua equipe está sobrecarregada com planilhas?" 
    },
    { 
      icon: Building2, 
      description: "Custa caro manter estrutura interna?" 
    },
    { 
      icon: TrendingDown, 
      description: "Falta clareza e previsibilidade no caixa?" 
    },
    { 
      icon: BarChart3, 
      description: "Não tem certeza de qual produto é mais rentável?" 
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-slide-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light text-slide-text mb-4">
            Você se reconhece nessas <span className="text-slide-accent font-medium">situações</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border-[3px] border-border hover:border-slide-accent transition-all duration-300 animate-fade-in shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slide-accent/20 flex items-center justify-center">
                <challenge.icon className="w-6 h-6 text-slide-accent" />
              </div>
              <p className="text-base text-slide-text mt-2 leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl text-slide-text-light max-w-2xl mx-auto">
            👉 Se respondeu <span className="text-slide-accent font-medium">"sim"</span> pra alguma delas,
            <br />
            <span className="text-slide-accent font-medium">a Zamar é pra você.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
