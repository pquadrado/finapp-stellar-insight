import { CreditCard, ArrowLeftRight, TrendingUp, FileText, BarChart3, DollarSign } from "lucide-react";

const ServicesSlide = () => {
  const services = [
    { icon: CreditCard, title: "Contas a pagar e a receber", description: "Gestão completa do fluxo financeiro" },
    { icon: ArrowLeftRight, title: "Conciliação bancária", description: "Controle preciso e atualizado" },
    { icon: TrendingUp, title: "Fluxo de caixa e previsões", description: "Planejamento financeiro estratégico" },
    { icon: FileText, title: "Emissão de notas e boletos", description: "Automatização de documentos fiscais" },
    { icon: BarChart3, title: "Relatórios e dashboards", description: "Excel e Power BI personalizados" },
    { icon: DollarSign, title: "Pagamento de contas", description: "Serviço contratado à parte" },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8 md:px-16 py-12">
      <h1 className="text-4xl md:text-5xl font-light text-slide-text mb-12 text-center">
        Nossos Serviços
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {services.map((service, index) => (
          <div 
            key={index}
            className="flex flex-col items-start p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-slide-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-slide-accent/20 flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-slide-accent" />
            </div>
            <h3 className="text-lg font-medium text-slide-text mb-2">{service.title}</h3>
            <p className="text-sm text-slide-text-light">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSlide;
