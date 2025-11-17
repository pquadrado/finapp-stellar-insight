import fernandaPhoto from "@/assets/fernanda-alfaro.jpg";

const CEO = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-slide-text mb-4">
            Quem está por trás da <span className="text-slide-accent font-medium">Finapp</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 p-6 md:p-10 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border-[3px] border-border shadow-lg">
          <div className="flex-shrink-0 animate-scale-in mx-auto md:mx-0">
            <img 
              src={fernandaPhoto} 
              alt="Fernanda Alfaro - CEO Finapp AFV (Assistente Financeiro Virtual)" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover object-top border-4 border-slide-accent/30 shadow-xl"
            />
          </div>
          
          <div className="flex-1 space-y-4 text-slide-text-light animate-fade-in">
            <p className="text-sm md:text-base leading-relaxed">
              Sou <span className="text-slide-accent font-medium">Fernanda Alfaro</span>, e trabalho há mais de 15 anos com gestão financeira, contábil e administrativa — em empresas brasileiras e multinacionais, como a Skechers.
            </p>
            
            <p className="text-sm md:text-base leading-relaxed">
              Minha experiência inclui planejamento financeiro, controle de fluxo de caixa, implantação de sistemas e muito contato direto com os desafios reais de quem empreende.
            </p>
            
            <p className="text-sm md:text-base leading-relaxed">
              Criei o <span className="text-slide-accent font-medium">Finapp AFV (Assistente Financeiro Virtual)</span> para ajudar empresas a terem clareza, organização e segurança nas finanças — sem complicação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
