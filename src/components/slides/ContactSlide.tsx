import { Mail, Phone } from "lucide-react";
import zamarLogo from "@/assets/zamar-logo.jpg";

const ContactSlide = () => {
  const contacts = [
    { icon: Mail, text: "finappbpofinanceiro@gmail.com" },
    { icon: Phone, text: "(16) 99745-4247" },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8 md:px-16">
      <img 
        src={zamarLogo} 
        alt="Zamar Consultoria Financeira" 
        className="w-full max-w-[200px] mb-8 animate-scale-in"
      />

      <div className="space-y-4 max-w-md w-full">
        {contacts.map((contact, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-slide-accent/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slide-accent/20 flex items-center justify-center">
              <contact.icon className="w-4 h-4 text-slide-accent" />
            </div>
            <span className="text-base text-slide-text">{contact.text}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-xl text-slide-text font-light">
          Vamos transformar as finanças da <span className="text-slide-accent font-medium">sua empresa</span>?
        </p>
      </div>
    </div>
  );
};

export default ContactSlide;
