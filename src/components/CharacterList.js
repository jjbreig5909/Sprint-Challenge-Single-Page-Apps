import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchForm from "./SearchForm"
import styled from "styled-components";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
        console.log(response);
      })
      .catch(error=> {
        console.log("Couldn't get any data!", error);
      });

  }, []);




  return (
    <section className="character-list">
      <h2>The Cast of Rick and Morty</h2>
      <SearchForm characters={characters}/>
      
    </section>
  );
}