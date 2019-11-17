import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import Pagination1 from './Pagination';

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState()
  const [data, setData] = useState([])
  const [searchedData, setSearchedData] = useState([])
  const [page, setPage] = useState()
 

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setData(response.data.results)
        setSearchedData(response.data.results)
      })
      .catch(err => {
        console.log("No Good, you suck:", err)
      })
  }, []);

  useEffect(() => {
    search(searchInput)
  }, [searchInput])

  function search(searchInput) {
    const result = data.filter(card => card.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    setSearchedData(result)
  }

  const changeHandler = e => {
    setSearchInput(e.target.value)
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
        return <CharacterCard key={ind.id} data={ind} />
      })}
      <Pagination1 />
    </section>
  );
}
