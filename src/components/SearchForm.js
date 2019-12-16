import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard"
import styled from "styled-components";



export default function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(props.characters);
    console.log("Characters!@!!!", props.characters);


useEffect(() => {
  setSearchResults(props.characters);
}, [props.characters]);

      const handleChange = event => {
        setSearchTerm(event.target.value);

        const results = props.characters.filter(character => {
          return character.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });

        setSearchResults(results);
      };
 
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search: </label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      {searchResults.map(character => {
        return (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            gender={character.gender}
            location={character.location.name}
          />
        );
      })}
    </section>
  );
}

