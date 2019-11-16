import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState()
  const [data, setData] = useState([])
  const [searchedData, setSearchedData] = useState([])


  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setData(response.data.results)
        setSearchedData(response.data.results)
      })
      .catch(err => {
        console.log("You fucked it:", err)
      })
  }, []);

  function search(searchInput) {
    const result = data.filter(card => card.name.includes(searchInput)
    )
    setSearchedData(result)
  }

  const changeHandler = e => {
    setSearchInput(e.target.value)
    search(searchInput)
  }
  return (

    <section className="search-form">
      <form>
        <label>
          Search:
          <input onChange={changeHandler} type="text" />
        </label>
      </form>
      {searchedData.map(ind => {
        return <CharacterCard data={ind} />
      })}
    </section>
  );
}
