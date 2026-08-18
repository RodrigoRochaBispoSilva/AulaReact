import { Link } from "react-router-dom";

export default function Maranhao()
{
    return (
        <div>
            <h1>Estado do Maranhao</h1>

            <div className="conteudo">
        <img src="/MA.png" />
        <p>
        O Maranhão é um estado localizado na Região Nordeste do Brasil, tendo São Luís como sua capital. É conhecido por suas belas paisagens, como os Lençóis Maranhenses, além de suas praias e rios. Sua economia destaca-se pela agricultura, pecuária, indústria e turismo. O estado também possui uma cultura rica e diversificada, com destaque para o bumba meu boi, as festas populares e a culinária típica.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}