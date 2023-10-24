import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countainer = ({ range, continentChecked }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(data);

  return (
    <div>
      <ul>
        {data.slice(0, range)
        .filter(country => country.continents[0].toLowerCase().includes(continentChecked))
        .map((country, index) => (
          <Card data={data} country={country} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Countainer;
