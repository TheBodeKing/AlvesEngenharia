/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { navLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Navbar = ({ targRef }) => {
  const [ativo, setAtivo] = useState();
  const anteriorRef = useRef(null);

  useGSAP(() => {
    const antes = anteriorRef.current;
    console.log(antes);

    if (antes === undefined) {
      anteriorRef.current = targRef.current["inicio"];
      gsap.to(anteriorRef.current, {
        display: "none",
      });
      console.log("primeira funçaõ");
    }

    if (antes && targRef.current[ativo]) {
      gsap.to(antes, {
        display: "none",
      });
      console.log("segunda funcao");
    }

    if (ativo && antes !== targRef.current[ativo] && targRef.current[ativo]) {
      gsap.to(targRef.current[ativo], {
        display: "block",
      });
      console.log("terceira");
    }

    anteriorRef.current = targRef.current[ativo];
  }, [ativo]);

  return (
    <nav
      className="w-full py-7 px-10 sm:flex hidden 
    justify-between items-center relative special-gothic-expanded-one-regular "
    >
      <div className="flex flex-1 justify-center gap-20">
        {navLists.map(({ nome, id }) => (
          <div
            key={id}
            className="inline-block px-4 py-2 cursor-pointer text-xl sm:text-2xl hover:text-white
             hover:bg-black rounded-xl transition-al"
            onClick={() => {
              setAtivo(id);
            }}
          >
            {nome}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
