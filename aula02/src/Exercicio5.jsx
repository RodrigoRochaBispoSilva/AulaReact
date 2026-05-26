export default function Exercicio5( {consulta} )
 
{
  let sb = Number(consulta) * 150;
let aliquota = Number(sb) * 0.08;
let sl = Number(sb) - 0.08;
 
 
return(
    <div>
    Numero de Consultas: {consulta} <br />
    Salario Bruto: {sb} <br />
    Aliquota : {aliquota} <br />
    Salario Liquido: {sl} <br />
 
    </div>
)  
 
 
 
 
 
 
}