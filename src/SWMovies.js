import React, { useState, useEffect } from "react";
import axios from "axios";

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
      console.log(response);
      setMovie(response.data);
    }
    fetchData();
  }, [number]); //[number] indicates useEffect should run only when number changes. Because useEffect is designed to run every time after render.
  return (
    <div>
      <h1>Pick A Movie</h1>
      <h4>You chose: {number}</h4>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <h1>{movie.title}</h1>
      <h4>{movie.opening_crawl}</h4>
    </div>
  );
}

export default SWMovies;
