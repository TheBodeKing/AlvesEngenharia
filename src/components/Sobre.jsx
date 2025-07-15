import { phc } from "../constants";
import { sobreImg } from "../utils";

const Sobre = ({ forRef }) => {
  return (
    <section
      id="sobre"
      className="w-full h-full sm:h-[80%] "
      ref={(el) => {
        forRef.current["sobre"] = el;
      }}
    >
      <div className="flex flex-col items-center p-5 justify-center">
        <h1 className="text-2xl sm:text-5xl font-bold">Sobre nós</h1>
        <div
          className="flex relative w-full sm:w-[80%] flex-col-reverse sm:flex-row p-5 sm:p-20
         justify-between items-center"
        >
          <div className="flex flex-col gap-8 w-full sm:mt-0 mt-10 sm:w-[60%]">
            <p>{phc}</p>
            <p>{phc}</p>
            <p>{phc}</p>
          </div>
          <div className="flex relative">
            <img src={sobreImg} alt="Sobre " className="h-[180px] w-[240px]" />
            <h2
              className="absolute top-0 left-0 w-[240px] p-2 sm:p-3 
            text-center bg-black text-white"
            >
              Titulo da imagem
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
