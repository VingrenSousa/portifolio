import ButtomDefault from "../../components/Button";
import ConteinerSocialMidia from "../../components/ConteinerSocialMidia";
import { Conteiner, ContentFooter } from "./styles";

export default function Footer(){
    return(
        <Conteiner>
            <div>
                <div>
                    <h1>Vingren</h1>
                    <div/>
                 </div>
                 <div>
                    <span>
                        full Stack <br/>developer
                    </span>
                    <h1>Souza</h1>
                 </div>
            </div>
            <ContentFooter icon={false}>
                <div>
                    <ButtomDefault color="black" title="gitHub"/>
                    <ButtomDefault color="black" title="Linkedin"/>
                    <ButtomDefault color="black" title="E-Mail"/>
                </div>
            </ContentFooter>
        </Conteiner>
    )
}