import { Link } from "react-router-dom";

export default function Roraima()
{
    return (
        <div>
            <h1>Estado do Roraima </h1>

            <div className="conteudo">
        <img src="/RR.png" />
        <p>
        Roraima é um estado localizado na Região Norte do Brasil, tendo Boa Vista como sua capital. É o estado brasileiro mais ao norte e faz fronteira com a Venezuela e a Guiana. Roraima possui belas paisagens naturais, com áreas de floresta, savanas e montanhas. Sua economia é baseada principalmente na agricultura, pecuária, comércio e serviços. O estado também possui uma forte presença indígena e uma cultura rica e diversificada, sendo uma importante parte da região amazônica.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}