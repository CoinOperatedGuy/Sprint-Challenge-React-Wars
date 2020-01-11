import React from 'react';
import {
  Card, CardBody
} from 'reactstrap';

const AnyCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
            <h1>Name: {props.name}</h1>
            <p>Born: {props.birth_year}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default AnyCard;