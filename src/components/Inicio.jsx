import {
  dinheiroImg,
  estrelaImg,
  fundoImgIn1,
  fundoImgIn2,
  pontoImg,
  setaLImg,
  setaRImg,
} from "../utils";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Inicio = ({ forRef }) => {
  const divSobre = useRef();
  const divServico = useRef();
  const [atualRef, setAtualRef] = useState(false);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (isAnimating.current) return;

    if (atualRef === divServico) {
      isAnimating.current = true;
      gsap.to(divSobre.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        divServico.current,
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            isAnimating.current = false;
          },
        }
      );
    }
    if (atualRef === divSobre) {
      isAnimating.current = true;
      gsap.to(divServico.current, {
        x: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        divSobre.current,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            isAnimating.current = false;
          },
        }
      );
    }
  }, [atualRef]);

  return (
    <section
      id="inicio"
      className="w-full min-h-screen"
      ref={(el) => {
        forRef.current["inicio"] = el;
      }}
    >
      <div className="w-full min-h-screen">
        <div className="w-full relative min-h-screen justify-center flex">
          <button
            aria-label="Mostrar próximo conteúdo"
            onClick={() =>
              atualRef === divSobre
                ? setAtualRef(divServico)
                : setAtualRef(divSobre)
            }
            className="bg-gray-200 p-2 z-20
          absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 rounded-full cursor-pointer
          hover:scale-110 hover:bg-gray-300 hover:shadow transition-all"
          >
            <img
              src={setaLImg}
              alt="Seta para navegar entre seções"
              className=" w-[20px]
               sm:w-[50px] h-[20px] sm:h-[50px] "
            />
          </button>
          <button
            aria-label="Mostrar próximo conteúdo"
            onClick={() => {
              if (isAnimating.current) return;
              atualRef === divSobre
                ? setAtualRef(divServico)
                : setAtualRef(divSobre);
            }}
            className="bg-gray-200 p-2 z-20
          absolute top-1/2 -translate-y-1/2 right-3 sm:right-10  rounded-full  cursor-pointer
          hover:scale-110 hover:bg-gray-300 hover:shadow transition-all"
          >
            <img
              src={setaRImg}
              alt="Seta para navegar entre seções"
              className=" w-[20px]
               sm:w-[50px] h-[20px] sm:h-[50px] "
            />
          </button>
          <div
            ref={divServico}
            className=" flex flex-col absolute top-0 left-0 w-full h-full
            overflow-hidden items-left py-5 sm:py-100 px-5 sm:px-40 justify-between sm:justify-center z-10"
          >
            <img
              src={fundoImgIn1}
              alt="Imagem de fundo"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="inset-0 absolute bg-blue-200/70" />
            <h2 className="font-bold text-4xl sm:text-6xl relative mt-10 ml-5 sm:ml-10 sm:mb-20 roboto-grosso">
              Serviços
            </h2>
            <p className="rubik-mr relative w-[280px] sm:w-[620px] ml-11 bottom-10 sm:ml-15 text-xl sm:text-3xl text-justify">
              Prestamos serviços de instalação, planejamento e desenvolvimento
              de sistemas elétricos de prédios, casas, fábricas e variados tipos
              de estruturas. Supervisionamos a instalação de sistemas conforme
              as normas de segurança e qualidade. Manutenção, diagnóstico e
              solução de problemas envolvendo sistemas elétricos.
            </p>
            <a
              className="rounded-full relative w-fit px-4 py-2 ml-5 bottom-10 sm:ml-10 mb-10 sm:mt-25
               bg-black text-white text-xl rubik-mr
            hover:text-black hover:bg-white transition-all z-20 
            cursor-pointer hover:scale-110"
            >
              Veja os nossos serviços
            </a>
          </div>
          <div
            ref={divSobre}
            className="flex flex-col absolute top-0 left-0
             w-full h-full overflow-hidden items-left py-5 sm:py-100 px-10 sm:px-40 
             justify-center z-10 opacity-0 "
          >
            <img
              src={fundoImgIn2}
              alt="Imagem de fundo"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="inset-0 absolute bg-blue-200/70" />
            <h2 className="text-5xl sm:text-6xl relative mb-10 sm:mb-15 roboto-grosso ">
              Sobre
            </h2>
            <ul
              className=" list-disc flex flex-col relative w-[280px] sm:w-[620px] ml-20 sm:ml-30 
            text-2xl sm:text-3xl text-justify rubik-mr gap-4"
            >
              <li>16 anos de experiência na área</li>
              <li>Licenciado e certificado, registrado no CREA</li>
              <li>Compromissado, confiável, transparente e detalhista</li>
              <li>Disponibilidade para viajar e consultorias remotas</li>
            </ul>
            <a
              className="rounded-full relative w-fit px-4 py-2 ml-5 sm:ml-25 
              mt-10 sm:mt-20 bg-black text-white text-xl rubik-mr
            hover:text-black hover:bg-white transition-all z-20 cursor-pointer hover:scale-110"
            >
              Veja mais sobre nós
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex py-5 sm:py-15 px-5 sm:px-20 w-full  sm:h-[70vh]
       flex-col items-center justify-between"
      >
        <div className="flex w-[320px] sm:w-[630px] mt-10 text-xl sm:text-2xl rubik-mr font-bold text-justify">
          <h2>
            Dando vida a soluções elétricas inteligentes e confiáveis. Com foco
            em segurança, eficiência e inovação, oferecemos serviços de alta
            qualidade adaptados às necessidades do projeto à execução.
          </h2>
        </div>
        <div
          className="flex relative flex-col sm:flex-row w-full rubik-mr
          px-10 sm:px-30 text-xl items-center justify-between bottom-10 mt-25 sm:mt-0"
        >
          <div className="flex text-lg sm:text-xl flex-col items-center p-3 sm:p-5 gap-3 sm:gap-5">
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
