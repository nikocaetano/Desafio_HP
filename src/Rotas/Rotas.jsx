import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Gryffindor from "../Componentes/Gryffindor"
import Slytherin from "../Componentes/Slytherin"
import Hufflepuff from "../Componentes/Hufflepuff"
import Ravenclaw from "../Componentes/Ravenclaw"
import Staffs from "../Componentes/Staffs"
import * as S from "../Styled/style-rotas"

const Rotass = () => {
    return(
        <BrowserRouter>
        <Caminhos house1="House of Gryffindor" house2="House of Slytherin" house3="House of Hufflepuff" house4="House of Ravenclaw" staff="Staffs"/>
            <Routes>
                <Route path="/gryffindor" element={<Gryffindor />}/>
                <Route path="/slytherin" element={<Slytherin/>}/>
                <Route path="/hufflepuff" element={<Hufflepuff/>}/>
                <Route path="/ravenclaw" element={<Ravenclaw/>}/>
                <Route path="/staffs" element={<Staffs/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotass

const Caminhos = ({house1, house2, house3, house4, staff}) => {
    return(
        <nav>
            <S.Ul>
                <S.Li>
                    <S.Menu to="/gryffindor">{house1}</S.Menu>
                </S.Li>
                <S.Li>
                    <S.Menu to="/slytherin">{house2}</S.Menu>
                </S.Li>
                <S.Li>
                    <S.Menu to="/hufflepuff">{house3}</S.Menu>
                </S.Li>
                <S.Li>
                    <S.Menu to="/ravenclaw">{house4}</S.Menu>
                </S.Li>
                <S.Li>
                    <S.Menu to="/staffs">{staff}</S.Menu>
                </S.Li>
            </S.Ul>
        </nav>
    )
}