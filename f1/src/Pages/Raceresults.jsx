import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resultsData from "../resultsData";

function Raceresults() {
  const [year, setYear] = useState("");
  const [ranking, setRanking] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1e2e850ac9msh7c289f39ee50a35p1ca0eajsn229da1eaba8e",
      "X-RapidAPI-Host": "formula-1-all-time-statistics.p.rapidapi.com",
    },
  };
  // fetch
  const fetchResults = async (year) => {
    try {
      const { data } = await axios(
        `https://formula-1-all-time-statistics.p.rapidapi.com/${year}/races/all`,
        options
      );
      console.log(data);
      setRanking(data);
    } catch (err) {
      console.log(err.response);
    }
  };
  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
    fetchResults(year);
    setYear("");
  };
  if ({ year } < 1950) {
    return (
      <div className="alert">
        {" "}
        <h2>Invalid Value</h2>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="page-title">
          <h3>Race Results </h3>
          <p>Blast from the Past</p>
        </div>
      </div>

      <section className="container">
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="search"
              name="search"
              className="form-input"
              placeholder="Enter any Year (1950-Current) "
              //   super important to connect to state.
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />

            <div className="row my-3">
              <div className="col ">
                <button className="btn-red" onClick={handleSubmit}>
                  Search Race Winners
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* // Loading the results */}

      <div className="container">
        <div className="results-row">
          {ranking.map((rank, index) => {
            const { grandPrix, date, driver, team, laps, raceTime } = rank;

            return (
              <div className="card" key={index}>
                <div className="card-info">
                  <div className="">
                    <h3 className="race">
                      {index + 1}:{grandPrix}
                    </h3>
                    <p className="">{date}</p>
                    <p className="">{laps} Laps</p>
                    Total RaceTime: {raceTime}
                  </div>
                  <ul className="">
                    <li className="driver">
                      <h3>{driver}</h3>
                    </li>
                    <li className="">
                      <h5 className="team">{team}</h5>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Raceresults;

// TODO:  https://newsapi.org/v2/everything?q=formula1&language=en&from=2022-10-26&sortBy=publishedAt&pageSize=30&excludeDomains=yahoo.com,Biztoc.com,cryptodaily.co.uk,globenewswire.com&apiKey=706e3f9a85834c848a24dd1ec7f8159f
