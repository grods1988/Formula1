import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function DriverStandings() {
  // const [year, setYear] = useState("");
  const [ranking, setRanking] = useState([]);

  const url = "https://formula-1-standings.p.rapidapi.com/standings/drivers";
  const options = {
    url: url,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f5c2f0a368msh6e31f8a3c75f294p1df636jsnfcac5d1b5254",
      "X-RapidAPI-Host": "formula-1-standings.p.rapidapi.com",
    },
  };

  // fetch
  const fetchResults = async () => {
    try {
      const { data } = await axios(options);
      console.log(data);
      //   setRanking(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  fetchResults();
  return (
    <div>
      <h1>Driver Standings</h1>
    </div>
  );
}

export default DriverStandings;
