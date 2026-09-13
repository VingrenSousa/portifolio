import { Conteiner, Content, HedaerAbout } from "./styles";
import imgProfile from "../../assets/profile.png"
import ConteinerSkils from "../../components/conteinerSkills";

export default function SectionAbout(){
    const stekesFrontend=["html","css","react","styled.Componet","TypeScript","JavaScript","Vite"]
    const stekesBackend=["node.js","express","TypeScript","REST.API","JWT","Bcrypt","Knex.js","SQLite"]
    const stekesMobile=["React Native","Expo","Expo.Router","TypeScript"]
    const stekesFerramentas=["git","gitHub","axios"]
    return(
        <Conteiner>
            <HedaerAbout>
                <h2> .../About me...</h2>
                <div>
                    <p>
                        Hello! Sou desenvolvedor 
                        <span> Full-Stack</span>, 
                        atualmente aprofundando meus estudos em 
                        <span> TypeScript e desenvolvimento de APIs com Node.js</span>.
                         Também atuo como desenvolvedor 
                         <span> Mobile com React Native</span>,
                        criando aplicações modernas, funcionais e focadas em boas experiências para o usuário.
                    </p>
                </div>
            </HedaerAbout>
            <main> 
                <div className="divImgProfile">
                    <img src={imgProfile}/>
                </div>
                <Content>
                    <ConteinerSkils color={"white"} title="Front-end" skils={stekesFrontend}/>
                    <ConteinerSkils color={"black"} title="Back-end" skils={stekesBackend}/>
                    <ConteinerSkils color={"black"} title="Mobile" skils={stekesMobile}/>
                    <ConteinerSkils color={"black"} title="Ferramentas" skils={stekesFerramentas}/>
                </Content>
               
            </main>
        </Conteiner>
    )
}