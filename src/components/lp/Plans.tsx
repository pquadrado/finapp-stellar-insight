import { Check, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Plans = () => {
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
      price: "R$ 380,00 a R$ 600,00",
      priceDetail: "/mês"
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
      price: "R$ 580,00 a R$ 900,00",
      priceDetail: "/mês"
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
      priceDetail: "/mês",
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
      price: "R$ 1.800,00 a R$ 2.500,00",
      priceDetail: "/mês (sob análise prévia)"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                <p className="text-sm text-slide-text-light italic mb-3">{plan.idealFor}</p>
                <p className="text-xs text-slide-text-light">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-slide-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slide-text">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-6 border-t border-border/30">
                <div className="text-center py-3 px-4 rounded-lg bg-slide-accent/20 mb-4">
                  <span className="text-lg font-medium text-slide-accent">{plan.price}</span>
                  <span className="text-xs text-slide-text-light block mt-1">{plan.priceDetail}</span>
                </div>
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.highlight 
                      ? "bg-slide-accent hover:bg-slide-accent/90 text-white" 
                      : "bg-background hover:bg-slide-accent/10 text-slide-text border border-slide-accent"
                  }`}
                >
                  Quero este plano <ArrowRight className="ml-2 h-4 w-4" />
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
