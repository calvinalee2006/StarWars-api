import React, { useState, useEffect } from "react";
// import ApiInfo from "./components/ApiInfo";
import Homepage from "./components/Homepage";
import SearchBar from "./components/SearchBar";
import Table from "./components/Tabledata";

export default function App() {
  const [starWarsData, setStarWarsData] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((json) => setStarWarsData(json));
  }, []);

  return (
    <>
      <Homepage />
      <SearchBar />
      <Table starWarsData={starWarsData} />

      {/* <ApiInfo /> */}
    </>
  );
}
