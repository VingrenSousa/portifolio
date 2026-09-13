import ButtomDefault from "../Button";
import { Conteiner } from "./styles";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin,FaInstagramSquare  } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export default function ConteinerSocialMidia(){
    return(
        <Conteiner>
            <ButtomDefault title="Gitbub" color="black">
                <FaSquareGithub />
            </ButtomDefault>
            <ButtomDefault title="Linkedin" color="black">
                <FaLinkedin />
            </ButtomDefault>
            <ButtomDefault title="Instagram" color="black">
                <FaInstagramSquare />
            </ButtomDefault>
            <ButtomDefault title="E-mail" color="black">
                <MdAttachEmail/>
            </ButtomDefault>
        </Conteiner>
    )
}