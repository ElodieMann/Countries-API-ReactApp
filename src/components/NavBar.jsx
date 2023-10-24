import React, { useState } from "react";

const NavBar = ({ setRange, setContinentChecked, continents }) => {
  return (
    <nav>
      <input
        type="range"
        name="volume"
        min="0"
        max="250"
        onClick={(e) => setRange(e.target.value)}
      />


      {continents.map((continent) => (
        <div key={continent}>
          <input
            type="radio"
            id={continent}
            name='continent'
            value={continent}
            onChange={(e) => setContinentChecked(e.target.value)}
          />
          <label htmlFor={continent} style={{ textTransform: "capitalize" }}>
            {continent}
          </label>
        </div>
      ))}

    </nav>
  );
};

export default NavBar;
