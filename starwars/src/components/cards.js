import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';

const Cards = () => {
    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then(res => {
              const dataResults = res.data.results;
              console.log(dataResults);
            })
            .catch(err => console.log(err));
      }, )
      const dataResults = res.data.results;
      const [sWData] = useState(dataResults);
    return (
        <div>
            {sWData.map((index) => {
                return <Card key={index}/>
            })}
        </div>
    )
}

export default Cards;