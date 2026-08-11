import { Link } from "react-router-dom";

export default function DistritoFederal()
{
    return (
        <div>
            <h1>Estado do Distrito Federal </h1>

            <div className="conteudo">
        <img src="/DF.png" />
        <p>
        O Distrito Federal está localizado na Região Centro-Oeste do Brasil e abriga Brasília, a capital do país. Criado para sediar o governo federal, o Distrito Federal é onde estão importantes órgãos públicos, como o Congresso Nacional, o Palácio do Planalto e o Supremo Tribunal Federal. Além da importância política e administrativa, a região possui áreas verdes, parques e belas paisagens. Sua economia é baseada principalmente nos serviços, no comércio e nas atividades ligadas à administração pública.
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}