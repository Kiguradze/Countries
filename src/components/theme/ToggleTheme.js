import "./toggleTheme.css";

const ToggleTheme = ({ theme, onclick }) => {
  return (
    <div className="toggle__theme-container">
      <div className="container theme__box">
        <h2>Where in the world</h2>
        <div className="theme__toggler" onClick={onclick}>
          {theme === "dark" ? (
            <ion-icon name="sunny-outline"></ion-icon>
          ) : (
            <ion-icon id="theme__toggler--icon" name="moon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleTheme;
