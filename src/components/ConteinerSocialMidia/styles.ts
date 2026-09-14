import styled from "styled-components";

export const Conteiner=styled.div`

display:flex;
flex-direction: row;

justify-content:center;
padding:10px;
gap: 20px;
flex-wrap:nowrap;


>button{

    >h3{
        font-style:italic;
        font-weight:200;
    };
    height: 40px;
    gap: 10px;
    padding: 10px;

    min-width:150px;


    transition: all 0.3s ease;
    
};
>button:hover{

    margin-left:10px;
    margin-right:10px;

 


    
}

 @media screen and ( max-width:750px){

   flex-wrap:wrap;
   padding:50px;
   
 }


`