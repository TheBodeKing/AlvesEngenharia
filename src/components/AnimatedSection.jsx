import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedSection = ({ show, children }) => {
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

  return <div ref={sectionRef}>{children}</div>;
};

export default AnimatedSection;
