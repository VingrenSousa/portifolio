import styled from "styled-components";

export const Conteiner=styled.header`
    width: 100%;
    max-height:70px;
    position: sticky;
`

export const Content=styled.div`
    display: flex;
    justify-content:space-between;
    padding: 18px;
    align-items:center;

    >h2{
        font-size:1rem;
        font-weight:500;
        font-style:italic
    }
    >section {
        display: flex;
        gap: 22px;

        >button{
            border:none;
            background-color:transparent;
            color:${({theme})=>theme.COLOR.white};
            font-size:0.8rem
        }
    };
    >button{
        border:none;
        background-color:transparent;
        color:${({theme})=>theme.COLOR.white};
         
    }

    @media screen and (max-width: 700px) {
          >section {
            display: none;
          }
    }
    
`
export const Menu=styled.div`
    display: none;
    
    justify-content: center;
    z-index:10;
    background-color:${({theme})=>theme.COLOR.black};
    @media screen and (max-width: 700px) {
          
        display: flex;
          
    }

    >section{
        min-width:90%;
        padding:20px;
       
        display: flex;
        flex-direction:column;
        gap: 12px;
        border:1px solid ${({theme})=>theme.COLOR.white};
        >button{
            border:none;
            background-color:transparent;
            color:${({theme})=>theme.COLOR.white};
            font-size:0.8rem;
            font-style:italic;
        }
    }

`