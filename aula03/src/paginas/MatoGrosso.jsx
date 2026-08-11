import { Link } from "react-router-dom";

export default function MatoGrosso()
{
    return (
        <div>
            <h1>Estado de Mato Grosso </h1>

            <div className="conteudo">
        <img src="/MT.png" />
        <p>
        Mato Grosso é um estado localizado na Região Centro-Oeste do Brasil, tendo Cuiabá como sua capital. É conhecido por sua grande riqueza natural, abrigando importantes biomas, como o Cerrado, a Amazônia e o Pantanal. Sua economia destaca-se principalmente pela agricultura e pela pecuária, sendo um dos maiores produtores de soja, milho e algodão do país. Mato Grosso também possui belas paisagens naturais, rios e uma grande diversidade de animais e plantas, atraindo turistas interessados em ecoturismo e aventura.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}