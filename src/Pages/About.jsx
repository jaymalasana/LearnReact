import React from "react";
import { useHistory } from "react-router-use-history";

function About() {
  let history = useHistory();

  const handleHome = () => {
    console.log("About clicked");
    history.push("/");
  };

  const handleDashboard = () => {
    console.log("Dashboard clicked");
    history.push("/dashboard");
  };

  return (
    <>
      <div className="flex justify-center mt-28 text-orange-600 font-bold text-6xl">
        About Page
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={handleHome}
          className="h-9 w-28 m-3 font-bold bg-black text-orange-600 border-solid border-orange-600 border-2"
        >
          Go To Home
        </button>
        <button
          onClick={handleDashboard}
          className="h-9 w-36 m-3 font-bold bg-black text-orange-600 border-solid border-orange-600 border-2"
        >
          Go To Dashboard
        </button>
      </div>
    </>
  );
}

export default About;
