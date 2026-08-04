import { Link } from "react-router-dom";

export default function MinasGerais()
{
    return (
        <div>
            <h1>Estado de Minas Gerais</h1>

            <div className="conteudo">
        <img src="/MG.png" />
        <p>
            O estado de Minas Gerais está localizado na região Sudeste do Brasil e é conhecido por sua grande extensão territorial, sua rica história e seu importante patrimônio cultural. Sua economia é diversificada, com destaque para a mineração, a agropecuária, a indústria e o setor de serviços. Minas Gerais também é reconhecido pela produção de café, queijo e outros produtos típicos, além de suas cidades históricas, que preservam construções e tradições do período colonial. O estado possui belas paisagens naturais, com serras, cachoeiras e parques, além de desempenhar um papel relevante no desenvolvimento econômico, cultural e turístico do Brasil.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}