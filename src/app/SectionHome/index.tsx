import ButtomDefault from "../../components/Button";
import ConteinerSocialMidia from "../../components/ConteinerSocialMidia";
import { Conteiner, ContentTtile, MenuScremFull, MenuScremMobile } from "./styles";
import { GoArrowRight } from "react-icons/go";


export default function SectionHome() {
    return (
        <Conteiner>
            <MenuScremFull>
                <ContentTtile>
                    <h1>
                        Full-stack
                    </h1>
                    <div>
                        <ButtomDefault title="Projetos" color="white" />
                        <ButtomDefault color="white">
                            <GoArrowRight />
                        </ButtomDefault>
                    </div>
                </ContentTtile>

                <ContentTtile>
                    <div className="contentDescription">
                        <p>
                            Meu objetivo é escrever linhas de <span>codigos sustentável</span>, limpo e <span>compreensível</span> para que o desenvolvimento do processo seja agradável.
                        </p>
                    </div>
                    <h1>
                        Developer
                    </h1>
                </ContentTtile>
            </MenuScremFull>

            <MenuScremMobile>
                <ContentTtile>
                    <div>
                        <h1>
                            Full-stack
                        </h1>
                    </div>

                    <div>
                        <h1>
                            Developer
                        </h1>
                    </div>

                </ContentTtile>

                <ContentTtile>
                    <div className="contentDescription">
                        <p>
                            Meu objetivo é escrever linhas de <span>codigos sustentável</span>, limpo e <span>compreensível</span> para que o desenvolvimento do processo seja agradável.
                        </p>
                    </div>
                    <div className="contentButtons">
                        <ButtomDefault title="Projetos" color="white" />
                        <ButtomDefault color="white">
                            <GoArrowRight />
                        </ButtomDefault>
                    </div>
                </ContentTtile>
            </MenuScremMobile>
            <ConteinerSocialMidia/>

           
        </Conteiner>
    )
}