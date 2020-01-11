import React, { useState, useEffect } from 'react';
import axios from 'axios';
import anyCard from './card';

const Cards = () => {
    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then(res => {
              const dataResults = res.data.results;
              console.log(dataResults);
            })
            .catch(err => console.log(err));
      }, [])
      const [sWData] = useState([]);
    return (
        <div>
            {sWData.map((index, name) => {
                return <anyCard key={index} name={name}/>
            })}
        </div>
    )
}

export default Cards;