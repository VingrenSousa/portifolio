import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Conteiner } from "./styles";




type propsButtom={
    color:"white"|"black"
    children?:ReactNode,
    title?:string

}&ButtonHTMLAttributes<HTMLButtonElement>
export default function ButtomDefault({children,color,title,...rest}:propsButtom){
    return(
        <Conteiner title={title?true:false} icon={children?true:false} cor={color} {...rest}>
            {
            children&&
                children
            }

            {title&&
                <h3>
                    {title}
                </h3>
            }
           
        </Conteiner>
    )
}