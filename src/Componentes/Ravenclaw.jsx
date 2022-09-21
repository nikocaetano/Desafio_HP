import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../Styled/style-ravenclaw"

const Ravenclaw = () => {
    const [data, setData] = useState([])
    const [busca, setBusca] = useState('')
    
    const Api = 'http://hp-api.herokuapp.com/api/characters/house/ravenclaw';

    /*const Filtro =() => Api.filter(item => {
        return item.name.toLoweCase().includes(busca.toLoweCase())
    });*/

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
            {data.slice(0, 2).map((item) => (
                <ul>
                    <S.Name>{item.name}</S.Name>
                    <S.Image src={item.image} alt={item.name}/>
                    
                </ul>
            ))}
        </S.Section>
    )
}

export default Ravenclaw