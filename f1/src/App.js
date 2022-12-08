import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Navbaro from "./components/Navbar";
import News from "./Pages/News";
import Raceresults from "./Pages/Raceresults";
import Errorpage from "./Pages/Errorpage";
import DriverStandings from "./Pages/DriverStandings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbaro />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raceresults" element={<Raceresults />} />
        <Route path="/news" element={<News />} />
        <Route path="/driverstandings" element={<DriverStandings />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
