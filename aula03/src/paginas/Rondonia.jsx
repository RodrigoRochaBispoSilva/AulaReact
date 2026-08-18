import { Link } from "react-router-dom";

export default function Rondonia()
{
    return (
        <div>
            <h1>Estado de Rondonia </h1>

            <div className="conteudo">
        <img src="/RO.png" />
        <p>
        Rondônia é um estado localizado na Região Norte do Brasil, tendo Porto Velho como sua capital. O estado possui uma grande área de Floresta Amazônica e é conhecido por sua diversidade natural. Sua economia é baseada principalmente na agricultura, pecuária, mineração e comércio. Rondônia também possui uma cultura diversificada, influenciada pelos povos indígenas e por migrantes de diferentes regiões do Brasil. É um estado importante para a economia e para a preservação da natureza na Amazônia.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}