import React from "react";
// import './App.css';
import styled from "styled-components";

const CharCard = styled.div`
  width: 50%;
  background-color: dodgerblue;
  color: white;
  padding: 10px;
  margin: 20px auto;
  border-radius: 20px;
`;

const charactersCard = props => {
  return (
    <CharCard>
      <h3>Name: {props.name}</h3>
      <h3>Eye Color: {props.eyeColor}</h3>
      <h3>Hair Color: {props.hairColor}</h3>
      <h3>Gender: {props.gender}</h3>
    </CharCard>
  );
};

export default charactersCard;
