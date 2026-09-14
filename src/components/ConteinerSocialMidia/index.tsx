import ButtomDefault from "../Button";
import { Conteiner } from "./styles";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin,FaInstagramSquare  } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export default function ConteinerSocialMidia({noIcon=true}:{noIcon?:boolean}){
    return(
        <Conteiner>
            <ButtomDefault title="Gitbub" color="black">
               {noIcon? <FaSquareGithub />:[]}
            </ButtomDefault>
            <ButtomDefault title="Linkedin" color="black">
                 {noIcon? <FaLinkedin />:[]}
                
            </ButtomDefault>
            <ButtomDefault title="Instagram" color="black">
                 {noIcon? <FaInstagramSquare/>:[]}
                
            </ButtomDefault>
            <ButtomDefault title="E-mail" color="black">
                 {noIcon?<MdAttachEmail/>:[]}
            
            </ButtomDefault>
        </Conteiner>
    )
}