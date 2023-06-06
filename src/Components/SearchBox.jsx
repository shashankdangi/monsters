import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchInput }) => {
  const searchValue = (e) => {
    const inputValue = e.target.value.toLowerCase();
    searchInput(inputValue);
  };

  return (
    <div className='input'>
      <input
        className='input'
        type='search'
        placeholder='Search monsters'
        onChange={searchValue}
      />
    </div>
  );
};

export default SearchBox;
