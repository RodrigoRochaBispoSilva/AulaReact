import { Link } from "react-router-dom";

export default function Goias()
{
    return (
        <div>
            <h1>Estado de Goias </h1>

            <div className="conteudo">
        <img src="/GO.png" />
        <p>
        Goiás é um estado localizado na Região Centro-Oeste do Brasil, tendo Goiânia como sua capital. O estado é conhecido por suas belas paisagens naturais, cachoeiras, rios e pelo Cerrado, um dos principais biomas brasileiros. Sua economia se destaca pela agricultura, pecuária, indústria e mineração, com grande produção de soja, milho e carne. Goiás também possui uma cultura rica, marcada pela culinária típica, pelas festas tradicionais e pela música sertaneja.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}