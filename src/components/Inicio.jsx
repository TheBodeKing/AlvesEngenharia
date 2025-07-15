import {
  dinheiroImg,
  estrelaImg,
  fundoImgIn1,
  fundoImgIn2,
  pontoImg,
  setaLImg,
  setaRImg,
} from "../utils";
import { phc } from "../constants";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Inicio = ({ forRef }) => {
  const divSobre = useRef();
  const divServico = useRef();
  const [mostrarProxima, setMostrarProxima] = useState(false);

  useEffect;

  const handleClick = () => {
    if (!mostrarProxima) {
      gsap.to(divSobre.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        divServico.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power2.inOut" }
      );
    } else {
      gsap.to(divServico.current, {
        x: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        divSobre.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power2.inOut" }
      );
    }

    setMostrarProxima((prev) => !prev);
  };

  return (
    <section
      id="inicio"
      className="w-full h-[140vh] sm:h-[180vh]"
      ref={(el) => {
        forRef.current["inicio"] = el;
      }}
    >
      <div className="w-full h-[60vh] sm:h-[100vh]">
        <div className="w-full relative h-[60vh] sm:h-[100vh] justify-center  flex">
          <button
            onClick={handleClick}
            className="bg-gray-200 p-2 z-20
          absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 rounded-full "
          >
            <img
              src={setaLImg}
              alt="Seta"
              className=" w-[20px]
               sm:w-[60-px] h-[20px] sm:h-[60px] cursor-pointer"
            />
          </button>
          <button
            onClick={handleClick}
            className="bg-gray-200 p-2 z-20
          absolute top-1/2 -translate-y-1/2 right-3 sm:right-10  rounded-full "
          >
            <img
              src={setaRImg}
              alt="Seta"
              className=" w-[20px]
               sm:w-[60-px] h-[20px] sm:h-[60px] cursor-pointer"
            />
          </button>
          <div
            ref={divServico}
            className=" flex flex-col absolute top-0 left-0 w-full h-full 
            overflow-hidden items-left px-5 sm:px-40 justify-between sm:justify-center z-10"
          >
            <img
              src={fundoImgIn1}
              alt="Imagem de fundo"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <h2 className="font-bold text-4xl sm:text-6xl relative mt-10 ml-5 sm:ml-10 sm:mb-20 ">
              Serviços
            </h2>
            <p className=" relative w-[280px] sm:w-[620px] ml-11 bottom-10 sm:ml-10 text-xl sm:text-3xl text-justify">
              {phc}
            </p>
            <a
              className="rounded-full relative w-fit px-4 py-2 ml-5 bottom-10 sm:ml-10 mb-10 sm:mt-25
               bg-black text-white text-xl
            hover:text-black hover:bg-white transition-all z-20 
            cursor-pointer hover:scale-110"
            >
              Veja os nossos serviços
            </a>
          </div>
          <div
            ref={divSobre}
            className="flex flex-col absolute top-0 left-0
             w-full h-full overflow-hidden items-left px-10 sm:px-40 
             justify-center z-10"
          >
            <img
              src={fundoImgIn2}
              alt="Imagem de fundo"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <h2 className="font-bold text-5xl sm:text-6xl relative mb-10 sm:mb-15 ">
              Sobre
            </h2>
            <ul
              className=" list-disc relative w-[280px] sm:w-[620px] ml-20 sm:ml-30 
            text-2xl sm:text-3xl text-justify"
            >
              <li>Ponto 1</li>
              <li>Ponto 2</li>
              <li>Ponto 3</li>
              <li>Ponto 4</li>
            </ul>
            <a
              className="rounded-full relative w-fit px-4 py-2 ml-5 sm:ml-25 
              mt-10 sm:mt-20 bg-black text-white text-xl
            hover:text-black hover:bg-white transition-all z-20 cursor-pointer hover:scale-110"
            >
              Veja mais sobre nós
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex py-5 sm:py-15 px-5 sm:px-20 w-full h-[80vh]
       flex-col items-center justify-between"
      >
        <div className="flex w-[320px] sm:w-[630px] text-xl sm:text-2xl font-bold text-justify">
          <h2>{phc}</h2>
        </div>
        <div
          className="flex relative flex-col sm:flex-row w-full libertinus-mono-regular
          px-10 sm:px-30 text-xl items-center justify-between bottom-10 sm:mt-0"
        >
          <div className="flex text-lg sm:text-xl flex-col items-center p-3 sm:p-5 gap-2 sm:gap-5">
            <img
              src={pontoImg}
              className="w-[60px] h-[60px]"
              alt="Localização"
            />
            <p>Perto de você</p>
          </div>
          <div className="flex text-lg sm:text-xl  flex-col items-center p-3 sm:p-5 gap-2 sm:gap-5">
            <img
              src={estrelaImg}
              alt="Qualidade"
              className="w-[60px] h-[60px]"
            />
            <p>Qualidade garantida</p>
          </div>
          <div className="flex text-lg sm:text-xl flex-col items-center p-3 sm:p-5 gap-2 sm:gap-5">
            <img src={dinheiroImg} alt="Preço" className="w-[60px] h-[60px]" />
            <p>Preço acessível</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
