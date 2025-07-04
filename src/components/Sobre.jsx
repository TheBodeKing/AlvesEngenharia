import { phc } from "../constants";
import { sobreImg } from "../utils";

const Sobre = () => {
  return (
    <section id="sobre" className="w-full h-[80%]">
      <div className="flex items-center justify-center">
        <div className="flex relative w-[80%] flex-row p-20 justify-between items-center">
          <div className="flex flex-col gap-8 w-[60%]">
            <p>{phc}</p>
            <p>{phc}</p>
            <p>{phc}</p>
          </div>
          <div className="flex relative">
            <img src={sobreImg} alt="Sobre " className="h-[180px] w-[240px]" />
            <h2 className="absolute top-0 left-0 w-[240px] p-3 text-center bg-black text-white">
              Titulo da imagem
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
