import React from "react";
import "./searchBox.css";
import Search from "../search/Search";
import Filter from "../filter/Filter";

const SearchBox = ({ getParams, params }) => {
  return (
    <div className="search__box">
      <Search getParams={getParams} params={params} />
      <Filter getParams={getParams} params={params} />
    </div>
  );
};

export default SearchBox;
