import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Countainer from "./components/Countainer";
import React, { useState } from "react";

function App() {
  const [range, setRange] = useState();
  const [continentChecked, setContinentChecked] = useState("");
  const continents = ["africa", "america", "asia", "europe", "oceania"];
  
  return (
    <div className="App">
      <h1>HEYYYY</h1>
      <NavBar
        setRange={setRange}
        setContinentChecked={setContinentChecked}
        continents={continents}
      />
      <Countainer range={range} continentChecked={continentChecked} />
    </div>
  );
}

export default App;
