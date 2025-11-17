import finappLogo from "@/assets/finapp-logo.png";

const CoverSlide = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8">
      <img src={finappLogo} alt="Finapp AFV (Assistente Financeiro Virtual)" className="w-full max-w-xs mb-12 animate-scale-in" />
      <h1 className="text-3xl md:text-4xl text-center text-slide-text font-light max-w-3xl leading-relaxed animate-fade-in mb-6">
        Pare de perder tempo com o financeiro. <br />
        <span className="text-slide-accent font-medium">A Finapp cuida disso para você.</span>
      </h1>
      <p className="text-lg md:text-xl text-center text-slide-text-light max-w-2xl leading-relaxed animate-fade-in">
        Delegue toda a rotina financeira da sua empresa — contas a pagar, a receber, conciliação e relatórios — com segurança e previsibilidade.
      </p>
    </div>
  );
};

export default CoverSlide;
