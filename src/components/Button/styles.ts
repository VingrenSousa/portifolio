import styled from "styled-components";
type props={
    cor:"white"|"black",
    icon:boolean,
    title:boolean
}
export const Conteiner = styled.button<props>`
    border:0.05rem solid ${({theme})=>theme.COLOR.white};
    height:50px;
    min-width:${({title})=>title?"200px":"50px"};
    border-radius:${({title,icon})=>!title&&icon?"100%":"26px"};
    display: flex;
    padding: 12px;
    justify-content: center;

    background-color:${({theme,cor})=>(cor==="white")?theme.COLOR.white:theme.COLOR.black};

    color:${({theme,cor})=>(cor==="white")?theme.COLOR.black:theme.COLOR.white};

    align-items: center;
    gap:18px;

    >h3{
        font-family: "Open Sans", sans-serif;
        font-size: 1.2rem;
        font-style:italic
    }



`