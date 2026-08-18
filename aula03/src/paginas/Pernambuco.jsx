import { Link } from "react-router-dom";

export default function Pernambuco()
{
    return (
        <div>
            <h1>Estado do Pernambuco </h1>

            <div className="conteudo">
        <img src="/PE.png" />
        <p>
        Pernambuco é um estado localizado na Região Nordeste do Brasil, tendo Recife como sua capital. É conhecido por suas belas praias, cidades históricas e rica cultura. Sua economia destaca-se pelo turismo, comércio, agricultura e indústria. Pernambuco também possui tradições muito importantes, como o frevo, o maracatu e as festas de São João, além de uma culinária típica bastante diversificada.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}