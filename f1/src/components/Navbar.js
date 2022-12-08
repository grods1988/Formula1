import React from "react";
import { Link } from "react-router-dom";

const Navbaro = () => {
  return (
    <section>
      <nav className="navbar container">
        <div className="nav-container">
          <div className="logo">
            <h2>finish Line</h2>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/raceresults">race results</Link>
            </li>
            <li>
              <Link to="/news">race news</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <a
                className="twitter-timeline"
                data-lang="en"
                href="https://twitter.com/F1?ref_src=twsrc%5Etfw"
                target="_blank"
              >
                Tweets by F1
              </a>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbaro;
