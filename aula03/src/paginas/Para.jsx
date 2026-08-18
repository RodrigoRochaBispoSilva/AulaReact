import { Link } from "react-router-dom";

export default function Para()
{
    return (
        <div>
            <h1>Estado do Para </h1>

            <div className="conteudo">
        <img src="/PA.png" />
        <p>
        O Pará é um estado localizado na Região Norte do Brasil, tendo como capital Belém. É um dos maiores estados brasileiros e possui grande parte de seu território coberto pela Floresta Amazônica. Sua economia destaca-se pela mineração, agricultura, pecuária e pesca. O Pará também possui uma cultura muito rica, com influência indígena e amazônica, destacando-se por suas comidas típicas, como o açaí e o tacacá. É um estado importante para a preservação da Amazônia e para a diversidade cultural do Brasil.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}