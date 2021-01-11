
//Carga los estilos para el contenedor de la frase


import { css } from 'styled-components';


const contenedorFraseStyles =  css`
    h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 3rem;
    font-size: 15px;

    &::before {
      content: open-quote;
      font-size: 5rem;
      position: absolute;
      left: 0.5rem;
      top: -2rem;
    }

  }

   /*Si la pantalla mide mas de 800px*/
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 30px;
    }
  }
     /*Si la pantalla mide entre 358 y 220px */
  @media screen and (max-width: 358px) and (min-width: 220px) {
    h1 {
      font-size: 8px;
      margin: -10%;
      &::before {
        content: open-quote;
        font-size: 5rem;
        position: absolute;
      }
    }
  }
  /*Si la pantalla menos de 220px */
  @media screen and (max-width: 220px) {
    h1 {
      font-size: 6px;
      margin: -30%;
      &::before {
        content: open-quote;
        font-size: 5rem;
        position: absolute;
      }
    }
  }
  /*Si la pantalla mide entre 360 y 357px*/
  @media screen and (max-width: 360px) and (min-width: 357px) {
    h1 {
      font-size: 15px;
      margin: -10%;
      &::before {
        content: open-quote;
        font-size: 5rem;
        position: absolute;
      }
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

export default contenedorFraseStyles;
