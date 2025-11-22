import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "O que diferencia a Zamar de uma contabilidade tradicional?",
      answer: "A contabilidade foca nos registros fiscais e obrigações legais. A Zamar atua antes, organizando o financeiro do dia a dia e entregando dados que ajudam a tomar decisões estratégicas."
    },
    {
      question: "É seguro compartilhar informações financeiras?",
      answer: "Sim. Trabalhamos com protocolos de confidencialidade e sistemas seguros, garantindo total sigilo das informações da sua empresa."
    },
    {
      question: "Preciso mudar o sistema que uso hoje?",
      answer: "Não necessariamente. A Zamar se adapta ao seu sistema atual, ou pode ajudar a implantar uma solução mais eficiente e integrada."
    },
    {
      question: "Como é o processo de implantação?",
      answer: "📍 Diagnóstico → 🧭 Planejamento → ⚙️ Estruturação → 📊 Entregas semanais e mensais. Tudo acompanhado por um especialista dedicado."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light text-slide-text mb-4">
            Dúvidas <span className="text-slide-accent font-medium">frequentes</span>
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border-[3px] border-border hover:border-slide-accent transition-all duration-300 animate-fade-in shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <HelpCircle className="w-6 h-6 text-slide-accent flex-shrink-0 mt-1" />
                <h3 className="text-lg font-medium text-slide-text">{faq.question}</h3>
              </div>
              <p className="text-base text-slide-text-light leading-relaxed pl-10">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
