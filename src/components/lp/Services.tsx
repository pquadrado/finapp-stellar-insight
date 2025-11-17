import { Wallet, Building2, TrendingUp, FileText, BarChart, DollarSign } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wallet,
      title: "Contas a pagar e a receber",
      description: "Gestão completa de entradas e saídas"
    },
    {
      icon: Building2,
      title: "Conciliação bancária",
      description: "Tudo conferido, tudo certo"
    },
    {
      icon: TrendingUp,
      title: "Fluxo de caixa e previsões",
      description: "Você sabe onde está e para onde vai"
    },
    {
      icon: FileText,
      title: "Emissão de notas e boletos",
      description: "Processos automáticos e sem erro"
    },
    {
      icon: BarChart,
      title: "Relatórios e dashboards",
      description: "Informações claras no Excel ou Power BI"
    },
    {
      icon: DollarSign,
      title: "Pagamento de contas",
      description: "Disponível como serviço adicional"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-light text-slide-text mb-3">
            O que a Finapp faz por você
          </h2>
          <p className="text-base text-slide-text-light max-w-2xl mx-auto">
            Cuidamos de toda a rotina financeira da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-5 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border-[3px] border-border hover:border-slide-accent transition-all duration-300 hover:shadow-xl animate-scale-in group shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-slide-accent/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-slide-accent" />
              </div>
              <h3 className="text-base font-medium text-slide-text mb-2">{service.title}</h3>
              <p className="text-sm text-slide-text-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
