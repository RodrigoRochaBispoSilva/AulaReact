import { Link } from "react-router-dom";

export default function SaoPaulo()
{
    return (
        <div>
            <h1>Estado de Sao Paulo</h1>

            <div className="conteudo">
        <img src="/SP.png" />

        <p>
            O estado de São Paulo está localizado na região Sudeste do Brasil e é o mais populoso e um dos mais desenvolvidos do país. Destaca-se pela força de sua economia, que abrange setores como indústria, comércio, serviços, tecnologia e agronegócio. Além de ser um importante centro financeiro e empresarial, São Paulo possui grande diversidade cultural, resultado da influência de diferentes povos e imigrantes. O estado também conta com ampla infraestrutura de transportes, instituições de ensino e pesquisa de excelência, além de atrações turísticas que incluem praias, áreas de preservação ambiental, cidades históricas e a movimentada capital, reconhecida por sua intensa vida cultural e gastronômica.
        </p>
            <p>
                <Link to="/">Voltar</Link>
            </p>
            </div>
        </div>
    );
}