import { Users, Award, Briefcase, MessageCircle, CheckCircle2, Headphones } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Users,
      title: "Atendimento humanizado e dedicado",
      description: "Gestor exclusivo para acompanhamento próximo e personalizado"
    },
    {
      icon: Award,
      title: "Uso de tecnologia moderna e segura",
      description: "Sistemas integrados com os melhores padrões do mercado"
    },
    {
      icon: Briefcase,
      title: "Agilidade na entrega de relatórios",
      description: "Informações atualizadas e dashboards sempre à mão"
    },
    {
      icon: MessageCircle,
      title: "Transparência total e comunicação constante",
      description: "Você sempre sabe o que está acontecendo com seu financeiro"
    },
    {
      icon: CheckCircle2,
      title: "Processos padronizados e confiáveis",
      description: "Metodologia testada e aprovada por empresas de diversos segmentos"
    },
    {
      icon: Headphones,
      title: "Suporte ativo com acompanhamento mensal",
      description: "Reuniões regulares para análise e planejamento"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-slide-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light text-slide-text mb-4">
            Por que escolher a <span className="text-slide-accent font-medium">Finapp</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border-[3px] border-border hover:border-slide-accent transition-all duration-300 hover:shadow-xl animate-scale-in shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-slide-accent/20 flex items-center justify-center mx-auto mb-4">
                <differential.icon className="w-8 h-8 text-slide-accent" />
              </div>
              <h3 className="text-lg font-medium text-slide-text mb-3">{differential.title}</h3>
              <p className="text-base text-slide-text-light leading-relaxed">{differential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
