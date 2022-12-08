import React from "react";
import JuicerFeed from "react-juicer-feed";
// import Toolbar from "../Toolbar";
// import Navbaro from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";

// const demoFeedId = "juicer";

const Home = () => {
  return (
    <>
      <div>
        {/* <h1 className="alert">
          this section is UNDER-CONSTRUCTION. please visit the other sections
        </h1> */}

        <div className="container" style={{ border: "2px red solid" }}>
          <JuicerFeed feedId={"f1-ed6dead6-bfa9-479d-9015-e69e6564f429"} />
        </div>
      </div>
    </>
  );
};

export default Home;
