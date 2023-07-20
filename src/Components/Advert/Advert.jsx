import React from "react";
import "./advert.css";

import advertIMG from "../../Images/Advert Img.jpg";
import { Link } from "react-router-dom";

const Advert = () => {
  return (
    <>
      <div className="advert">
        <div className="ad">
          <div className="ad-detail">
            <h1>Your Personal <span>🔷</span> Speed</h1>
            <h3>
              & Quality Home Connection <span>Starting @3000 /Month</span>
            </h3>
            <p>
              When choosing among the best high speed Internet providers, there
              are several other factors that should be taken into consideration
              besides just the available download speeds.
            </p>
            <Link to='package'>
              <button className="button">View Plans</button>
            </Link>
          </div>
          <div className="ad-image">
            <img src={advertIMG} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Advert;
