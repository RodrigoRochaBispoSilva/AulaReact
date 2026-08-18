import { Link } from "react-router-dom";

export default function Tocantins()
{
    return (
        <div>
            <h1>Estado do Tocantins </h1>

            <div className="conteudo">
        <img src="/TO.png" />
        <p>
        Tocantins é um estado localizado na Região Norte do Brasil, tendo Palmas como sua capital. É o estado mais novo do país, criado em 1988. Sua paisagem é formada por áreas de Cerrado, rios e belas cachoeiras. A economia destaca-se pela agricultura, pecuária, comércio e serviços. Tocantins também possui uma cultura diversificada e importantes atrações naturais, como o Jalapão.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}