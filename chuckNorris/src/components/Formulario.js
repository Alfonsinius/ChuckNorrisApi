import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import shortid from "shortid";
import buttonStyles from './Button/buttonStyles';
import selectStyles from './Select/selectStyles';
import contenedor from "./Contenedor/contenedorStyles";
import PropTypes from 'prop-types';


//styled component para el contenedor
const Contenedor = styled.div`
${contenedor};
`;
//styled component para el boton
const Boton = styled.button`
    ${buttonStyles};
`;

//styled component para el select
const Select = styled.select`
    ${selectStyles};
`;
//styled component para el h2
const Nota = styled.h2`
    color: red;
`;

//componente del Formulario donde se solcita la categoria
const Formulario = ({ guardarFrase, guardarCategorias, categoriasChiste}) => {

  //en este caso se utiliza fetch para consultar la api (nativos de javascript)
  //Se utiliza una llamada asíncrona
  
  const consultaAPI = async () => {
    if(categoria===''){
        const api = await fetch("https://api.chucknorris.io/jokes/random");
        const fraseCategoria = await api.json();
        guardarFrase(fraseCategoria);
    }else{
        const api = await fetch("https://api.chucknorris.io/jokes/random?category="+categoria);
        const fraseCategoria = await api.json();
        guardarFrase(fraseCategoria);
    }
    

    
  };

  //state para almacenar la categoria seleccionada 
  const [categoria, guardarCategoria] = useState('');

 
  //metodo que se encarga de consultar las categorias de los chistes, para esto se utiliza una llamada asíncrona
  const obtenerCategorias = async () => {
    const api = await fetch("https://api.chucknorris.io/jokes/categories");
    const categorias = await api.json();

    guardarCategorias(categorias);
  };

  //constante para cargar los select con las categorias de chiste
  const optionItems = categoriasChiste.map((categoria) => (
    <option key={shortid.generate()}
    >{categoria}</option>
  ));

  //useEffect argar las categorias apenas inicia la aplicacion 
  useEffect(() => {
    obtenerCategorias();
  });

  return (
    <Contenedor>
      <Nota>Nota: Si no selecciona una categoría el sistema escogerá un chiste al azar.</Nota>
      <Select
       name= "categoria"
       onChange={e => guardarCategoria(e.target.value)}
       value={categoria}
      >
        <option 
        onChange={e => guardarCategoria(e.target.value)}
        value = ""
        >--Ninguna categoría seleccionada --</option>
        {optionItems}
      </Select>
      <Boton onClick={consultaAPI}>Obtener Frase</Boton>
    </Contenedor>
  );
};
Formulario.propTypes = {

  guardarFrase: PropTypes.func.isRequired,
  guardarCategorias: PropTypes.func.isRequired,
  categoriasChiste: PropTypes.array.isRequired


}
export default Formulario;
