import { CreditCard, ArrowLeftRight, TrendingUp, FileText, BarChart3, DollarSign } from "lucide-react";

const Services = () => {
  const services = [
    { 
      icon: CreditCard, 
      title: "Contas a Pagar e Receber",
      description: "Organização e controle das entradas e saídas financeiras, garantindo que todas as obrigações sejam cumpridas no prazo e que os recebimentos sejam devidamente acompanhados."
    },
    { 
      icon: ArrowLeftRight, 
      title: "Conciliação Bancária",
      description: "Verificação diária dos lançamentos bancários, identificando e classificando cada transação para manter o controle financeiro atualizado e preciso."
    },
    { 
      icon: FileText, 
      title: "Emissão de Notas Fiscais",
      description: "Emissão de documentos fiscais conforme a necessidade do cliente, garantindo conformidade com as obrigações tributárias."
    },
    { 
      icon: FileText, 
      title: "Organização de Documentos",
      description: "Arquivamento digital organizado de comprovantes, notas fiscais e documentos relevantes para facilitar o acesso sempre que necessário."
    },
    { 
      icon: BarChart3, 
      title: "Relatórios Financeiros",
      description: "Elaboração de relatórios periódicos que mostram de forma clara a situação financeira, auxiliando na análise e tomada de decisões."
    },
    { 
      icon: TrendingUp, 
      title: "Controle de Fluxo de Caixa",
      description: "Projeção e acompanhamento das entradas e saídas financeiras para evitar surpresas e permitir um planejamento adequado."
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-light text-slide-text mb-3">
            💼 Com a Zamar, você conta com:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-start p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border-[3px] border-border hover:border-slide-accent transition-all duration-300 hover:shadow-lg animate-fade-in shadow-lg"
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
    </section>
  );
};

export default Services;
