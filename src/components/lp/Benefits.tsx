import { Target, TrendingUp, Shield, DollarSign, CheckCircle2, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    { 
      icon: Target, 
      title: "Automatizamos toda a rotina financeira",
      description: "Cuidamos do que é operacional, pra você focar no que é estratégico"
    },
    { 
      icon: TrendingUp, 
      title: "Entregamos relatórios e previsões claras",
      description: "Dashboards visuais e objetivos para tomada de decisão"
    },
    { 
      icon: Shield, 
      title: "Equipe financeira especializada",
      description: "Profissionais experientes dedicados ao seu negócio"
    },
    { 
      icon: DollarSign, 
      title: "Reduzimos custos e riscos operacionais",
      description: "Evite erros, multas e custos fixos de estrutura interna"
    },
    { 
      icon: CheckCircle2, 
      title: "Garantimos segurança e confidencialidade total",
      description: "Protocolos rigorosos e sistemas seguros"
    },
    { 
      icon: Clock, 
      title: "Você foca no crescimento, nós cuidamos do resto",
      description: "Libere seu tempo para o que realmente importa"
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light text-slide-text mb-4">
            Como a Zamar <span className="text-slide-accent font-medium">transforma seu financeiro</span>
          </h2>
          <p className="text-lg text-slide-text-light max-w-3xl mx-auto">
            A Zamar cuida do que é operacional, pra você focar no que é estratégico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border-[3px] border-border hover:border-slide-accent transition-all duration-300 animate-scale-in shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-slide-accent/20 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-slide-accent" />
              </div>
              <h3 className="text-lg font-medium text-slide-text mb-3">{benefit.title}</h3>
              <p className="text-base text-slide-text-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
