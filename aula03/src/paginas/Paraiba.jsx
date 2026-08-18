import { Link } from "react-router-dom";

export default function Paraiba()
{
    return (
        <div>
            <h1>Estado do Paraiba </h1>

            <div className="conteudo">
        <img src="/PB.png" />
        <p>
        A Paraíba é um estado localizado na Região Nordeste do Brasil, tendo João Pessoa como sua capital. É conhecida por suas belas praias, paisagens naturais e pelo seu patrimônio histórico. Sua economia destaca-se pela agricultura, pecuária, comércio, indústria e turismo. A Paraíba também possui uma cultura rica, com destaque para o forró, as festas juninas, o artesanato e a culinária típica nordestina.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}