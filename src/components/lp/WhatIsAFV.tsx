import { CheckCircle2, BarChart3, FileText, Banknote, TrendingUp, HeadphonesIcon, Settings } from "lucide-react";

const WhatIsAFV = () => {
  const services = [
    { icon: Banknote, text: "Contas a pagar e receber" },
    { icon: BarChart3, text: "Conciliação bancária automática" },
    { icon: FileText, text: "Emissão de boletos e notas fiscais" },
    { icon: TrendingUp, text: "Controle de fluxo de caixa e projeção de resultados" },
    { icon: BarChart3, text: "Relatórios gerenciais visuais e objetivos" },
    { icon: HeadphonesIcon, text: "Suporte financeiro especializado" },
    { icon: Settings, text: "Implantação de sistemas e processos sob medida" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light text-slide-text mb-8">
            O que é <span className="text-slide-accent font-medium">AFV (Assistente Financeiro Virtual)</span>?
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-slide-text leading-relaxed">
              O AFV (Assistente Financeiro Virtual) é a <span className="text-slide-accent font-medium">terceirização inteligente</span> das rotinas financeiras da sua empresa.
            </p>
            
            <p className="text-lg md:text-xl text-slide-text-light leading-relaxed">
              Na prática, a Finapp cuida de tudo — lançamentos, pagamentos, recebimentos, conciliações, relatórios e muito mais — enquanto você mantém o <span className="text-slide-accent font-medium">controle total e a clareza dos números</span>.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-[3px] border-border shadow-xl">
          <h3 className="text-2xl md:text-3xl font-medium text-slide-text mb-8 text-center">
            💼 Com a Finapp, você conta com:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-background/50 border-2 border-border hover:border-slide-accent transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slide-accent/20 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-slide-accent" />
                </div>
                <p className="text-base text-slide-text mt-2 leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAFV;
