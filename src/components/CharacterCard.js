import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, CardHeader
} from 'reactstrap';
import Styled from 'styled-components';

const Div = Styled.div`
  display: flex;
  justify-content: center;
`

export default function CharacterCard(props) {
  return (
    <Div>
      <Card body className='lets-try'>
        <Col sm="10">
        <CardBody>
          <CardImg top width="85%" src={props.data.image} alt="Card image cap" />
            <CardTitle className='lets-try-box'>Name: {props.data.name}</CardTitle>
            <CardSubtitle className='lets-try-box'>Species: {props.data.species}</CardSubtitle>
            <CardText className='lets-try-box'>Gender: {props.data.gender}</CardText>
            <Button className='button'>Location</Button>
            <Button className='button'>Episode</Button>
          </CardBody>
        </Col>
      </Card>
    </Div>
  )
}
