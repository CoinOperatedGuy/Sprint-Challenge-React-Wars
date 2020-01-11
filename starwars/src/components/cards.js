import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnyCard from './card';

const Cards = (props) => {
    const [sWData, setsWData] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then(res => {
            //   const dataResults = res.data.results;
            //   console.log(dataResults);
              setsWData(res.data.results)
            })
            .catch(err => console.log(err));
      }, [])
      
    
      return (
        <div>
            {sWData.map(() => {
                return <AnyCard />
            })}
        </div>
    )
}

export default Cards;