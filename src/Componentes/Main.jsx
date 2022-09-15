import React, { useState, useEffect } from "react";
import axios from "axios";

function API(){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://hp-api.herokuapp.com/api/characters')
        .then((res) => {
            setData(res.data);
            console.log(data)
        })
        .catch((error)=>{
            console.log('Desculpe não foi possivel concluir sua solicitação', error)
        })
    }, [data])

    return(
        <section>
            {data.slice(0, 25).map((item) => (
                <ul>
                    <li>{item.name}</li>
                    <img src={item.image} alt={item.name}/>
                </ul>
            ))}
        </section>
    )
}

export default API