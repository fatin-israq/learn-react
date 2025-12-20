import { Suspense } from "react";
import "./App.css";
import Packages from "./components/Packages";
import axios from "axios";

function App() {
  const packagesPromise = axios.get("packages.json");
  return (
    <>
      <h1 className="text-5xl text-center pb-20 font-bold">Our Packages</h1>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Packages packagesPromise={packagesPromise}></Packages>
      </Suspense>
    </>
  );
}

export default App;
