import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";

const App = () => {
  return (
    <main>
      <Header />
      <Navbar />
      <Inicio />
      <Servicos />
      <Sobre />
      <Contato />
    </main>
  );
};

export default App;
