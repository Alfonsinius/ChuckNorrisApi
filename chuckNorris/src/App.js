import styled from "@emotion/styled";
import { useState } from "react";
import Chiste from "./components/Chiste";
import Formulario from "./components/Formulario";

//Componente principal que encargado de mostrar la aplicacion de chistes 

//style component de contenedor de app
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;



function App() {
  //state de frases
  const [frase, guardarFrase] = useState({});
  const [categoriasChiste, guardarCategorias] = useState([]);

  return (
    <Contenedor>
      <Chiste frase={frase} />

      <Formulario
        guardarFrase={guardarFrase}
        guardarCategorias={guardarCategorias}
        categoriasChiste={categoriasChiste}
      />
    </Contenedor>
  );
}

export default App;
