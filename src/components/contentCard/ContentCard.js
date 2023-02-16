import "./contentCard.css";

const ContentCard = ({
  flag,
  countryName,
  population,
  region,
  capital,
  showSingleCountry,
}) => {
  let formatedPopulation = new Intl.NumberFormat().format(population);
  return (
    <div className="content__card" onClick={showSingleCountry}>
      <img src={flag} alt="" />
      <p className="card__text card__country--name">{countryName}</p>
      <p className="card__text card__country--population">
        <span>Population: </span>
        {formatedPopulation}
      </p>
      <p className="card__text card__country--regions">
        <span>Regions: </span>
        {region}
      </p>
      <p className="card__text card__country--capitals">
        <span>Capital: </span>
        {capital}
      </p>
    </div>
  );
};
export default ContentCard;
