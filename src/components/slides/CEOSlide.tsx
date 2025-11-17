import fernandaPhoto from "@/assets/fernanda-alfaro.jpg";

const CEOSlide = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8 md:px-16 py-12">
      <h1 className="text-4xl md:text-5xl font-light text-slide-text mb-12 text-center">
        Sobre a CEO
      </h1>

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img 
            src={fernandaPhoto} 
            alt="Fernanda Alfaro - CEO Finapp BPO Financeiro" 
            className="w-48 h-48 rounded-full object-cover border-4 border-slide-accent/30 shadow-xl animate-scale-in"
          />
        </div>
        
        <div className="flex-1 space-y-4 text-slide-text-light animate-fade-in">
          <p className="text-base leading-relaxed">
            Sou <span className="text-slide-accent font-medium">Fernanda Alfaro</span>, profissional com mais de 15 anos de experiência nas áreas financeira, contábil e administrativa, com atuação em empresas nacionais e multinacionais como a Skechers, referência global no setor esportivo.
          </p>
          
          <p className="text-base leading-relaxed">
            Possuo sólida vivência em planejamento e controle financeiro, gestão de fluxo de caixa e implantação de sistemas ERP, sempre com foco em eficiência, clareza e resultados.
          </p>
          
          <p className="text-base leading-relaxed">
            Após sete anos de experiência internacional na Espanha, trago uma visão ampla e estratégica para apoiar empreendedores e empresas na organização e crescimento de seus negócios por meio da Finapp BPO Financeiro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CEOSlide;
