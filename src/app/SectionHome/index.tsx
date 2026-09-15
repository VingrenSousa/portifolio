import { useEffect, useRef, useState } from "react";
import ButtomDefault from "../../components/Button";
import ConteinerSocialMidia from "../../components/ConteinerSocialMidia";
import { Conteiner, ContentTtile, MenuScremFull, MenuScremMobile } from "./styles";
import { GoArrowRight } from "react-icons/go";
type props={
    refProject:React.RefObject<HTMLDivElement | null>
}

export default function SectionHome({refProject}:props) {


    
        const refAbout= useRef<HTMLDivElement>(null)
    
        const [visible,setVisible]=useState(false)
    
            useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                const entry=entries[0]
                    if(entry.isIntersecting){
                        setVisible(true)
                        console.log("elementos entro")
                    }else{
                        setVisible(false)
                    }
                },{threshold:0.2})
        
                if (refAbout.current) {
                    observer.observe(refAbout.current);
                }
        
                return () => observer.disconnect();
          }, []);
    


    function handleGoProject(){
        return refProject.current?.scrollIntoView({ behavior: "smooth",block: "start",inline: "nearest",})
    }
    return (
        <Conteiner ref={refAbout} visible={visible}>
            <MenuScremFull>
                <ContentTtile>
                    <h1>
                        Full-stack
                    </h1>
                    <div>
                        <ButtomDefault onClick={handleGoProject} title="Projetos" color="white" />
                        <ButtomDefault onClick={handleGoProject} color="white">
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
                        <ButtomDefault onClick={handleGoProject} title="Projetos" color="white" />
                        <ButtomDefault  onClick={handleGoProject} color="white">
                            <GoArrowRight />
                        </ButtomDefault>
                    </div>
                </ContentTtile>
            </MenuScremMobile>
            <ConteinerSocialMidia/>

           
        </Conteiner>
    )
}