import { Link } from "react-router-dom";

export default function Acre()
{
    return (
        <div>
            <h1>Estado do Acre </h1>

            <div className="conteudo">
        <img src="/AC.png" />
        <p>
        O Amazonas é um estado localizado na Região Norte do Brasil, tendo Manaus como sua capital. É o maior estado brasileiro em extensão territorial e possui grande parte de seu território coberto pela Floresta Amazônica. O estado é conhecido por seus rios, sua rica biodiversidade e suas belas paisagens naturais. Sua economia se destaca pelo comércio, pela indústria, pelo turismo e pelo extrativismo. O Amazonas também possui uma cultura diversificada, com forte influência dos povos indígenas e das tradições amazônicas.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}