import React from "react";
import styled from "styled-components";

const Card = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
margin: 0 auto 20px auto;
background: lightblue;
border-radius: 10px;
width: 50%;
`

const CardContent = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;

`

const CardImage = styled.img`
margin=50px; 
`


export default function CharacterCard(props) {
  return (

  <Card>
    <CardImage src={props.image} alt={`${props.name}`}></CardImage>
    <CardContent>
      <h3>{props.name}</h3>
      <p>Gender: {props.gender}</p>
      <p>Location: {props.location}</p>
    </CardContent>

  </Card>

  )  
}