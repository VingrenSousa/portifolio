import { useState } from "react";
import { Conteiner,Content,Menu} from "./styles";
import { SlGrid } from "react-icons/sl";


type propsRefPage={
    HomeRef:React.RefObject<HTMLDivElement | null>,
    AboutRef:React.RefObject<HTMLDivElement | null>,
    ProjectsRef:React.RefObject<HTMLDivElement | null>,
    FooterRef:React.RefObject<HTMLDivElement | null>
}

type propshandle="home"|"about"|"projects"|"Footer";

export default function Header({AboutRef,FooterRef,HomeRef,ProjectsRef}:propsRefPage){
    const [isMenuMobile,setIsMenuMobile]=useState(false)
    
    function handlePage(page:propshandle){
        if(page==="home"){
            HomeRef.current?.scrollIntoView({ behavior: "smooth",block: "start",inline: "nearest",})
        }else if(page==="about"){
            AboutRef.current?.scrollIntoView({ behavior: "smooth",block: "start",inline: "nearest",})
        }else if(page==="projects"){
            ProjectsRef.current?.scrollIntoView({ behavior: "smooth",block: "start",inline: "nearest",})
        }else{
            FooterRef.current?.scrollIntoView({ behavior: "smooth",block: "start",inline: "nearest",})
        }

    }
    return(
        <Conteiner>
           <Content>
                <button onClick={()=>handlePage("home")}>
                    <h2>
                        Vingren.Souza
                    </h2>
                </button>
                <section>
                    <button onClick={()=>handlePage("about")}>
                        About
                    </button>
                     <button onClick={()=>handlePage("projects")}>
                        Projetos
                    </button>
                     <button onClick={()=>handlePage("Footer")}>
                        Contact-me
                    </button>
                </section>
                <button onClick={()=>setIsMenuMobile(!isMenuMobile)}>
                    <SlGrid />
                </button>
           </Content>
           {
            isMenuMobile&&
                <Menu >
                    <section>
                        <button onClick={()=>handlePage("about")}>
                            About
                        </button>
                        <button onClick={()=>handlePage("projects")}>
                            Projetos
                        </button>
                        <button onClick={()=>handlePage("Footer")}>
                            Contact-me
                        </button>
                    </section>
                </Menu>                          
               
           }
 
        </Conteiner>
    )
}