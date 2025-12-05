import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const countriesPromise = fetch(
  "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,ccn3"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Looking for countries</h3>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
