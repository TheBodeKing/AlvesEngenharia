import { useEffect, useRef, useState } from "react";
import { navLists } from "../constants";
import { gsap } from "gsap";

const Navbar = ({ targRef }) => {
  const [ativo, setAtivo] = useState("inicio");
  const anteriorRef = useRef(null);
  const [btn, setBtn] = useState(false);
  const navRef = useRef();
  const isAnimating = useRef(false);

  useEffect(() => {
    if (window.innerWidth < 640) {
      navRef.current.classList.remove("nav-pc");
      navRef.current.classList.add("hidden");
    } else {
      navRef.current.classList.remove("hidden");
      navRef.current.classList.add("nav-pc");
    }

    if (btn) {
      navRef.current.classList.remove("hidden");
      navRef.current.classList.add("nav-mobile");
    } else {
      navRef.current.classList.add("hidden");
      navRef.current.classList.remove("nav-mobile");
    }
  }, [btn]);

  useEffect(() => {
    if (isAnimating.current) return;

    const antes = anteriorRef.current;
    const proximo = targRef.current[ativo];

    if (!antes) {
      isAnimating.current = true;
      anteriorRef.current = targRef.current["inicio"];
      Object.values(targRef.current).forEach((el) => {
        if (el && el !== targRef.current["inicio"]) {
          gsap.set(el, {
            display: "none",
            opacity: 0,
            onComplete: () => {
              isAnimating.current = false;
            },
          });
        }
      });
      return;
    }

    if (antes && ativo && antes !== proximo) {
      isAnimating.current = true;
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
        duration: 0.6,
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
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            isAnimating.current = false;
          },
        }
      );
    }

    if (ativo) {
      anteriorRef.current = targRef.current[ativo];
    }
  }, [ativo]);

  return (
    <div>
      <button
        aria-label="Menu"
        className="fixed top-4 right-4 sm:hidden z-30 
             flex items-center justify-center 
             w-8 h-8 rounded-xl
             bg-white text-black text-xl 
             shadow-md hover:bg-gray-100 transition-all duration-300"
        onClick={() => {
          setBtn((prev) => !prev);
        }}
      >
        {!btn ? "☰" : "X"}
      </button>
      <nav ref={navRef}>
        {navLists.map(({ nome, id }) => (
          <div
            key={id}
            className={`inline-block px-4 py-2 sm:mx-5 cursor-pointer text-xl sm:text-2xl hover:text-white
             hover:bg-gray-900 rounded-xl transition-all roboto-grosso-maior ${
               id === ativo ? "bg-black text-white" : ""
             }`}
            onClick={() => {
              {
                if (isAnimating.current) return;
                setAtivo(id);
                if (window.innerWidth < 640) {
                  setBtn(false);
                }
              }
            }}
          >
            {nome}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
