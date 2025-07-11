import { useEffect, useRef, useState } from "react";
import { navLists } from "../constants";
import { gsap } from "gsap";

const Navbar = ({ targRef }) => {
  const [ativo, setAtivo] = useState("inicio");
  const anteriorRef = useRef(null);

  useEffect(() => {
    const antes = anteriorRef.current;
    const proximo = targRef.current[ativo];

    if (!antes) {
      anteriorRef.current = targRef.current["inicio"];
      Object.values(targRef.current).forEach((el) => {
        if (el && el !== targRef.current["inicio"]) {
          gsap.set(el, { display: "none", opacity: 0 });
        }
      });
      return;
    }

    if (antes && ativo && antes !== proximo) {
      gsap.set(antes, {
        position: "absolute",
        top: 0,
        left: 0,
      });
      gsap.to(antes, {
        top: 0,
        left: 0,
        x: "-100%",
        opacity: 0,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(antes, { display: "none", x: 0, position: "static" });
        },
      });
      gsap.set(proximo, { display: "block", x: "100%" });
      gsap.to(
        proximo,

        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }

    if (ativo) {
      anteriorRef.current = targRef.current[ativo];
    }
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
            className={`inline-block px-4 py-2 cursor-pointer text-xl sm:text-2xl hover:text-white
             hover:bg-gray-900 rounded-xl transition-all ${
               id === ativo ? "bg-black text-white" : ""
             }`}
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
