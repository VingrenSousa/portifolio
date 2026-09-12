import { useState } from "react";
import { Conteiner,Content,Menu} from "./styles";
import { SlGrid } from "react-icons/sl";




export default function Header(){
    const [isMenuMobile,setIsMenuMobile]=useState(false)
  
    return(
        <Conteiner>
           <Content>
                <h2>
                    Vingren.Souza
                </h2>
                <section>
                    <button>
                        About
                    </button>
                     <button>
                        Projetos
                    </button>
                     <button>
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
                        <button>
                            About
                        </button>
                        <button>
                            Projetos
                        </button>
                        <button>
                            Contact-me
                        </button>
                    </section>
                </Menu>                          
               
           }
 
        </Conteiner>
    )
}