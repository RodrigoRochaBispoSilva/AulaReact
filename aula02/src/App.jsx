import "./App.css";
import Exemplo1 from "./Exemplo1";

export default function App()
{
  return (
    <div>
  <h1 style={{color: "red",background: "black"}}>Aula 02 - Criacao de Componentes </h1>
  
  <div className="card">
    <h3>Chamadas para o componenete Exemplo1</h3>

    <Exemplo1 numero1={10} numero2={20} />

  </div>
  <p>
  Ola, seja bem vindo a aula 2, onde iremos 
  criar os nosso componentes utilizando as props.
  </p>

    </div>
  )
}

