import React, { useState, useEffect } from "react";
import drivers from "./data";

function TestApi() {
  // const [driver] = drivers;
  // console.log(driver.driver);
  const [ranking, setRanking] = useState(drivers);
  const [index, setIndex] = useState(0);
  // const url = "https://formula-18.p.rapidapi.com/driverStanding?year=2021";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "1e2e850ac9msh7c289f39ee50a35p1ca0eajsn229da1eaba8e",
  //     "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
  //   },
  // };
  // const fetchRanks = async () => {
  //   try {
  //     const resp = await fetch(
  //       "https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2021",
  //       options
  //     );
  //     const ranks = await resp.json();
  //     // console.log(ranks);
  //     setRanking(ranks);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const newRanking = ranking.response;
  // console.log(newRanking);
  // useEffect(() => {
  //   fetchRanks();
  // }, []);
  return (
    <div
      className="App"
      key={index}
      style={{
        display: "flex",
        flexDirection: "column",
        flexwrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {/* <h1>Data</h1> */}
      {ranking.map((rank) => {
        // console.log(rank);
        const driverRank = rank.driver;
        const teamRank = rank.team;
        console.log(teamRank);
        console.log(driverRank);

        return (
          <div
            className="team-container"
            style={{
              // display: "flex",
              border: "2px solid black",
              borderRadius: "15px",
              margin: "5px",
              padding: "5px",
            }}
          >
            <div>
              <img
                src={teamRank.logo}
                alt={teamRank.name}
                style={{
                  width: "250px",
                  height: "150px",
                  padding: "5px",
                }}
              />

              <img
                src={driverRank.image}
                alt={driverRank.name}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  border: "1px solid black",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 10px",
                  borderTop: "2px solid black",
                  background: "lightgray",
                }}
              >
                <h4>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "red",
                    }}
                  >
                    {teamRank.name}
                  </a>{" "}
                </h4>
                <h3
                  style={
                    {
                      // border: "2px black dotted",
                      // borderRadius: "50%",
                      // padding: "10px",
                    }
                  }
                >
                  {driverRank.number}{" "}
                </h3>
                <h4>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "red",
                    }}
                  >
                    {driverRank.name}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TestApi;

// return (
//   <div key={position}>
//     <div>
//       <div className="team">
//         <img
//           src={driver.image}
//           alt={position}
//           style={{
//             width: "150px",
//             height: "150px",
//             borderRadius: "50%",
//           }}
//         />
//         <img
//           src={team.logo}
//           alt={team.name}
//           style={{
//             width: "250px",
//             height: "150px",
//             borderRadius: "10%",
//           }}
//         />
//         {/* NOTE */}
//         <p>{driver.name}</p>
//       </div>
//       <div>
//         <h5>Championship Position:{position}</h5>
//         <div className="name">
//           '
//           <h4>
//             {driver.name},{driver.abbr}
//           </h4>
//         </div>
//         <div className="carNum">
//           <h1>{driver.number}</h1>
//         </div>
//       </div>
//       <p>
//         Total points for {season} :{points}
//       </p>
//     </div>
//   </div>
// );
