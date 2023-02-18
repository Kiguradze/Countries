import React from "react";
import "./singleCountry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Opacity } from "@material-ui/icons";

const SingleCountry = ({ country, onClick }) => {
  // const languages = country.languages((language) => language.name);
  let formatedPopulation = new Intl.NumberFormat().format(country.population);

  return (
    <div className="singleCountry__container">
      <button className="content__button" onClick={onClick}>
        <FontAwesomeIcon id="arrow__left--long" icon={faArrowLeftLong} />
        Back
      </button>
      <div className="content">
        <div className="content__image-container">
          <img src={country.flag} alt={`${country} flag`} />
        </div>
        <div className="content__desc">
          <div className="content__desc-details">
            <div className="left__col">
              <h1>{country.name}</h1>
              <p>
                Native Name: <span>{country.nativeName}</span>
              </p>
              <p>
                Population: <span>{formatedPopulation}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
            <div className="right__col">
              <p>
                Top Level Domain: <span>{country.topLevelDomain}</span>
              </p>
              <p>
                Currencies:{" "}
                <span>{country.currencies && country.currencies[0].name}</span>
              </p>
              <p>
                Languages:
                <span>
                  {country.languages
                    .map((language) => language.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="content__desc-borders">
            <p className="content__desc-borders--list">
              Border Countries:
              {country.borders ? (
                country.borders.map((border) => (
                  <span key={Math.random()}>{border}</span>
                ))
              ) : (
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    opacity: "0.8",
                  }}
                >
                  None
                </p>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
