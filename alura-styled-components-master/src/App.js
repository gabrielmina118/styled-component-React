import React, { useState } from "react";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyled";
import { ThemeProvider } from 'styled-components'
import { temaClaro, temaEscuro } from './Components/Ui/temas'
import { BtnTema } from "./Components/Ui/index";
import SwitchTheme from "./Components/SwitchTheme";


function App() {
  const [tema, setTema] = useState(true)

  const toggleTema = () => {
    setTema(!tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitchTheme tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
