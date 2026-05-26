export default function Exercicio6( { capital, taxa, tempo} )
{
let montanteS = Number (capital)*(1+(Number(taxa) / 100) * Number(tempo));
 
let montanteC = Number (capital)* Math.pow(1+(Number(taxa) / 100), Number(tempo)  );
 
 
return
 
{
<div>
Capital: {capital}, Taxa: {taxa}, Tempo: {tempo}
Montante Simples = {montanteS}
Montante Composta = {montanteC}
</div>
 
}
 
 
}