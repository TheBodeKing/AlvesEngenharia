import { fundoImgHd, logoImg } from "../utils";

const Header = () => {
  return (
    <header className="w-full relative h-[260px] sm:h-[210px] flex justify-center">
      <img
        src={fundoImgHd}
        alt="Imagem de fundo de cabeçalho"
        className="absolute top-0 left-0 h-[260px] sm:h-[210px] z-0 w-full"
      />
      <div
        className="flex flex-col sm:flex-row w-full py-5 px-5
       items-center justify-center relative z-10"
      >
        <img
          src={logoImg}
          alt="Logotipo da Alves Engenharia"
          className="w-[100px] h-[100px] relative
           logo-especial sm:w-[150px] sm:h-[150px] "
        />
        <div className="flex flex-col items-center mt-5 mx-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl roboto-grosso">
            Alves Engenharia
          </h1>
          <h2 className="text-xl sm:text-2xl mt-4 roboto-fino">
            Soluções em engenharia elétrica
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
