import { Link } from "react-router-dom";

export default function MatoGrossodoSul()
{
    return (
        <div>
            <h1>Estado de Mato Grosso do Sul </h1>

            <div className="conteudo">
        <img src="/MS.png" />
        <p>
        Mato Grosso do Sul é um estado localizado na Região Centro-Oeste do Brasil, tendo Campo Grande como sua capital. O estado é conhecido por suas belas paisagens naturais e por abrigar parte do Pantanal, uma das maiores áreas alagadas do mundo. Sua economia se destaca pela agricultura, pecuária, indústria e turismo. Mato Grosso do Sul também possui uma grande diversidade de animais e plantas, além de rios, cachoeiras e lugares muito procurados por turistas, como Bonito e o Pantanal.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}