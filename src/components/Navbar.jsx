import { navLists } from "../constants";

const Navbar = ({ onSelect, active }) => {
  return (
    <nav
      className="w-full py-7 px-10 sm:flex hidden 
    justify-between items-center relative"
    >
      <div className="flex flex-1 justify-center gap-20">
        {navLists.map(({ nome, id }) => (
          <div
            key={id}
            onClick={() => onSelect(id)}
            className="inline-block px-4 py-2 cursor-pointer text-xl sm:text-2xl hover:text-white
             hover:bg-black rounded-xl transition-al"
          >
            {nome}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
