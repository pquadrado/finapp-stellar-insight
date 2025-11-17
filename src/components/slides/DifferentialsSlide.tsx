import { Award, Laptop, Heart, TrendingUp } from "lucide-react";

const DifferentialsSlide = () => {
  const differentials = [
    {
      icon: Award,
      title: "Experiência sólida",
      description: "Anos de expertise em gestão financeira de vários portes de empresa, inclusive multinacionais e para empresas de diversos segmentos",
    },
    {
      icon: Laptop,
      title: "Ferramentas profissionais",
      description: "Domínio completo de plataformas financeira como exemplo Conta Azul, Omie, Excel Avançado e Power BI e outros",
    },
    {
      icon: Heart,
      title: "Atendimento humanizado",
      description: "Relação próxima e personalizada com cada cliente",
    },
    {
      icon: TrendingUp,
      title: "Visão estratégica",
      description: "Não apenas organizamos: ajudamos você a crescer",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8 md:px-16">
      <h1 className="text-4xl md:text-5xl font-light text-slide-text mb-4 text-center">
        Diferenciais da Finapp
      </h1>
      
      <p className="text-xl text-slide-text-light text-center mb-16 max-w-2xl">
        O que nos torna a escolha ideal para <span className="text-slide-accent font-medium">transformar</span> as finanças da sua empresa
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {differentials.map((diff, index) => (
          <div 
            key={index}
            className="flex items-start gap-5 p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-slide-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slide-accent/20 flex items-center justify-center">
              <diff.icon className="w-7 h-7 text-slide-accent" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slide-text mb-2">{diff.title}</h3>
              <p className="text-sm text-slide-text-light leading-relaxed">{diff.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DifferentialsSlide;
