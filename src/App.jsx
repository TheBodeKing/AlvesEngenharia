import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import { useRef } from "react";
import Rodape from "./components/Rodape";

const App = () => {
  const appRef = useRef({});

  return (
    <main>
      <Header />
      <Navbar targRef={appRef} />

      <Inicio forRef={appRef} />

      <Servicos forRef={appRef} />

      <Sobre forRef={appRef} />

      <Contato forRef={appRef} />

      <Rodape />
    </main>
  );
};

export default App;
