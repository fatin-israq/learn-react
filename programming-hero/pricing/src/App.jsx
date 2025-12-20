import { Suspense } from "react";
import "./App.css";
import Package from "./components/Package";
import Packages from "./components/Packages";
import axios from "axios";

function App() {
  const packagesPromise = axios.get("packages.json");
  return (
    <>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Packages packagesPromise={packagesPromise}></Packages>
      </Suspense>
    </>
  );
}

export default App;
