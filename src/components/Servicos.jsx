import { phc, pht } from "../constants";
import {
  servico1Img,
  servico2Img,
  servico3Img,
  servico4Img,
  servico5Img,
} from "../utils";

const Servicos = ({ forRef }) => {
  return (
    <section
      id="servico"
      className="w-full h-full sm:h-[150vh]"
      ref={(el) => {
        forRef.current["servico"] = el;
      }}
    >
      <div className="flex flex-col items-center justify-between p-5 sm:p-15">
        <h1 className="text-2xl sm:text-5xl">O melhor serviço da área</h1>
        <h2 className="text-xl sm:text-3xl mt-5">{pht}</h2>
        <div
          className="flex w-full flex-col gap-0 sm:gap-5 p-5 sm:p-10 
        justify-between items-center"
        >
          <div className="flex flex-col sm:flex-row w-full justify-between items-center">
            <div className="flex flex-col items-center justify-center p-5 sm:p-10 gap-3">
              <img src={servico1Img} alt="Servico" height={40} width={50} />
              <h2 className="text-lg">{pht}</h2>
              <p className="text-sm">{phc}</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 sm:p-10 gap-3">
              <img src={servico2Img} alt="Servico" height={40} width={50} />
              <h2 className="text-lg">{pht}</h2>
              <p className="text-sm"> {phc}</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 sm:p-10 gap-3">
              <img src={servico3Img} alt="Servico" height={40} width={50} />
              <h2 className="text-lg">{pht}</h2>
              <p className="text-sm">{phc}</p>
            </div>
          </div>
          <div className="sm:w-[66%] w-full flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col items-center justify-center p-5 sm:p-10 gap-3 ">
              <img src={servico4Img} alt="Servico" height={40} width={50} />
              <h2 className="text-lg">{pht}</h2>
              <p className="text-sm">{phc}</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 sm:p-10 gap-3 ">
              <img src={servico5Img} alt="Servico" height={40} width={50} />
              <h2 className="text-lg">{pht}</h2>
              <p className="text-sm">{phc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
