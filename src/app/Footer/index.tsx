
import { LiNKS } from "../../styles/theme";
import { Conteiner, ContentFooter } from "./styles";

export default function Footer(){
    return(
        <Conteiner>
            <div className="conteinerTitle">
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
                    <a  href={LiNKS.github}>.../github...</a>
                    <a  href={LiNKS.linkedin}>.../linkedin...</a>
                    <a  href={LiNKS.email}>.../E-Mail...</a>
                </div>
            </ContentFooter>
        </Conteiner>
    )
}