
import Header from "../../components/header";
import SectionAbout from "../SectionAbout";
import SectionHome from "../SectionHome";
import { Conteiner } from "./styles";


export default function App(){
    return(
        <Conteiner>
            <Header/>
            <SectionHome/>
            <SectionAbout/>
        </Conteiner>
    )
}