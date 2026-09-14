import styled from "styled-components";
type directleft={

}
export const Conteiner =styled.div<{directleft:boolean}>`
    display: flex;
    padding: 22px;
    width: 100%;
    gap:10px;
    align-items: center;
    flex-direction:${({directleft})=>directleft?"row-reverse":"row"};

    >div{
        width: 40%;
        display: flex;
        flex-direction:column;
        gap:30px;

        >h1{
            font-weight:300;
            font-size:2rem;
        };

    };
    >img{
         width: 60%;
         height: fit-content;
         border:none;
         
    };
    .divButton{
        display: flex;
        flex-wrap:wrap;
        gap:10px;
        
       
        
    }
    .divDescription{
        >p{
            font-size:1.1rem;
            font-weight:200;
            color:${({theme})=>theme.COLOR.cinza_100};
        }
    }


@media screen and (max-width: 1200px) {
    flex-direction:column;
    padding: 5px;
    gap: 100px;

    >div{
        width: 100%;
        display: flex;
        
        
        >h1{
            font-weight:300;
            font-size:1rem;
        };

    };

        >img{
         width: 100%;
         height: fit-content;
         border:none;
         
    };
}
`

export const ConteinerSkil=styled.div`
    border:1px solid ${({theme})=>theme.COLOR.white};
    border-radius:30px;

    display: flex;
    justify-content: center;
    align-items:center;
    padding: 10px;

    font-size:1.1rem;

    font-weight:200;
`