import React from "react";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main"
import Rotass from "./Rotas/Rotas";
import * as S from "./Styled/style-main"

function APP(){
  return(
    <section>
      
      <S.GlobalStyle/>
      <Header/>
      <Rotass/>
          
    </section>
  )
}

export default APP
