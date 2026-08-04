import { Link } from "react-router-dom";

export default function EspiritoSanto()
{
    return (
        <div>
            <h1>Estado do Espirito Santo</h1>

            <div className="conteudo">
                 <img src="/ES.png" />
                 <p>
                     O estado do Espírito Santo está localizado na região Sudeste do Brasil e é conhecido por seu extenso litoral, suas belas praias e sua rica diversidade natural. Sua economia é baseada em atividades como indústria, comércio, agricultura, mineração, produção de café e exportação por meio de importantes portos. O estado também se destaca pela influência das culturas indígena, africana, europeia e de imigrantes, que contribuíram para a formação de suas tradições, culinária e manifestações culturais. Além disso, o Espírito Santo possui áreas de preservação ambiental, cidades históricas e uma infraestrutura que favorece o desenvolvimento econômico e a qualidade de vida de sua população.
                 </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}

