import styled from "styled-components";

export const Conteiner=styled.section`
    width:100% ;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction:column;

  
    >main{  
        width:100% ;
        display: flex;
        flex-direction:row-reverse;
        justify-content:space-between;
        align-items:center;
     
        padding: 50px 0;
        >.divImgProfile{
            width: 40%;
            img{
                border-radius:25px;
                width:500px;
                height: fit-content;
                 filter: grayscale(100%);
            }
        }
    }

    @media screen and (max-width: 1200px) {
        >main{
            flex-direction:column;
            
            .divImgProfile{
                display: flex;
                
                justify-content: center;
                align-items: center;
                width: 90%;
            }
        }
         
    }
     @media screen and (max-width: 700px) {
      
        >main{
        
            
            .divImgProfile{
                >img{
             
                    width:90%;
                   
                }
            }
        }
         
    }
`
export const HedaerAbout=styled.div`
    display: flex;
    flex-direction:row;
    padding: 22px;
    gap:15%;

    >h2{
        font-size: 1rem;
        font-style:italic;
    };
    >div{
        width: 60%;

        >p{
            color:${({theme})=>theme.COLOR.cinza_100};
            font-size: 0.8rem;
            >span{
                font-size: 0.8rem;
                color:${({theme})=>theme.COLOR.white}

            }
        }
    };

    @media screen and (max-width: 700px) {
       display: flex;
       flex-direction:column;
       gap:22px;
       justify-content: center;
       align-items: center;
       text-align:center
         
    }


`

export const Content=styled.div`
    display: flex;
    gap: 22px;
    flex-direction:column;
    padding-left:80px;

     

    >div:hover{
        transform: scale(1.08);
    }
    >div{
       transition: all 0.3s ease; 
    }
    @media screen and (max-width: 1200px) {
        
        align-items: center;
        width: 100%;
        margin-top:22px;
        justify-content: center;
        padding-left:0px;

        >div{
            width:100%;
        }
    };
    
`