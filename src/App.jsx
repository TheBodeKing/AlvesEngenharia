import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import { useRef, useState } from "react";
import Rodape from "./components/Rodape";

const App = () => {
  const appRef = useRef({});
  const [btnInicio, setBtnInicio] = useState(false);

  return (
    <main className="bg-blue-100">
      <Header />
      <Navbar
        targRef={appRef}
        btnInicioFor={btnInicio}
        btnInicioSet={setBtnInicio}
      />
      <div className="w-full h-auto relative overflow-hidden">
        <Inicio forRef={appRef} btnInicioTarg={setBtnInicio} />

        <Servicos forRef={appRef} />

        <Sobre forRef={appRef} />

        <Contato forRef={appRef} />
      </div>
      <Rodape />
    </main>
  );
};

export default App;
