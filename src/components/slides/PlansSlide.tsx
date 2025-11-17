import { Check, FileText } from "lucide-react";

const PlansSlide = () => {
  const plans = [
    {
      name: "Pacote Básico",
      idealFor: "Para pessoas físicas e autônomos",
      description: "Organização financeira essencial para quem precisa colocar o básico em ordem com segurança e simplicidade.",
      features: [
        "Contas a pagar e receber",
        "Conciliação bancária simples",
        "Organização digital de documentos",
        "Conciliação bancária semanal",
        "Atendimento humanizado via WhatsApp",
        "Reunião mensal de resultados"
      ],
      price: "R$ 380,00 a R$ 600,00"
    },
    {
      name: "Pacote Essencial",
      idealFor: "Para autônomos e MEIs que precisam de estrutura financeira",
      description: "Controle financeiro estruturado para quem precisa ter clareza, previsibilidade e apoio no dia a dia.",
      features: [
        "Contas a pagar e receber",
        "Conciliação bancária simples",
        "Organização digital de documentos",
        "Controle de fluxo de caixa",
        "Relatório financeiro mensal (resumido)",
        "Emissão de notas fiscais",
        "Conciliação bancária semanal",
        "Atendimento humanizado via WhatsApp",
        "Reunião mensal de resultados"
      ],
      price: "R$ 580,00 a R$ 900,00"
    },
    {
      name: "Pacote Executivo",
      idealFor: "Para pequenas empresas com volume moderado",
      description: "Gestão financeira completa, com análises gerenciais que ajudam na tomada de decisões e no crescimento da empresa.",
      features: [
        "Contas a pagar e receber",
        "Conciliação bancária simples",
        "Organização digital de documentos",
        "Controle de fluxo de caixa",
        "Relatório financeiro mensal (resumido)",
        "Emissão de notas fiscais",
        "Relatórios financeiros gerenciais",
        "Indicadores comparativos e análises de desempenho",
        "Conciliação bancária semanal",
        "Atendimento humanizado via WhatsApp",
        "Reunião mensal de resultados"
      ],
      price: "R$ 880,00 a R$ 1.500,00",
      highlight: true
    },
    {
      name: "Pacote Premium",
      idealFor: "Para empresas com múltiplos centros de custo ou em expansão",
      description: "Gestão financeira estratégica, com análises aprofundadas, previsões e acompanhamento completo para tomar decisões com confiança.",
      features: [
        "Contas a pagar e receber",
        "Conciliação bancária simples",
        "Organização digital de documentos",
        "Controle de fluxo de caixa",
        "Relatório financeiro mensal (resumido)",
        "Emissão de notas fiscais",
        "Relatórios financeiros gerenciais",
        "Indicadores comparativos e análises de desempenho",
        "Previsão estratégica de fluxo de caixa",
        "Relatórios financeiros avançados",
        "Análises personalizadas e insights estratégicos",
        "Conciliação bancária semanal",
        "Atendimento humanizado via WhatsApp",
        "Reunião mensal de resultados"
      ],
      price: "R$ 1.800,00 a R$ 2.500,00 (sob análise prévia)"
    }
  ];

  const notes = [
    "Valores podem variar conforme o volume de documentos, a complexidade das operações e as integrações necessárias. O custo do sistema financeiro utilizado (como Conta Azul, Nibo, Omie etc.) é cobrado à parte, diretamente conforme a tabela da plataforma escolhida.",
    "Movimentações adicionais acima do limite mensal contratado podem ser cobradas separadamente — valor de R$ 3,00 por lançamento extra.",
    "Acompanhamento remoto e reuniões online incluídos em todos os pacotes.",
    "Apresentação dos relatórios de resultados, com explicação clara dos números, indicadores e desempenho financeiro.",
    "Os planos não incluem a execução de pagamentos de contas, faturas ou boletos. Esse serviço pode ser contratado separadamente, caso o cliente deseje.",
    "Contratação mínima de 3 meses, garantindo continuidade, organização e resultados consistentes no controle financeiro da empresa."
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-start px-6 md:px-12 py-8 overflow-y-auto">
      <h1 className="text-3xl md:text-4xl font-light text-slide-text mb-2 text-center">
        💼 Planos sob medida para o seu negócio
      </h1>
      <p className="text-base text-slide-text-light text-center mb-8">
        Finapp AFV (Assistente Financeiro Virtual)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl w-full mb-8">
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
              <p className="text-xs text-slide-text-light italic mb-2">{plan.idealFor}</p>
              <p className="text-xs text-slide-text-light">{plan.description}</p>
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
