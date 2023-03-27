import React from "react";
import saerch from "../../assets/search.svg";

const Search = () => {
  return (
    <form>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
      />
      <img className="inline h-4 cursor-pointer" src={saerch} alt="Search" />
    </form>
  );
};

export default Search;
