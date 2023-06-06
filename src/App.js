import React, { useState } from "react";
import "./App.css";
import SearchBox from "./Components/SearchBox";
import CardList from "./Components/CardList";

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (inputValue) => {
    setSearchInput(inputValue);
  };
  console.log(searchInput);

  return (
    <div className='app'>
      <h1>Monsters.Inc</h1>
      <SearchBox searchInput={handleChange} />
      <CardList input={searchInput} />
    </div>
  );
};

export default App;
