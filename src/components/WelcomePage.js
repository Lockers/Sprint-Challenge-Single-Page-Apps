import React from "react";
import Styled from 'styled-components';

const Header = Styled.header`

  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
`
export const Button = Styled.button`
  margin: 1rem;
  padding: 1rem;
  width: 10rem;
  height: auto;
  background-color: dodgerblue;
  color: white;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Header>
    </section>
  );
}
