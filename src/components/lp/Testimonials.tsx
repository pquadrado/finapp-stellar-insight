import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Com a Finapp, reduzimos 30% do tempo gasto com tarefas financeiras e ganhamos clareza total do caixa.",
      author: "P2 Comunicação",
      role: "CEO"
    },
    {
      text: "Agora temos previsibilidade e tranquilidade para crescer, não me preocupo mais com as tarefas diárias porque sei que estão em boas mãos — A Finapp fez toda a diferença.",
      author: "Pucci Projetos",
      role: "CEO"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light text-slide-text mb-4">
            Resultados reais de quem confia na <span className="text-slide-accent font-medium">Finapp</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-7 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border-[3px] border-border hover:border-slide-accent transition-all duration-300 animate-scale-in shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-slide-accent/30 mb-4" />
              <p className="text-lg text-slide-text mb-5 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="text-base font-medium text-slide-accent">{testimonial.author}</p>
                <p className="text-sm text-slide-text-light">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
