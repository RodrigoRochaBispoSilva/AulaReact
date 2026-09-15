import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio2() {
    const [fahrenheit, setFahrenheit] = useState();
    const [resultado, setResultado] = useState();

    function calcular() {
        let fah = Number(fahrenheit);
        let celsius = ((fah - 32) * 5) / 9;

        // Exibindo o resultado na variável resultado
        setResultado(
            <div>
                Temperatura Celsius: {celsius.toFixed(2)} °C
            </div>
        );
    }

    return (
        <div>
            <h1>Exercício 2</h1>

            <div className="conteudo">
                <form>
                    <p>
                        Digite a temperatura em Fahrenheit <br />
                        <input 
                            type="text" 
                            value={fahrenheit}
                            onChange={(e) => setFahrenheit(e.target.value)}
                        />
                    </p>
                    <p>
                        <input type="button" value="Calcular" onClick={calcular} />
                    </p>
                    <p>
                        {resultado}
                    </p>
                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}