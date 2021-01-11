
//Carga los estilos para el botón
import { css } from 'styled-components';


const buttonStyles =  css`
background: -webkit-linear-gradient(
  top left,
  #007d35 0%,
  #007d35 40%,
  #0f574e 100%
);
background-size: 300px;
font-family: Arial, Helvetica, sans-serif;
color: #fff;
padding: 1rem 3rem;
font-size: 2rem;
border: 2px solid black;
margin-top: 2rem;
transition: background-size 0.8s ease;
width:100%;

:hover {
  cursor: pointer;
  background-size: 400px;
}
`;

export default buttonStyles;
