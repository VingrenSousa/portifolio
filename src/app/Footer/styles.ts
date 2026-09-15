import styled from "styled-components";

export const Conteiner=styled.footer`
    width:95%;
    margin-left:2.5%;
    margin-top:100px;
    display: flex;
    flex-direction:row;
    min-height:40vh;

    border-top:1px solid ${({theme})=>theme.COLOR.cinza_500};
    
    align-items:center;
    

    .conteinerTitle{
        
        display: flex;
        flex-direction:column;
        padding-left:30px;

        >div{
              display: flex;
              gap:50px;
            span{
                font-size: 16px;
            };
        
            h1{
                font-size: 3rem;
            }  
        }
        
    }
    @media screen and ( max-width:750px){

        flex-direction:column;
        .conteinerTitle{
            

            >div{
                display: flex;
                gap:40px;
                span{
                    font-size: 15px;
                };
            
                h1{
                    font-size: 2rem;
                }  
            }
        
        }
    }

`

export const ContentFooter=styled.div<{icon:boolean}>`
   
    width: 100%;
    height: 200px;
    padding: 20px;
    justify-content: center;
    align-items:center;
   
  
        >div{
            width: 100%;
            height: 100%;
            display: flex;
            flex:1;
            border:2px solid ${({theme})=>theme.COLOR.cinza_500};
            flex-direction:column;
            gap: 10px;
            justify-content: center;
            padding:30px;
            
            text-decoration:none;
             >a{
                color:${({theme})=>theme.COLOR.cinza_100}
             }
        
        }

 @media screen and ( max-width:750px){
    >div{
    justify-content: center;
    align-items:center

    
    
    }
      
}
`