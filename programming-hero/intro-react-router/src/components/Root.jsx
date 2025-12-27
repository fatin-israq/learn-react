import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
