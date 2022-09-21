import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../Styled/style-hufflepuff"

const Hufflepuff = () => {
    const [data, setData] = useState([])
    
    const Api = 'http://hp-api.herokuapp.com/api/characters/house/hufflepuff';

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
            {data.slice(0, 1).map((item) => (
                <ul>
                    <S.Name>{item.name}</S.Name>
                    <S.Image src={item.image} alt={item.name}/>
                    
                </ul>
            ))}
        </S.Section>
    )
}

export default Hufflepuff