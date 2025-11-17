import { Check, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Plans = () => {
  const plans = [
    {
      name: "Essencial",
      idealFor: "Autônomos e MEIs que precisam de controle básico",
      features: [
        "Lançamentos financeiros (contas a pagar e receber)",
        "Conciliação bancária simples",
        "Controle de fluxo de caixa",
        "Relatório mensal resumido"
      ],
      limit: "Até 50 notas fiscais/movimentações",
      price: "R$ 900 a R$ 1.200",
      priceDetail: "/mês"
    },
    {
      name: "Executivo",
      idealFor: "Pequenas empresas com volume moderado de operações",
      features: [
        "Tudo do Essencial",
        "Relatórios gerenciais e comparativo budget x realizado",
        "Organização de centros de custo",
        "Atendimento via WhatsApp comercial"
      ],
      limit: "Até 150 notas fiscais/movimentações",
      price: "R$ 1.500 a R$ 2.000",
      priceDetail: "/mês",
      highlight: true
    },
    {
      name: "Premium",
      idealFor: "Empresas em crescimento ou com múltiplos centros de custo",
      features: [
        "Tudo do Executivo",
        "Dashboards em Excel/Power BI",
        "Previsões de fluxo de caixa e análise estratégica",
        "Reunião mensal de resultados"
      ],
      limit: "Até 300 notas fiscais/movimentações",
      price: "R$ 2.500 a R$ 3.000",
      priceDetail: "/mês"
    }
  ];

  const notes = [
    "Valores podem variar conforme volume de documentos, complexidade e integração de sistemas (ex: Conta Azul, Nibo etc.)",
    "Movimentações adicionais (acima do limite mensal) podem ser cobradas à parte: R$ 3,00 por lançamento extra",
    "Inclui acompanhamento remoto e reuniões online",
    "Todos os relatórios e controles podem ser entregues em Excel ou Power BI",
    "Os planos apresentados não incluem a execução de pagamentos de despesas e faturas, serviço que pode ser contratado separadamente conforme a necessidade do cliente.",
    "A contratação dos pacotes é feita por período mínimo de 3 meses, garantindo continuidade, organização e resultados consistentes no controle financeiro do seu negócio."
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plans" className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-slide-text mb-4">
            💼 Planos sob medida para o <span className="text-slide-accent font-medium">seu negócio</span>
          </h2>
          <p className="text-lg text-slide-text-light">
            Escolha o plano ideal para o momento da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`flex flex-col p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-xl animate-scale-in ${
                plan.highlight 
                  ? "bg-slide-accent/10 border-slide-accent shadow-lg scale-105" 
                  : "bg-background/60 border-border/50 hover:border-slide-accent/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlight && (
                <div className="text-center mb-4 py-2 px-4 rounded-lg bg-slide-accent/20 text-slide-accent text-sm font-medium">
                  ⭐ Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-medium text-slide-text mb-2">{plan.name}</h3>
                <p className="text-sm text-slide-text-light italic">{plan.idealFor}</p>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-slide-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slide-text">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slide-text-light" />
                  <span className="text-xs text-slide-text-light">{plan.limit}</span>
                </div>
                <div className="text-center py-3 px-4 rounded-lg bg-slide-accent/20">
                  <div className="text-2xl font-medium text-slide-accent">{plan.price}</div>
                  <div className="text-xs text-slide-text-light">{plan.priceDetail}</div>
                </div>
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.highlight 
                      ? "bg-slide-accent hover:bg-slide-accent/90 text-white" 
                      : "bg-background hover:bg-slide-accent/10 text-slide-text border border-slide-accent"
                  }`}
                >
                  Escolher plano <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border-[3px] border-border rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-medium text-slide-text mb-6 flex items-center gap-2">
              🧾 Observações importantes
            </h4>
            <div className="space-y-3">
              {notes.map((note, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-slide-accent text-sm mt-1">➤</span>
                  <p className="text-sm text-slide-text-light">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
