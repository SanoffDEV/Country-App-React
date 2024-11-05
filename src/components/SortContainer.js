import React, { useState } from "react";
import CardDisplay from "./CardDisplay";

const SortContainer = () => {
  const [inputValue, setInputValue] = useState(36);
  const [searchinputValue, setSearchInputValue] = useState("");
  const [sortCountry, setSortCountry] = useState("maxToMin");

  return (
    <div className="input-container">
      <input
        type="range"
        max="250"
        min="1"
        defaultValue="36"
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

      <select>
        <option>//Continent//</option>
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
          onClick={() => setSortCountry("MinToMax")}
        >
          Min
        </button>
      </div>
      <div>
        <CardDisplay
          inputValue={inputValue}
          searchinputValue={searchinputValue}
          sortCountry={sortCountry}
        />
      </div>
    </div>
  );
};

export default SortContainer;
