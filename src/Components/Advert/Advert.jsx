import React from "react";
import "./advert.css";

import advertIMG from "../../Images/AdvertSec.webp";
import { Link } from "react-router-dom";
import Reveal from "../Reveal/Reveal";

const Advert = () => {
  return (
    <>
      <div className="advert">
        <div className="ad">
          <div className="ad-detail">
            <Reveal>
              <h1>
                Your Personal <span>🔷</span> Speed
              </h1>
            </Reveal>
            <Reveal>
              <h3>
                & Quality Home Connection <span>Starting @Ksh.2500 /Month</span>
              </h3>
            </Reveal>
            <Reveal>
              <p>
                When choosing among the best high speed Internet providers,
                there are several other factors that should be taken into
                consideration besides just the available download speeds.
              </p>
            </Reveal>
            <Reveal>
              <Link to="/package">
                <button className="button">View Plans</button>
              </Link>
            </Reveal>
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
