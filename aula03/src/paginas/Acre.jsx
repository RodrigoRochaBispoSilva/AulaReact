import { Link } from "react-router-dom";

export default function Acre()
{
    return (
        <div>
            <h1>Estado do Acre </h1>

            <div className="conteudo">
        <img src="/AC.png" />
        <p>
        O Acre é um estado localizado na Região Norte do Brasil, fazendo fronteira com os estados do Amazonas e Rondônia e com os países Peru e Bolívia. Sua capital é Rio Branco, que também é a cidade mais populosa do estado. O Acre possui uma grande riqueza natural, com extensas áreas de floresta Amazônica e uma grande diversidade de animais e plantas. A economia do estado é baseada principalmente na agropecuária, no extrativismo vegetal e no comércio. O Acre também é conhecido pela importância histórica de Chico Mendes, seringueiro e ambientalista que lutou pela preservação da floresta e pelos direitos das comunidades que vivem na Amazônia. 
        </p>
        <p>
             <Link to="/">Voltar</Link>
        </p>
            </div>
        </div>
    );
}