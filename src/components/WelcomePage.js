import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";



export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://timelinecovers.pro/facebook-cover/download/rick-and-morty-uhmm-facebook-cover.jpg"
          alt="rick"
        />
      </header>
    </section>
  );
}
