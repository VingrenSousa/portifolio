import styled from "styled-components";

export const Conteiner=styled.section`
    width: 100%;
    min-height:calc( 100vh - 70px);
  
   

`
export const MenuScremFull=styled.div`
    display: flex;
    flex-direction:column;
    padding:100px 50px;

    @media screen and ( max-width:750px){
        display: none;
       
        
    }
`

export const MenuScremMobile=styled.div`
    display: none;
    flex-direction:column;
    padding:50px 20px;

    @media screen and ( max-width:750px){
        display: flex;
       
        
    }
`
export const ContentTtile=styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;

    >div{
        display: flex;
        flex-direction:row;
        gap: 8px;
        align-items:center
        
    };
    >h1{
        font-size:10rem
    };
    >.contentDescription{
        margin-left:5%;
        

        text-align: center;
        width: 40%;
        
        >p{
            font-size: 20px;
            color: ${({theme})=>theme.COLOR.cinza_100};
            span{
                
                color: ${({theme})=>theme.COLOR.white};
            };
        }
       
        
    }

    @media screen and ( max-width:1400px){
        
        >h1{
            font-size:8rem
        };
        
    }

     @media screen and ( max-width:1200px){
        
        >h1{
            font-size:6rem
        };
        
    }

     @media screen and ( max-width:930px){
        
        >h1{
            font-size:4rem
        };
        
    }
    @media screen and ( max-width:750px){
        
        
        >div{
          display: flex;
          justify-content: flex-end;
          >h1{
            font-size: 3rem;
          }
        }
        div:first-child{
         
          display: flex;
          justify-content: flex-start;
        }
        
        display: flex;
        flex-direction:column;
        .contentDescription{
            text-align: left;
           
            width: 90%;
            min-height: fit-content;
            padding: 20px 0;
        }
        .contentButtons{
            padding-top:20px;
            justify-content: center;
        }
        
    }
   
`

