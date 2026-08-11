import { Link } from "react-router-dom";

export default function Amapa()
{
    return (
        <div>
            <h1>Estado do Amapa </h1>

            <div className="conteudo">
        <img src="/AP.png" />
        <p>
        O Amapá é um estado localizado na Região Norte do Brasil, tendo Macapá como sua capital. O estado é conhecido por suas grandes áreas de Floresta Amazônica, rios e rica biodiversidade. Sua economia é baseada principalmente no comércio, na agricultura, na pecuária, na mineração e no extrativismo. O Amapá também possui importantes atrações naturais e culturais, além de ser conhecido por ter parte de seu território próximo à Linha do Equador.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}