import { Link } from "react-router-dom";

export default function Sergipe()
{
    return (
        <div>
            <h1>Estado do Sergipe </h1>

            <div className="conteudo">
        <img src="/SE.png" />
        <p>
        Sergipe é um estado localizado na Região Nordeste do Brasil, tendo Aracaju como sua capital. É o menor estado brasileiro em extensão territorial e possui belas praias, rios e paisagens naturais. Sua economia destaca-se pela agricultura, indústria, comércio, serviços e turismo. Sergipe também possui uma cultura rica, com destaque para as festas juninas, o forró, o artesanato e a culinária típica nordestina.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}