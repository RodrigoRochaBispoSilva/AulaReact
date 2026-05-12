import "./App.css";
import Exemplo1 from "./Exemplo1";

import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";

export default function App()
{
  return (
    <div>
  <h1 style={{color: "red",background: "black"}}>Aula 02 - Criacao de Componentes </h1>
  
  <div className="card">
    <h3>Chamadas para o componente Exemplo1</h3>

    <Exemplo1 numero1={10} numero2={20} />
</div>

<div className="card">
    <h3>Exercicio 1</h3>
    <Exercicio1 numero={12} />
    <Exercicio1 numero={67} />
    <Exercicio1 numero={-5} />

  </div>
  
   <div className="card">
      <h3>Chamada para o componente Exercicio2</h3>

      <Exercicio2 peso={80} altura={1.80} />
      <br />
      <Exercicio2 peso={60} altura={1.60} />
      <br />
      
  </div>

<div className="card">
    <h3>Chamada para o componente exercicio 3</h3>

    <Exercicio3 nota1= {5} nota2 = {7} />

</div>

  
  </div>
  
  )
}

