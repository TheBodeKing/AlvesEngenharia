import { fundoImg, logoImg } from "../utils";

const header = () => {
  return (
    <header className="w-full relative h-[210px] flex justify-between">
      <img
        src={fundoImg}
        alt="Fundo"
        className="absolute top-0 left-0 h-[210px] z-0 w-full"
      />
      <nav className="flex w-full py-5 px-5 items-center justify-center relative z-10">
        <img
          src={logoImg}
          alt="Logo"
          className=" absolute left-60 w-[150px] h-[150px] "
        />
        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-bold">Alves Engenharia</h1>
          <h2 className="text-2xl mt-5">Soluções em engenharia elétrica</h2>
        </div>
      </nav>
    </header>
  );
};

export default header;
