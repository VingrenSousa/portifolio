import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100vh;
    
  }

  body {
    background-color: ${({theme})=>theme.COLOR.black};
    color:${({theme})=>theme.COLOR.white};
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-family: "Fira Code", monospace;
    font-optical-sizing: auto;
   
    font-style: normal;
    overflow:auto
    

  };

  

  

  body,
  input,
  span,
  button,
  textarea {
     font-family: "Fira Code", monospace;
     font-optical-sizing: auto;

     font-style: normal;
     font-size: 1rem;
     outline: none;
  } 
  

  a {
    text-decoration: none;
  }

  button,
  a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover,
  a:hover {
    filter: brightness(0.9);
  }
`;