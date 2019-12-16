import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchForm from "./SearchForm"
import styled from "styled-components";


const PageButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 5px 5px;
  background: black;
  color: white;
`;

const ButtonContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  function getCharactersNext() {
    setPage(nextPage);
  }

  function getCharactersPrevious() {
    if (previousPage === "") {
      alert("Can't go back any more!");
    } else {
      setPage(previousPage);
    }
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(page)
      .then(response => {
        setCharacters(response.data.results);
        setNextPage(response.data.info.next);
        setPreviousPage(response.data.info.prev);
        console.log(response);
      })
      .catch(error => {
        console.log("Couldn't get any data!", error);
      });
  }, [page]);

  return (
    <section className="character-list">
      <h2>The Cast of Rick and Morty</h2>
      <ButtonContainer>
        <PageButton onClick={getCharactersPrevious}>Previous Page</PageButton>
        <PageButton onClick={getCharactersNext}>Next Page</PageButton>
      </ButtonContainer>
      <SearchForm characters={characters} />
    </section>
  );
}