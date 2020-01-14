import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnyCard from './card';
import './StarWars.css';

const Cards = (props) => {
    const [sWData, setsWData] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then(res => {
              const dataResults = res.data.results;
              console.log(dataResults);
              setsWData(dataResults);
            })
            .catch(err => console.log(err));
      }, [])
      console.log('someData', sWData);
    //   console.log(sWData[0].name)
    
      return (
          <div className='card-container'>
                {sWData.map((anObject, index) => {
                return <AnyCard 
                    key={index} 
                    name={anObject.name}
                    birth_year={anObject.birth_year}
                    height={anObject.height}
                    mass={anObject.mass}
                />
            })}
        </div>
    )
}

export default Cards;