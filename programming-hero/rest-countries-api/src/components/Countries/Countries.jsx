import React from "react";
import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
  return (
    <div>
      <h1>Traveling Countries: {countries.length}</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country country={country} key={country.ccn3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
