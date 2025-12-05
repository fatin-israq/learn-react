import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    visited ? setVisited(false) : setVisited(true);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h3>Country: {country.name.common}</h3>
      <p className="population">Population: {country.population}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
