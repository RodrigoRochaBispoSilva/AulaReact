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
        <h3>Regiao Sul:</h3>

        <ul>
            <li><Link to="/estados/pr">Parana</Link></li>
            <li><Link to="/estados/rs">Rio Grande do Sul</Link></li>
            <li><Link to="/estados/sc">Santa Catarina</Link></li>
        </ul>

            </div>

            <div className="conteudo">
        <h3>Regiao Centro-Oeste:</h3>

        <ul>
        <li><Link to="/estados/go">Goias</Link></li>
        <li><Link to="/estados/df">Distrito Federal</Link></li>
        <li><Link to="/estados/mt">Mato Grosso</Link></li>
        <li><Link to="/estados/ms">Mato Grosso do Sul</Link></li>
        </ul>

            </div>

            <div className="conteudo">
                <h3>Regiao Norte:</h3>
                <ul>
                <li><Link to="/estados/ac">Acre</Link></li>
                <li><Link to="/estados/ap">Amapa</Link></li>
                <li><Link to="/estados/am">Amazonas</Link></li>
                <li><Link to="/estados/pa">Para</Link></li>
                <li><Link to="/estados/ro">Rondonia</Link></li>
                <li><Link to="/estados/rr">Roraima</Link></li>
                <li><Link to="/estados/to">Tocantins</Link></li>
                </ul>
            </div>
            <div className="conteudo">
                <h3>Regiao Nordeste:</h3>
                <ul>
                <li><Link to="/estados/al">Alagoas</Link></li>
                <li><Link to="/estados/ba">Bahia</Link></li>
                <li><Link to="/estados/ce">Ceara</Link></li>
                <li><Link to="/estados/ma">Maranhao</Link></li>
                <li><Link to="/estados/pb">Paraiba</Link></li>
                <li><Link to="/estados/pe">Pernambuco</Link></li>
                <li><Link to="/estados/pi">Piaui</Link></li>
                <li><Link to="/estados/rn">Rio Grande do Norte</Link></li>
                <li><Link to="/estados/se">Sergipe</Link></li>
                </ul>
                </div>



        </div>
    );
}