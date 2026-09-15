import ButtomDefault from "../Button";
import { Conteiner } from "./styles";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin,FaInstagramSquare  } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { LiNKS } from "../../styles/theme";

export default function ConteinerSocialMidia({noIcon=true}:{noIcon?:boolean}){

   
    return(
        <Conteiner>
            <ButtomDefault 
                onClick={()=>window.location.href=LiNKS.github}
                title="Gitbub" color="black">
               {noIcon? <FaSquareGithub />:[]}
            </ButtomDefault>
            <ButtomDefault 
                onClick={()=>window.location.href=LiNKS.linkedin}
                title="Linkedin" color="black">
                 {noIcon? <FaLinkedin />:[]}
                
            </ButtomDefault>
            <ButtomDefault
                onClick={()=>window.location.href=LiNKS.Instagram}
                title="Instagram" color="black">
                 {noIcon? <FaInstagramSquare/>:[]}
                
            </ButtomDefault>
            <ButtomDefault 
                onClick={()=>window.location.href=LiNKS.email}
                title="E-mail" color="black">
                 {noIcon?<MdAttachEmail/>:[]}
            
            </ButtomDefault>
        </Conteiner>
    )
}