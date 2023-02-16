import "./filter.css";
import { useState } from "react";

const Filter = ({ getParams, params }) => {
  const [toggle, setToggle] = useState(false);
  const [filterName, setFilterName] = useState("Filter by Region");

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const toggleClick = () => {
    setToggle(() => !toggle);
  };

  return (
    <div className="select__container" onClick={toggleClick}>
      <div className="select__btn">
        <span className="sBtn__text">{filterName}</span>
        <ion-icon name="chevron-down"></ion-icon>
      </div>

      <ul
        className="options"
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        {regions.map((region) => {
          return (
            <li
              key={region}
              className="option"
              onClick={() => {
                setFilterName(region);
                getParams({ ...params, region });
              }}
            >
              <span className="option__text">{region}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
