import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardDisplay = ({ inputValue, searchinputValue, sortCountry }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [countriesPop, setCountriesPop] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountriesData(res.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }, []);

  return (
    <div className="card-container">
      {countriesData
        .slice(0, parseInt(inputValue))
        .sort((a, b) => {
          if (sortCountry === "minToMax") {
            return a.population - b.population;
          } else if (sortCountry === "maxToMin") {
            return b.population - a.population;
          } else if (sortCountry === "alphabetic") {
            return a.name.common.localeCompare(b.name.common);
          }
        })
        .filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(searchinputValue.toLowerCase());
        })
        .map((country) => (
          <Card key={country.translations.fra.common} country={country} />
        ))}
    </div>
  );
};

export default CardDisplay;
