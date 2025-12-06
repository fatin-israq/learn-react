import { Suspense } from "react";
import "./App.css";
import Foods from "./Foods";

function App() {
  const food_api = "https://www.themealdb.com/api/json/v1/1/search.php?s=all";

  const foods_promise = fetch(food_api).then((res) => res.json());

  return (
    <>
      <h1>Cook Book</h1>
      <Suspense fallback={<h2>Delicious cookings are on the way...</h2>}>
        <Foods foods_promise={foods_promise} />
      </Suspense>
    </>
  );
}

export default App;
