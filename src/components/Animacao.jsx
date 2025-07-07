import { useEffect, useRef } from "react";
import gsap from "gsap";

const Animacao = ({ show, children }) => {
  const sectionRef = useRef();

  useEffect(() => {
    if (show) {
      // Animate in from right
      gsap.fromTo(
        sectionRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    } else {
      // Animate out to left
      gsap.to(sectionRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
    }
  }, [show]);

  return (
    <div
      ref={sectionRef}
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        display: show ? "block" : "none",
      }}
    >
      {children}
    </div>
  );
};

export default Animacao;
