import { useEffect, useState } from "react";

import dataBase from "../../dataBase";
import ContentCard from "../contentCard/ContentCard";
import SearchBox from "../searchBox/SearchBox";
import SingleCountry from "../SingleCountry/SingleCountry";

import "./content.css";

const Content = () => {
  const [data, setData] = useState(dataBase);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [params, setParams] = useState({ keyword: "", region: "" });
  const [country, setCountry] = useState([]);

  useEffect(() => {
    filter(params);
  }, [params]);

  const getParams = (paramsObj) => {
    setParams(paramsObj);
  };

  const filter = (params) => {
    const { keyword, region } = params;

    const filteredData = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(keyword.toLowerCase()) &&
        item.region === region
      );
    });

    setFilteredCountries(filteredData);
  };

  const getSingleCountry = (name) => {
    const countryData = data.filter((item) => item.name === name);
    setCountry(countryData);
  };

  const handleCklick = () => {
    setCountry([]);
  };

  const countries =
    filteredCountries && filteredCountries.length > 0
      ? filteredCountries
      : data;

  return (
    <>
      {country.length === 0 ? (
        <div
          className={`container content__container ${
            countries.length <= 2 ? "content__container--start-positioned " : ""
          }`}
        >
          <SearchBox getParams={getParams} params={params} />
          {filteredCountries.length === 0 && params.region !== "" ? (
            <h1>Not found...</h1>
          ) : (
            countries.map((country, index) => {
              return (
                <ContentCard
                  key={index}
                  flag={country.flags.png}
                  countryName={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  showSingleCountry={() => getSingleCountry(country.name)}
                />
              );
            })
          )}
        </div>
      ) : (
        <SingleCountry country={country[0]} onClick={handleCklick} />
      )}
    </>
  );
};

export default Content;
