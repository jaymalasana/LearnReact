import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <>
      <nav>
        <ul className="flex justify-around">
          <li>
            <Link
              to="/"
              className={`text-3xl font-bold ${
                location.pathname === "/" ? "active: text-orange-600" : "text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-3xl font-bold ${
                location.pathname === "/about" ? "active: text-orange-600" : "text-white"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={`text-3xl font-bold ${
                location.pathname === "/dashboard"
                  ? "active: text-orange-600"
                  : "text-white"
              }`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
