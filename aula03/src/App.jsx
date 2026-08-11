import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import MinasGerais from "./paginas/MinasGerais";
import EspiritoSanto from "./paginas/EspiritoSanto";
import RioJaneiro from "./paginas/RioJaneiro";
import Parana from "./paginas/Parana";
import RioGrandedoSul from "./paginas/RioGrandedoSul";
import SantaCatarina from "./paginas/SantaCatarina";
import Goias from "./paginas/Goias";
import DistritoFederal from "./paginas/DistritoFederal";
import MatoGrosso from "./paginas/MatoGrosso";
import MatoGrossodoSul from "./paginas/MatoGrossodoSul";
import Acre from "./paginas/Acre";
import Amapa from "./paginas/Amapa";
import Amazonas from "./paginas/Amazonas";
import Acre from "./paginas/Acre";
import Acre from "./paginas/Acre";
import Acre from "./paginas/Acre";
import Acre from "./paginas/Acre";







export default function App()
{
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/estados/sp" element={<SaoPaulo />} />
     <Route path="/estados/mg" element={<MinasGerais />} />
      <Route path="/estados/rj" element={<RioJaneiro />} />
       <Route path="/estados/es" element={<EspiritoSanto />} />

    <Route path="/estados/pr" element={<Parana />} />
    <Route path="/estados/rs" element={<RioGrandedoSul />} />
    <Route path="/estados/sc" element={<SantaCatarina />} />
    
    <Route path="/estados/go" element={<Goias />} />
    <Route path="/estados/df" element={<DistritoFederal />} />
    <Route path="/estados/mt" element={<MatoGrosso/>} />
    <Route path="/estados/ms" element={<MatoGrossodoSul/>} />
    
    <Route path="/estados/ac" element={<Acre/>} />
    <Route path="/estados/ap" element={<Amapa/>} />
    <Route path="/estados/am" element={<Amazonas/>} />
    
    
    </Routes>
    </BrowserRouter>
  );
}