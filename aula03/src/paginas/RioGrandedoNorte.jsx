import { Link } from "react-router-dom";

export default function RioGrandedoNorte()
{
    return (
        <div>
            <h1>Estado do Rio Grande do Norte </h1>

            <div className="conteudo">
        <img src="/RN.png" />
        <p>
        O Rio Grande do Norte é um estado localizado na Região Nordeste do Brasil, tendo Natal como sua capital. É conhecido por suas belas praias, dunas e paisagens naturais, que atraem muitos turistas. Sua economia destaca-se pelo turismo, agricultura, pecuária, comércio e produção de energia eólica. O estado também possui uma cultura rica, com destaque para as festas populares, o artesanato e a culinária nordestina.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}