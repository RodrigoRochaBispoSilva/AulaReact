export default function Exercicio6( { capital, taxa, tempo} )
{
let montanteS = Number (capital)*(1+(Number(taxa) / 100) * Number(tempo));
 
let montanteC = Number (capital)* Math.pow(1+(Number(taxa) / 100), Number(tempo)  );
 
 
return
{
<div>
Capital: R$ (Number{capital}.tofixed(2)), Taxa: {taxa}5, Tempo: {tempo} meses.
Montante = (Juros Simples) = R$ {montantsimples.tofixed(2)}.
Montante = {Juros }
</div>
 
}
 
 
}