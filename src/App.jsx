import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import { useState } from "react";

const App = () => {
  const [ativo, setAtivo] = useState("inicio");

  return (
    <main>
      <Header />
      <Navbar onSelect={setAtivo} active={ativo} />
      {ativo === "inicio" && <Inicio />}
      {ativo === "servico" && <Servicos />}
      {ativo === "sobre" && <Sobre />}
      {ativo === "contato" && <Contato />}
    </main>
  );
};

export default App;
