import styled from "styled-components";
type colorProps={
    color:boolean
}
export const Conteiner=styled.div<colorProps>`

background-color:${({theme,color})=>color?theme.COLOR.white:theme.COLOR.black};
border:0.8px solid ${({theme})=>theme.COLOR.white};
border-radius:25px;
padding: 20px;
max-width:70%;

color:${({theme,color})=>color?theme.COLOR.black:theme.COLOR.cinza_100};
font-weight:300;
font-style:italic;

>h1{
    font-size: 1rem;
    margin-bottom:12px
}
>div span{
    color:${({theme,color})=>color?theme.COLOR.black:theme.COLOR.cinza_100};
    font-weight:300;
    font-style:italic;
}



`