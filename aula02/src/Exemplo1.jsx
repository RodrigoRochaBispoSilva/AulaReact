export default function Exemplo1({numero1, numero2})
{
    let soma = Number(numero1) + Number(numero2);

    return (
    <div>
    Numero1 : {numero1} <br />
    Numero2 : {numero2} <br />
    A soma e: {soma}
    </div>
);
}