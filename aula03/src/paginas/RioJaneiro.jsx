import { Link } from "react-router-dom";

export default function RioJaneiro()
{
    return (
        <div>
            <h1> Estado do Rio de Janeiro</h1>

            <div className="conteudo">
         <img src="/RJ.png" />

         <p>
            O estado do Rio de Janeiro está localizado na região Sudeste do Brasil e é conhecido por suas belas paisagens naturais, que combinam praias, montanhas e florestas. Sua economia é impulsionada por atividades como turismo, indústria, comércio, serviços e exploração de petróleo e gás. O estado também possui grande importância histórica e cultural, sendo reconhecido por manifestações artísticas, festivais e pelo famoso Carnaval. Além disso, abriga importantes patrimônios naturais e culturais, bem como instituições de ensino e pesquisa, desempenhando um papel de destaque no desenvolvimento econômico, social e cultural do país.
         </p>
         <p>
             <Link to="/">Voltar</Link>
         </p>
            </div>
        </div>
    );
}