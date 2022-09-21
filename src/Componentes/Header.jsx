import React from "react";
import Foto from "../images/logo2.png"
import * as S from "../Styled/style-header"

export default function Header(){
    return(
        <S.Section>
            <S.Logo src={Foto}/>
        </S.Section>
    )
}