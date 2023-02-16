import "./search.css";

const Search = ({ getParams, params }) => {
  return (
    <div className="search__container">
      <ion-icon name="search"></ion-icon>
      <input
        onChange={(e) => getParams({ ...params, keyword: e.target.value })}
        className="search__input"
        type="text"
        placeholder="Search for country..."
      ></input>
    </div>
  );
};

export default Search;
