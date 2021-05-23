import React from "react";
import polish from "../icons/polish.svg";
import english from "../icons/english.svg";

const Navbar = ({ language, setLanguage, page, setPage }) => {
  const Language = () => {
    if (language === "en") {
      return <img src={english} alt="english"></img>;
    } else {
      return <img src={polish} alt="polish"></img>;
    }
  };

  const switchLanguage = () => {
    if (language === "en") {
      setLanguage("pl");
    } else {
      setLanguage("en");
    }
  };

  const previousPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="Navbar">
      <div className="pageControl">
        <button onClick={previousPage}>
          <i className="gg-arrow-left-r"></i>
        </button>
        <button onClick={nextPage}>
          <i className="gg-arrow-right-r"></i>
        </button>
      </div>
      <div className="languageButton">
        <button onClick={switchLanguage}>
          <Language />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
