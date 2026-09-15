
import { useRef } from "react";
import Header from "../../components/header";
import Footer from "../Footer";
import SectionAbout from "../SectionAbout";
import SectionHome from "../SectionHome";
import SectionProjects from "../SectionProjects";
import { Conteiner } from "./styles";


export default function App(){

    const HomeRef = useRef<HTMLDivElement>(null);
    const AboutRef = useRef<HTMLDivElement>(null);
    const ProjectsRef = useRef<HTMLDivElement>(null);
    const FooterRef = useRef<HTMLDivElement>(null);

    return(
        <Conteiner ref={HomeRef} >
            <Header HomeRef={HomeRef} AboutRef={AboutRef} ProjectsRef={ProjectsRef} FooterRef={FooterRef}/>
            <div  ref={HomeRef} >
                <SectionHome refProject={ProjectsRef} />
            </div>
            <div  ref={AboutRef} >
                <SectionAbout />
            </div>
            <div  ref={ProjectsRef} >
                <SectionProjects/>
            </div>
            <div  ref={FooterRef} >
                <Footer/>
            </div>
            
        </Conteiner>
    )
}