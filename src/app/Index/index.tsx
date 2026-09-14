
import Header from "../../components/header";
import Footer from "../Footer";
import SectionAbout from "../SectionAbout";
import SectionHome from "../SectionHome";
import SectionProjects from "../SectionProjects";
import { Conteiner } from "./styles";


export default function App(){
    return(
        <Conteiner>
            <Header/>
            <SectionHome/>
            <SectionAbout/>
            <SectionProjects/>
            <Footer/>
        </Conteiner>
    )
}