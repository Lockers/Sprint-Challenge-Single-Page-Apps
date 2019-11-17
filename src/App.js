import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import { Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import CharacterCard from './components/CharacterCard'

export default function App() {

  return (
    <main>
      <Header />
      <Route path='/' component={WelcomePage} />
      <Route exact path='/search' component={SearchForm} />
    </main>
  );
}
