import React from "react";
import Helmet from "react-helmet";
import Typing from "react-typing-animation";

const Loader = ({ isMounted }) => {
  return (
    <div className="portfolio-container">
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <div className="portfolio-row">
        <div className="loading">
          <Typing speed={200}>WELCOME</Typing>
        </div>
      </div>
    </div>
  );
};

export default Loader;
