import React, { use } from "react";
import Package from "./Package";

const Packages = ({ packagesPromise }) => {
  const response = use(packagesPromise);
  const packagesData = response.data;
  return (
    <>
      {packagesData.map((pkg) => (
        <Package id={pkg.id} pkg={pkg}></Package>
      ))}
    </>
  );
};

export default Packages;
