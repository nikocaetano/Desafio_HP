import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../Styled/style-slytherin"

function Slytherin(){
    const [data, setData] = useState([])
    
    const Api = 'http://hp-api.herokuapp.com/api/characters/house/slytherin';

    useEffect(() => {
        axios.get(Api)
        .then((res) => {
            setData(res.data);
            console.log(data)
        })
        .catch((error)=>{
            console.log('Desculpe não foi possivel concluir sua solicitação', error)
        })
    }, [data])

    return(
        <S.Section>
            {data.slice(0, 9).map((item) => (
                <ul>
                    <S.Name>{item.name}</S.Name>
                    <S.Image src={item.image} alt={item.name}/>
                    
                </ul>
            ))}
        </S.Section>
    )
}
export default Slytherin