import { Link } from "react-router-dom";

export default function Ceara()
{
    return (
        <div>
            <h1>Estado do Ceara </h1>

            <div className="conteudo">
        <img src="/CE.png" />
        <p>
        O Ceará é um estado localizado na Região Nordeste do Brasil, tendo Fortaleza como sua capital. É conhecido por suas belas praias, dunas e paisagens naturais. Sua economia destaca-se pelo turismo, agricultura, comércio e indústria. O Ceará também possui uma cultura rica, com destaque para o artesanato, as festas populares, a música e a culinária típica nordestina.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}