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
      // Animate back to div1
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
      className="w-full h-[180vh] hidden"
      ref={(el) => {
        forRef.current["inicio"] = el;
      }}
    >
      <div className="w-full h-[100vh]">
        <div className="w-full relative h-[100vh] justify-center flex">
          <button onClick={handleClick}>
            <img
              src={setaLImg}
              alt="Seta"
              className="absolute top-1/2 -translate-y-1/2 left-10 w-[60-px] h-[60px] z-20 cursor-pointer"
            />
          </button>
          <button onClick={handleClick}>
            <img
              src={setaRImg}
              alt="Seta"
              className="absolute top-1/2 -translate-y-1/2 right-10 w-[60-px] h-[60px] z-20 cursor-pointer"
            />
          </button>
          <div
            ref={divServico}
            className=" flex flex-col absolute top-0 left-0 w-full h-full overflow-hidden items-left px-40 justify-center z-10"
          >
            <img
              src={fundoImgIn1}
              alt="Imagem de fundo"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <h2 className="font-bold text-6xl relative mb-20 ">Serviços</h2>
            <p className=" relative w-[620px] ml-10 text-3xl text-justify">
              {phc}
            </p>
            <a
              className="rounded-full relative w-fit px-4 py-2 ml-10 mt-25 bg-black text-white text-xl
            hover:text-black hover:bg-white transition-all z-20 cursor-pointer hover:scale-110"
            >
              Veja os nossos serviços
            </a>
          </div>
          <div
            ref={divSobre}
            className=" flex flex-col absolute top-0 left-0 w-full h-full overflow-hidden items-left px-40 justify-center z-10"
          >
            <img
              src={fundoImgIn2}
              alt="Imagem de fundo"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <h2 className="font-bold text-6xl relative mb-15 ">Sobre</h2>
            <ul className=" list-disc relative w-[620px] ml-30 text-3xl text-justify">
              <li>Ponto 1</li>
              <li>Ponto 2</li>
              <li>Ponto 3</li>
              <li>Ponto 4</li>
            </ul>
            <a
              className="rounded-full relative w-fit px-4 py-2 ml-25 mt-20 bg-black text-white text-xl
            hover:text-black hover:bg-white transition-all z-20 cursor-pointer hover:scale-110"
            >
              Veja mais sobre nós
            </a>
          </div>
        </div>
      </div>
      <div className=" flex py-15 px-20 w-full h-[80vh] flex-col items-center justify-between">
        <div className="flex  w-[630px] text-2xl font-bold text-justify">
          <h2>{phc}</h2>
        </div>
        <div className="flex relative flex-row w-full libertinus-mono-regular px-30 text-xl items-center justify-between">
          <div className="flex flex-col items-center p-5 gap-5">
            <img src={pontoImg} alt="Localização" width={60} height={90} />
            <p>Perto de você</p>
          </div>
          <div className="flex flex-col items-center p-5 gap-5">
            <img src={estrelaImg} alt="Qualidade" width={60} height={90} />
            <p>Qualidade garantida</p>
          </div>
          <div className="flex flex-col items-center p-5 gap-5">
            <img src={dinheiroImg} alt="Preço" width={60} height={90} />
            <p>Preço acessível</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
