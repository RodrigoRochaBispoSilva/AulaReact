import { Link } from "react-router-dom";

export default function Amazonas()
{
    return (
        <div>
            <h1>Estado do Amazonas </h1>

            <div className="conteudo">
        <img src="/AM.png" />
        <p>
        O Acre é um estado localizado na Região Norte do Brasil, tendo Rio Branco como sua capital. É conhecido por suas grandes áreas de floresta amazônica e pela riqueza de sua biodiversidade. Sua economia é baseada principalmente na agricultura, pecuária, extrativismo e comércio. O estado também possui uma cultura marcada pela influência dos povos indígenas e pela história dos seringueiros, que tiveram grande importância na formação do Acre.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}