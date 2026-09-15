
import { useEffect, useRef, useState } from "react";
import { Conteiner, ConteinerSkil } from "./styles";
type propsPRojects={
    title:string,
    img:string
    skil:string[],
    description:string,
    directleft?:boolean
}
export default function Projects({directleft=false,title,img,skil,description}:propsPRojects){


    const[visible,setVisible]=useState(false)
    
    const refPtojects=useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
                const entry=entries[0]
                    if(entry.isIntersecting){
                        setVisible(true)
                        console.log("elementos entro")
                    }else{
                        setVisible(false)
                    }
                },{threshold:0.2})
        
                if (refPtojects.current) {
                    observer.observe(refPtojects.current);
                }
        
                return () => observer.disconnect();
          }, []);
    return(
        <Conteiner ref={refPtojects} visible={visible} directleft={directleft} >
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