import { Link } from "react-router-dom";

export default function Piaui()
{
    return (
        <div>
            <h1>Estado do Piaui </h1>

            <div className="conteudo">
        <img src="/PI.png" />
        <p>
       
        O Piauí é um estado localizado na Região Nordeste do Brasil, tendo Teresina como sua capital. É conhecido por suas paisagens naturais, sítios arqueológicos e pelo Parque Nacional da Serra da Capivara. Sua economia destaca-se pela agricultura, pecuária, comércio e serviços. O estado também possui uma cultura rica, com festas populares, artesanato e culinária típica nordestina.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}