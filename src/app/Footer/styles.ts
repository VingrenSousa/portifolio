import styled from "styled-components";

export const Conteiner=styled.footer`
    width:100%;
    margin-top:100px;
    display: flex;
    flex-direction:column;
    min-height:40vh;

    >div{
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
                font-size: 5rem;
            }  
        }
        
    }
    @media screen and ( max-width:750px){
        >div{
        padding-left:30px;

        >div{
              display: flex;
              gap:40px;
            span{
                font-size: 15px;
            };
        
            h1{
                font-size: 4rem;
            }  
        }
        
    }
        
    
    
    }

`

export const ContentFooter=styled.div<{icon:boolean}>`
    width: 95%;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10px;
>div{
    padding:40px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-top:1px solid ${({theme})=>theme.COLOR.cinza_100};
    width: 100%;

    >button{
     
        >h3{
            
        }
    }
   
}

 @media screen and ( max-width:750px){
>div{
   

    >button{
         min-width:100px;
         height:35px;
        >h3{
            font-size: 1rem;
        }
    }
   
}
      
    }
`