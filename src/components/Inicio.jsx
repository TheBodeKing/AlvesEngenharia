import { fundoImgIn1, fundoImgIn2, setaLImg, setaRImg } from "../utils";
import { phc } from "../constants";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Inicio = () => {
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
      className="
  w-full h-[140vh] bg-teal-100"
    >
      <div className="w-full h-[100vh] bg-teal-300 ">
        <div className="w-full relative h-[100vh] bg-green-200 justify-center flex">
          <button onClick={handleClick}>
            <img
              src={setaLImg}
              alt="Seta"
              className="absolute top-1/2 -translate-y-1/2 left-10 w-[60-px] h-[60px] z-20"
            />
          </button>
          <button onClick={handleClick}>
            <img
              src={setaRImg}
              alt="Seta"
              className="absolute top-1/2 -translate-y-1/2 right-10 w-[60-px] h-[60px] z-20"
            />
          </button>
          <div
            ref={divServico}
            className=" flex absolute top-0 left-0 w-full h-full overflow-hidden items-center justify-center z-10"
          >
            <img
              src={fundoImgIn1}
              alt="Imagem de fundo"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <h2 className="font-bold text-6xl relative bottom-35 right-60 border border-black">
              Serviços
            </h2>
            <p className="border relative border-black w-[620px] bottom-30 right-30 text-3xl text-justify">
              {phc}
            </p>
            <button
              className="rounded-full bg-black text-white text-xl
            hover:text-black hover:bg-white transition-all px-3 py-3 cursor-pointer hover:scale-110"
            >
              Veja os nossos serviços
            </button>
          </div>
          <div
            ref={divSobre}
            className=" flex absolute top-0 left-0 w-full h-full overflow-hidden items-center justify-center z-10"
          >
            <img
              src={fundoImgIn2}
              alt="Imagem de fundo"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <h2 className="font-bold text-6xl relative bottom-35 right-60 border border-black">
              Sobre
            </h2>
            <ul className=" list-disc ml-5 border relative border-black w-[620px] bottom-30 right-30 text-3xl text-justify">
              <li>Ponto 1</li>
              <li>Ponto 2</li>
              <li>Ponto 3</li>
              <li>Ponto 4</li>
            </ul>
            <button
              className="rounded-full bg-black text-white text-xl
            hover:text-black hover:bg-white transition-all px-3 py-3 cursor-pointer hover:scale-110"
            >
              Veja mais sobre
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
