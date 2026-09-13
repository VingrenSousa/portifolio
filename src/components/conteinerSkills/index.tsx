import { Conteiner } from "./styles";
type propsSkilsConteiner={
    title:string,
    skils:string[],
    color:"black"|"white"
}
export default function ConteinerSkils({title,skils,color}:propsSkilsConteiner){
    return(
        <Conteiner color={color==="white"?true:false}>
            <h1>
                {title}
            </h1>
            <div>
            {
                skils&&
                 skils.map((item,index)=>{
                    return(
                        <span key={index}> 

                            {
                            " "+
                             item 
                             +" "
                            }
                            /
                        </span>
                    )
                 })
            }
            </div>
        </Conteiner>
    )
}