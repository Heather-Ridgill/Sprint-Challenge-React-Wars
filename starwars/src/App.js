import React, { useState, useEffect } from "react";
// import "./App.css";
import axios from "axios";
import StarCard from "../src/components/StarCard.js";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)

      .then(dataObj => {
        console.log(`dataObj`, dataObj);

        // get Array
        setCharacters(dataObj.data.results);
      })

      .catch(err => {
        alert(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <div>
      {
          characters.map((character, i) => {
            return <character key={i} name={character.name} eyeColor={character.eye_color} hairColor={character.hair_color} gender={character.gender} />
          })
        }
        </div>
    </div>
  );

  export default App;
