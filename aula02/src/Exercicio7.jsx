export default function Exercicio7({celsius})
{
    let fahrenheit, kelvin;

    fahrenheint = (celsius * 9/5) + 32;
    Kelvin = celsius + 273.15;

    return(
        <div>
            {celsius} C equivale a {fahrenheit} F e {kelvin} K
        </div>
     )
}