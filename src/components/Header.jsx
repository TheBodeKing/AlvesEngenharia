import { fundoImgHd, logoImg } from "../utils";

const header = () => {
  return (
    <header className="w-full relative h-[250px] sm:h-[210px] flex justify-center">
      <img
        src={fundoImgHd}
        alt="Fundo"
        className="absolute top-0 left-0 h-[250px] sm:h-[210px] z-0 w-full"
      />
      <div className="flex flex-col sm:flex-row w-full py-5 px-5 items-center justify-center relative z-10">
        <img
          src={logoImg}
          alt="Logo"
          className="  w-[100px] h-[100px] relative
           logo-especial sm:w-[150px] sm:h-[150px] "
        />
        <div className="flex flex-col items-center mx-5">
          <h1 className="text-5xl sm:text-7xl font-bold whitespace-nowrap">
            Alves Engenharia
          </h1>
          <h2 className="text-xl sm:text-2xl mt-5">
            Soluções em engenharia elétrica
          </h2>
        </div>
      </div>
    </header>
  );
};

export default header;
