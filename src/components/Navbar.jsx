import React from "react";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <nav
      className="w-full py-7 px-10 sm:flex hidden 
    justify-between items-center relative"
    >
      <div className="flex flex-1 justify-center gap-20">
        {navLists.map((item) => (
          <div
            key={item}
            className="inline-block px-4 py-2 cursor-pointer text-xl sm:text-2xl hover:text-white
             hover:bg-black rounded-xl transition-al"
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
