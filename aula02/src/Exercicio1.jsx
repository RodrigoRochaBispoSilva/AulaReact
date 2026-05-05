export default function Exercicio1({numero})
{
    let quadrado = Number(numero) * Number(numero);
    let cubo = quadrado * Number(numero);

    return(
    <div>
        O quadrado do {numero} e {quadrado}, e o cubo e {cubo}. 
    </div>
    )
}

