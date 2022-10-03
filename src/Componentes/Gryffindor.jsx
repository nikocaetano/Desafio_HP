import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../Styled/style-gryffindor"

const Gryffindor = () => {
    const [data, setData] = useState([])

    const Api = 'http://hp-api.herokuapp.com/api/characters/house/gryffindor';

    useEffect(() => {
        axios.get(Api)
            .then((res) => {
                setData(res.data);
                console.log(data)
            })
            .catch((error) => {
                console.log('Desculpe não foi possivel concluir sua solicitação', error)
            })
    }, [data])

    return (
        <S.Section>
            {data.slice(0, 9).map((item, index) => (
                <div key={index}>
                    <ul>
                        <S.Name>{item.name}</S.Name>
                        <S.Image src={item.image} alt={item.name} />

                    </ul>
                    <div className="caracteres">
                        <p>{item.species}</p>
                        <p>{item.dateOfBirth}</p>
                        <p>{item.ancestry}</p>
                        <p>{item.patronus}</p>
                    </div>
                </div>
            ))}
        </S.Section>
    )
}

export default Gryffindor