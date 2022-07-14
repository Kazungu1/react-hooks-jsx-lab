import React from "react";
import { name, city } from "../data/data.js";
const h1 = {
  color: "firebrick",
};

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={h1}>
        {name} is a Web Developer from {city}
      </h1>
      <name />
    </div>
  );
}

export default Home;
