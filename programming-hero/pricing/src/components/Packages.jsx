import React, { use } from "react";
import Package from "./Package";

const Packages = ({ packagesPromise }) => {
  const response = use(packagesPromise);
  const packagesData = response.data;
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-content-center">
        {packagesData.map((pkg) => (
          <Package key={pkg.id} pkg={pkg}></Package>
        ))}
      </div>
    </>
  );
};

export default Packages;
