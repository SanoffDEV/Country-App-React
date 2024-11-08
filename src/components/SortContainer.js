import React, { useState } from "react";
import CardDisplay from "./CardDisplay";

const SortContainer = ({}) => {
  const [inputValue, setInputValue] = useState(250);
  const [searchinputValue, setSearchInputValue] = useState("");
  const [sortCountry, setSortCountry] = useState("maxToMin");
  const [regionOption, setRegionOption] = useState("Region");

  const handleRegionChange = (event) => {
    setRegionOption(event.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="range"
        max="250"
        min="1"
        defaultValue="250"
        className="range-btn"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span>{inputValue}</span>

      <input
        type="search"
        placeholder="Search for a country"
        className="search-btn"
        onChange={(e) => setSearchInputValue(e.target.value)}
      />

      <select value={regionOption} onChange={handleRegionChange}>
        <option value="Region" disabled>
          Region
        </option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antarctic</option>
        <option value="noRegion">No Region</option>
      </select>
      <div className="sort-container">
        <button
          id="alphabetic-sort"
          onClick={() => setSortCountry("alphabetic")}
        >
          Alphabetic
        </button>
        <button
          id="maxToMinHabitant"
          onClick={() => setSortCountry("maxToMin")}
        >
          Max{" "}
        </button>
        <button
          id="minToMaxHabitant"
          onClick={() => setSortCountry("minToMax")}
        >
          Min
        </button>
      </div>
      <div>
        <CardDisplay
          inputValue={inputValue}
          searchinputValue={searchinputValue}
          sortCountry={sortCountry}
          regionOption={regionOption}
        />
      </div>
    </div>
  );
};

export default SortContainer;
