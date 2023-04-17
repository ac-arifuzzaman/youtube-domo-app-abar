import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import saerchSvg from "../../assets/search.svg";
import { searched } from "../../features/filter/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <img className="inline h-4 cursor-pointer" src={saerchSvg} alt="Search" />
    </form>
  );
};

export default Search;
