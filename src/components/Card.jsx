import React from "react";

const Card = ({ country }) => {
  return (
    <li className="card">
      <img src={country.flags.png} alt={country.flags.alt} />

      <div className="info">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
