import React from "react";
import styled from "styled-components";

const PageHeader = styled.header`
margin: auto;
`;

export default function Header() {
  return (
    <PageHeader>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </PageHeader>
  );
}

