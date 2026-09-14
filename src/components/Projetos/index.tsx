
import { Conteiner, ConteinerSkil } from "./styles";
type propsPRojects={
    title:string,
    img:string
    skil:string[],
    description:string,
    directleft?:boolean
}
export default function Projects({directleft=false,title,img,skil,description}:propsPRojects){
    return(
        <Conteiner directleft={directleft} >
                <div>
                   <h1>
                      {title}
                   </h1>
                   <div className="divButton">
                    {
                        skil&&
                            skil.map((item,index)=>{
                                return(
                                     <ConteinerSkil key={index}  >
                                        {item}
                                     </ConteinerSkil>
                                )
                            })
                    }    
                   </div>
                   <div className="divDescription">
                     <p>
                        {description}
                     </p>
                   </div>
                </div>
                <img src={img}/>
        </Conteiner>
    )
}