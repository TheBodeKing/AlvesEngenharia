import { logoImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full  h-[210px] border border-black flex justify-between">
      <nav className="flex w-full py-5 px-5 items-center justify-center relative">
        <img
          src={logoImg}
          alt="Logo"
          className=" absolute left-60 w-[150px] h-[150px] "
        />
        <div className="flex flex-col items-center border border-black">
          <h1 className="text-7xl font-bold">Alves Engenharia</h1>
          <h2 className="text-2xl mt-5">Soluções em engenharia elétrica</h2>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
