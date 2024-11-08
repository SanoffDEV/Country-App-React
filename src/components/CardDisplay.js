import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import SortContainer from "./SortContainer";

const CardDisplay = ({
  inputValue,
  searchinputValue,
  sortCountry,
  regionOption,
}) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountriesData(res.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }, [searchinputValue]);

  return (
    <div>
      <div className="card-container">
        {countriesData
          .filter((country) => {
            const excludedCountries = ["Saint Martin", "Sint Maarten"];
            return !excludedCountries.includes(country.name.common);
          })
          .filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchinputValue?.toLowerCase())
          )
          .filter((country) => {
            if (regionOption === "Region") {
              return country.region;
            } else if (regionOption === "Europe") {
              return country.region === "Europe";
            } else if (regionOption === "Africa") {
              return country.region === "Africa";
            } else if (regionOption === "Asia") {
              return country.region === "Asia";
            } else if (regionOption === "Oceania") {
              return country.region === "Oceania";
            } else if (regionOption === "Americas") {
              return country.region === "Americas";
            } else if (regionOption === "Antarctic") {
              return country.region === "Antarctic";
            } else if (regionOption === "noRegion") {
              return country.region;
            }
          })
          .sort((a, b) => {
            if (sortCountry === "minToMax") {
              return a.population - b.population;
            } else if (sortCountry === "maxToMin") {
              return b.population - a.population;
            } else if (sortCountry === "alphabetic") {
              return a.name.common.localeCompare(b.name.common);
            }
          })
          .slice(0, parseInt(inputValue))
          .map((country) => (
            <Card key={country.translations.fra.common} country={country} />
          ))}
      </div>
    </div>
  );
};

export default CardDisplay;
