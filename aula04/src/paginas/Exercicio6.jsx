import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio6() {
    const [quantidade, setQuantidade] = useState("");
    const [preco, setPreco] = useState("");
    const [resultado, setResultado] = useState();

    function calcular() {
        let qtd = Number(quantidade);
        let prc = Number(preco);

        let subtotal = qtd * prc;
        let desconto = subtotal * 0.10; // 10% de desconto
        let valorFinal = subtotal - desconto;

        // Exibindo o resultado na variável resultado
        setResultado(
            <div>
                Subtotal: R$ {subtotal.toFixed(2)} <br />
                Desconto (10%): R$ {desconto.toFixed(2)} <br />
                Valor Final: R$ {valorFinal.toFixed(2)} <br />
            </div>
        );
    }

    return (
        <div>
            <h1>Exercício 6</h1>

            <div className="conteudo">
                <form>
                    <p>
                        Digite a quantidade do produto <br />
                        <input 
                            type="text" 
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                    </p>
                    <p>
                        Digite o preço do produto <br />
                        <input 
                            type="text" 
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
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