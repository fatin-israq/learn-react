import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800 hover:text-gray-900 transition">
          LEARN REACT
        </h1>
        <div className="flex gap-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-600 hover:text-gray-900 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/mobiles"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-600 hover:text-gray-900 transition"
            }
          >
            Mobiles
          </NavLink>
          <NavLink
            to="/laptops"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-600 hover:text-gray-900 transition"
            }
          >
            Laptops
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-600 hover:text-gray-900 transition"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
