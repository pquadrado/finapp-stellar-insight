import finappLogo from "@/assets/finapp-logo.png";
import { ArrowRight, Clock, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5516997454247', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-b from-slide-bg to-background">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        <img 
          src={finappLogo} 
          alt="Finapp BPO Financeiro" 
          className="w-full max-w-[320px] mx-auto mb-12 animate-scale-in"
        />
        
        <h1 className="text-4xl md:text-6xl font-light text-slide-text mb-8 leading-tight">
          Perdendo horas tentando organizar o financeiro e sem ter a <span className="text-slide-accent font-medium">clareza da situação financeira</span> da sua empresa?
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm border-2 border-border">
            <div className="w-14 h-14 rounded-full bg-slide-accent/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-slide-accent" />
            </div>
            <p className="text-base text-slide-text font-medium">Eficiência e Clareza</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm border-2 border-border">
            <div className="w-14 h-14 rounded-full bg-slide-accent/20 flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-slide-accent" />
            </div>
            <p className="text-base text-slide-text font-medium">Tempo para Estratégia</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm border-2 border-border">
            <div className="w-14 h-14 rounded-full bg-slide-accent/20 flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-slide-accent" />
            </div>
            <p className="text-base text-slide-text font-medium">Tranquilidade Total</p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-slide-text-light mb-10 max-w-3xl mx-auto leading-relaxed">
          Com a Finapp, toda a operação financeira é cuidada com <span className="text-slide-accent font-medium">eficiência e clareza</span>, permitindo que você tenha tranquilidade, tempo e foco nas estratégias para tomar as melhores decisões.
        </p>

        <Button 
          onClick={openWhatsApp}
          className="bg-slide-accent hover:bg-slide-accent/90 text-white px-10 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          Quero organizar meu financeiro <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
