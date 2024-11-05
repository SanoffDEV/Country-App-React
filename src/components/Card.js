import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({ country }) => {
  return (
    <div className="card" key={country.name.common}>
      <img
        src={country.flags.svg}
        alt={country.translations.fra.common + "Flag's "}
      />
      <h2>{country.name.common}</h2>
      <h3>{country.capital ? country.capital : "No official Capital"}</h3>
      <h4>
        {"Location : " +
          country.region +
          (country.subregion ? ", " + country.subregion : "")}
      </h4>

      <p>{"Population : " + country.population.toLocaleString()}</p>
      <h5>
        {"Currencie : " +
          (country.currencies
            ? Object.values(country.currencies)[0]?.name
            : "Devise non disponible")}
      </h5>

      <h6>
        {country.languages
          ? Object.keys(country.languages).length > 3
            ? "Main Languages: "
            : Object.keys(country.languages).length > 1
            ? "Languages: "
            : "Language: "
          : "Language unknown"}

        {country.languages
          ? Object.keys(country.languages).length > 3
            ? Object.values(country.languages).slice(0, 3).join(", ")
            : Object.values(country.languages).join(", ")
          : ""}
      </h6>
    </div>
  );
};

export default Card;
