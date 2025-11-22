import { Mail, Phone, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5516997454247', '_blank');
  };

  const contacts = [
    { 
      icon: Mail, 
      text: "zamar@gmail.com",
      link: "mailto:zamar@gmail.com"
    },
    { 
      icon: Phone, 
      text: "(16) 99745-4247",
      link: "https://wa.me/5516997454247"
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-gradient-to-b from-slide-bg to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light text-slide-text mb-6 leading-tight">
            💼 Pronto pra ter um financeiro <span className="text-slide-accent font-medium">confiável, seguro e sob controle</span>?
          </h2>
          <p className="text-lg md:text-xl text-slide-text-light max-w-2xl mx-auto">
            Fale com um especialista e descubra o poder do AFV (Assistente Financeiro Virtual) da Zamar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <a
            href="https://wa.me/5516997454247"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-xl bg-background/50 border-2 border-border hover:border-slide-accent transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-slide-accent/20 flex items-center justify-center mb-4">
              <MessageCircle className="w-7 h-7 text-slide-accent" />
            </div>
            <p className="text-sm text-slide-text-light">Resposta Rápida</p>
          </a>
          
          <a
            href="https://wa.me/5516997454247"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-xl bg-background/50 border-2 border-border hover:border-slide-accent transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-slide-accent/20 flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-slide-accent" />
            </div>
            <p className="text-sm text-slide-text-light">Atendimento Personalizado</p>
          </a>
          
          <a
            href="mailto:zamar@gmail.com"
            className="flex flex-col items-center p-6 rounded-xl bg-background/50 border-2 border-border hover:border-slide-accent transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-slide-accent/20 flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-slide-accent" />
            </div>
            <p className="text-sm text-slide-text-light">Proposta Sob Medida</p>
          </a>
        </div>

        <Button 
          onClick={openWhatsApp}
          className="bg-slide-accent hover:bg-slide-accent/90 text-white px-10 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 mb-12"
        >
          🚀 Solicitar proposta personalizada <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <div className="max-w-2xl mx-auto space-y-5">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border-[3px] border-border hover:border-slide-accent transition-all duration-300 animate-fade-in hover:shadow-xl shadow-lg group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slide-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <contact.icon className="w-5 h-5 text-slide-accent" />
              </div>
              <span className="text-lg text-slide-text">{contact.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
