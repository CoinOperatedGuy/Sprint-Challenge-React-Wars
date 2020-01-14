import React from 'react';
import {
  Card, CardBody
} from 'reactstrap';

const AnyCard = (props) => {
  console.log(props);
  return (
    <div className='cardT'>
      <Card>
        <CardBody>
            <h1>Name: {props.name}</h1>
            <p>Born: {props.birth_year}<br />
            Height: {props.height}<br />
            Weight: {props.mass}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default AnyCard;