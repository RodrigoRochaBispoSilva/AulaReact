import {Link} from "react-router-dom";
import "../App.css";

export default function Home()
{
    return (
        <div>
            <h1>Aula 03 - Estudo de Rotas</h1>

            <div className="conteudo">

                <h3>Regiao Sudeste:</h3>
            <ul>
                <li><Link to="/estados/sp">Sao Paulo</Link></li>
 
                <li><Link to="/estados/mg">Minas Gerais</Link></li>

                <li><Link to="/estados/rj">Rio de Janeiro</Link></li>

                <li><Link to="/estados/es">Espirito Santo</Link></li>
            </ul>

            </div>

            <div className="conteudo">
        <h3>Regiao Sul</h3>

        <ul>
            <li><Link to="/estados/pr">Parana</Link></li>
            <li><Link to="/estados/rs">Rio Grande do Sul</Link></li>
            <li><Link to="/estados/sc">Santa Catarina</Link></li>
        </ul>

            </div>

            <div className="conteudo">
        <h3>Regiao Centro-Oeste</h3>

        <ul>
        <li><Link to="/estados/go">Goias</Link></li>
        <li><Link to="/estados/df">Distrito Federal</Link></li>
        <li><Link to="/estados/mt">Mato Grosso</Link></li>
        <li><Link to="/estados/ms">Mato Grosso do Sul</Link></li>
        </ul>

            </div>

            <div className="conteudo">
                <h3>Regiao Norte</h3>
                <ul>
                <li><Link to="/estados/ac">Acre</Link></li>
                <li><Link to="/estados/ap">Amapa</Link></li>
                <li><Link to="/estados/am">Amazonas</Link></li>
                
                
                </ul>
            </div>
        </div>
    );
}