import React, { useState } from "react";
import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const countries = use(countriesPromise);

  const handleVisitedCountries = (country, visited) => {
    if (!visited) {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  return (
    <div>
      <h1>Traveling Countries: {countries.length}</h1>
      <h2>Visited Countries: {visitedCountries.length}</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.ccn3}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
