import React from "react";
import { useState, useEffect } from "react";

function Testapi() {
  const [input, setInput] = useState("1988");
  const [ranking, setRanking] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1e2e850ac9msh7c289f39ee50a35p1ca0eajsn229da1eaba8e",
      "X-RapidAPI-Host": "formula-1-all-time-statistics.p.rapidapi.com",
    },
  };

  const fetchResults = async () => {
    try {
      const response = await fetch(
        `https://formula-1-all-time-statistics.p.rapidapi.com/${input}/races/all`,
        options
      );
      const data = await response.json();
      console.log(data);
      setRanking(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResults();
  };

  return (
    <div className="App-header">
      <header className="App">
        <div>
          <h1>F1 Race Results</h1>
          <div>
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="Search">Search Season year </label>
              <input
                className="form-input"
                type="text"
                name="search"
                id="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="2021"
              />
              <button className="btn" type="submit" onSubmit={handleSubmit}>
                Lights out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main>
        {ranking.map((result, index) => {
          const { grandPrix, date, driver, team, laps } = result;
          return (
            <div key={index} className="results">
              <p>Grand Prix: {grandPrix}</p>
              <p>date: {date}</p>
              <p>Winner: {driver}</p>
              <p>Team: {team}</p>
              <p>Total laps : {laps}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Testapi;
