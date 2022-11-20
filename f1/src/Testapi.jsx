import React from "react";
import { useState, useEffect } from "react";

function Testapi() {
  const [input, setInput] = useState("1950");
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
    <div className="main-app">
      <div className="App-header">
        <header className="App">
          <div>
            <h1 className="heading">Formula one Race Results</h1>
            <p className="howto">
              Please add the Year you want to check the winners of each Grand
              Prix held that year from the first year '1950'
            </p>
          </div>
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
                Search
              </button>
            </form>
          </div>
        </header>
        <main>
          <h3 className="race-count">Total Races Held:{ranking.length}</h3>
          {ranking.map((result, index) => {
            const { grandPrix, date, driver, team, laps } = result;
            return (
              <>
                <div key={index} className="results">
                  <h4>🖲️Grand Prix: {grandPrix}</h4>
                  <p>📅date: {date}</p>
                  <p className="winner">🏁Winner: {driver}</p>
                  <a href="" className="team">
                    🧑‍🤝‍🧑Team: {team}
                  </a>
                  <p>💯Total laps : {laps}</p>
                </div>
              </>
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default Testapi;
