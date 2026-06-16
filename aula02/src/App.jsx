import "./App.css";
import Exemplo1 from "./Exemplo1";

import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";
import Exercicio5 from "./Exercicio5";
import Exercicio6 from "./Exercicio6";
import Exercicio7 from "./Exercicio7";
import Exercicio9 from "./Exercicio9";
export default function App()
{
  return (
    <div>
  <h1 style={{color: "red",background: "black"}}>Aula 02 - Criacao de Componentes </h1>
  
  <div className="card">
    <h3> Exemplo1</h3>

    <Exemplo1 numero1={10} numero2={20} />
</div>

<div className="card">
    <h3>Exercicio 1</h3>
    <Exercicio1 numero={12} />
    <Exercicio1 numero={67} />
    <Exercicio1 numero={-5} />

  </div>
  
   <div className="card">
      <h3> Exercicio2</h3>

     <Exercicio2 peso= {60} altura= {80} />
      
  </div>

<div className="card">
    <h3>Exercicio 3</h3>

    <Exercicio3 nota1= {5} nota2 = {7} />

</div>

<div className="card">

<h3>Exercicio 4</h3>
<Exercicio4 baset= {7} alturat= {9}/>

</div>

<div className="card">
 
<h3>Exercicio 5</h3>
<Exercicio5 consulta={10}/>
 
 
 </div>

  <div className="card">

    <h3>Exercicio 6</h3>
    <Exercicio6 capital={1000} tempo={6} taxa={5}/>

  </div>
  
  <div className="card">

<h3>Exercicio 7</h3>
<Exercicio7 celsius={30} />
<Exercicio7 celsius={20} />
<Exercicio7 celsius={39.5} />
</div>
  
<div className="card">

<h3>Exercicio 9</h3>
<Exercicio9 salario={2500} />
<Exercicio9 salario={200} />
<Exercicio9 salario={2700} />
</div>
   
   
   
   </div>

  
  
  )
}

