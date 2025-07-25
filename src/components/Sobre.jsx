//import { phc } from "../constants";
import { sobreImg } from "../utils";

//<div className="flex relative">
//            <img src={sobreImg} alt="Sobre " className="h-[180px] w-[240px]" />
//            <h2
//             className="absolute top-0 left-0 w-[240px] p-2 sm:p-3
//           text-center bg-black text-white"
//           >
//             Titulo da imagem
//           </h2>
//        </div>

const Sobre = ({ forRef }) => {
  return (
    <section
      id="sobre"
      className="w-full min-h-screen "
      ref={(el) => {
        forRef.current["sobre"] = el;
      }}
    >
      <div className="flex w-full flex-col items-center p-5 justify-center">
        <h1 className="text-2xl mb-5 sm:text-5xl roboto-grosso">Sobre nós</h1>
        <div
          className="flex relative w-full sm:w-[60%] flex-col p-5 sm:p-20
         justify-between items-center sm:mt-0 mt-10 rubik-mr gap-8"
        >
          <img
            src={sobreImg}
            alt="Sobre "
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="inset-0 absolute bg-white/50" />
          <p className="z-10">
            Apaixonados por precisão e movidos pela inovação, nossa missão é
            fornecer soluções elétricas de alta qualidade que atendam às
            necessidades únicas de cada projeto. Seja uma instalação residencial
            ou um sistema comercial de grande porte, trazemos experiência,
            conhecimento técnico e atenção aos detalhes para cada projeto.
          </p>
          <p className="z-10">
            Com anos de experiência prática na área, somos especializados em
            projetar, planejar e executar sistemas elétricos eficientes e
            seguros. Nosso trabalho é guiado pelos padrões da indústria, mas
            também moldado por um compromisso com a inovação — aplicando
            técnicas e tecnologias modernas para alcançar melhores resultados.
          </p>
          <p className="z-10">
            Do conceito à inspeção final, nos dedicamos a oferecer comunicação
            clara, entrega pontual e resultados duradouros. Nosso foco não é
            apenas energizar edifícios, mas também construir confiança por meio
            de profissionalismo, integridade e serviço de qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
