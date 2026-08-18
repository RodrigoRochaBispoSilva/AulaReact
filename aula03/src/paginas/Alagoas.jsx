import { Link } from "react-router-dom";

export default function Alagoas()
{
    return (
        <div>
            <h1>Estado de Alagoas </h1>

            <div className="conteudo">
        <img src="/AL.png" />
        <p>
        Alagoas é um estado localizado na Região Nordeste do Brasil, tendo Maceió como sua capital. É conhecido por suas belas praias, águas cristalinas e paisagens naturais. Sua economia é baseada principalmente no turismo, agricultura, comércio e serviços. Alagoas também possui uma cultura rica, com destaque para suas comidas típicas, festas populares e tradições nordestinas.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}