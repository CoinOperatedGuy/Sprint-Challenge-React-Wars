import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Card = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
            <CardTitle>Name: {props.name}</CardTitle>
            <CardSubtitle>Born: {props.birth_year}</CardSubtitle>
            <CardText>Height: {props.height}</CardText>
            <CardText>Weight: {props.weight}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card;