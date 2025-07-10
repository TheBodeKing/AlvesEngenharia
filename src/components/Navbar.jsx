import { useEffect, useRef, useState } from "react";
import { navLists } from "../constants";
import { gsap } from "gsap";

const Navbar = ({ targRef }) => {
  const [ativo, setAtivo] = useState();
  const anteriorRef = useRef(null);

  useEffect(() => {
    const antes = anteriorRef.current;
    const proximo = targRef.current[ativo];

    if (!antes && ativo === "inicio") {
      anteriorRef.current = proximo;
      gsap.set(anteriorRef.current, { display: "block", opacity: 1, x: 0 });
      return;
    }

    if (antes && proximo && proximo !== antes) {
      // Animate old one out
      gsap.to(antes, {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          gsap.set(antes, { display: "none", x: 0 }); // Reset position for reuse
          // After old is gone, animate new one in
          gsap.set(proximo, { display: "block", x: "100%", opacity: 0 });
          gsap.to(proximo, {
            x: 0,
            opacity: 1,
            duration: 0.8,
          });
        },
      });
    }

    anteriorRef.current = proximo;
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
