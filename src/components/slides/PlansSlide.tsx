import { Check, FileText } from "lucide-react";

const PlansSlide = () => {
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
      price: "R$ 900 a R$ 1.200"
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
      price: "R$ 2.500 a R$ 3.000"
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

  return (
    <div className="h-full w-full flex flex-col items-center justify-start px-6 md:px-12 py-8 overflow-y-auto">
      <h1 className="text-3xl md:text-4xl font-light text-slide-text mb-2 text-center">
        💼 Planos sob medida para o seu negócio
      </h1>
      <p className="text-base text-slide-text-light text-center mb-8">
        Finapp BPO Financeiro
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full mb-8">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`flex flex-col p-5 rounded-xl backdrop-blur-sm border transition-all duration-300 animate-scale-in ${
              plan.highlight 
                ? "bg-slide-accent/10 border-slide-accent shadow-lg" 
                : "bg-background/60 border-border/50"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-medium text-slide-text mb-1">{plan.name}</h3>
              <p className="text-xs text-slide-text-light italic">{plan.idealFor}</p>
            </div>

            <div className="flex-1 space-y-2 mb-4">
              {plan.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-slide-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slide-text">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-4 border-t border-border/30">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slide-text-light" />
                <span className="text-xs text-slide-text-light">{plan.limit}</span>
              </div>
              <div className="text-center py-2 px-3 rounded-lg bg-slide-accent/20">
                <span className="text-sm font-medium text-slide-accent">{plan.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-5xl w-full space-y-4">
        <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-6">
          <h4 className="text-lg font-medium text-slide-text mb-4 flex items-center gap-2">
            🧾 Observações importantes
          </h4>
          <div className="space-y-2">
            {notes.map((note, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-slide-accent text-xs mt-1">➤</span>
                <p className="text-xs text-slide-text-light">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansSlide;
