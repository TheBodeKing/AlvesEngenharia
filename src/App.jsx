import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import { useState } from "react";
import Rodape from "./components/Rodape";
import AnimatedSection from "./components/AnimatedSection";

const App = () => {
  const [ativo, setAtivo] = useState("inicio");

  return (
    <main className="relative overflow-hidden h-[100vh]">
      <Header />
      <Navbar onSelect={setAtivo} active={ativo} />

      <AnimatedSection show={ativo === "inicio"}>
        <Inicio />
      </AnimatedSection>

      <AnimatedSection show={ativo === "servico"}>
        <Servicos />
      </AnimatedSection>

      <AnimatedSection show={ativo === "sobre"}>
        <Sobre />
      </AnimatedSection>

      <AnimatedSection show={ativo === "contato"}>
        <Contato />
      </AnimatedSection>

      <Rodape />
    </main>
  );
};

export default App;
