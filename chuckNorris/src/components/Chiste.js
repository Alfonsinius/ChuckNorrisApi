import React from "react";
import styled from "@emotion/styled";
import contenedor from "./Contenedor/contenedorStyles";
import contenedorFraseStyles from "./Contenedor/contenedorFraseStyles";
import PropTypes from 'prop-types';

//Este componente se encarga de mostrar el h1 con el chiste.

const Contenedor = styled.div`
  ${contenedor};
`;
const ContenedorFrase = styled.div`
    ${contenedorFraseStyles};

`;

const Chiste = ({ frase }) => {
  //para saber si el objeto tiene información dentro.
  if (Object.keys(frase).length === 0) return null;

  return (
    <Contenedor>
      <ContenedorFrase>
        <h1>{frase.value}</h1>
      </ContenedorFrase>
    </Contenedor>
  );
};

Chiste.propTypes = {

  frase: PropTypes.object.isRequired

}

export default Chiste;
