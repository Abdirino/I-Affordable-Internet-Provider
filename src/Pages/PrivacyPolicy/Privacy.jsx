import React from "react";
import "./privacy.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="Privacy">
        <div className="privacy">
          <h1>Terms & Conditions</h1>
          <div className="policies">
            <p>
              1. <span>Affordable Internet Access Point</span> Shall provide
              Service covered us per the application for the transmission od
              Data traffic.
            </p>
            <p>
              2. Unless the parties otherwise agrees in writing any service
              request by customer shall be provided by{" "}
              <span>Affordable Internet Access Point</span> for a minimum
              duration of one year (12 Months) from the activation date .If
              customer terminates service before the expiry of the minimum
              period, Payment for the remaining period shall remain due un full.
            </p>
            <p>
              3. Unless the parties otherwise agree in writing{" "}
              <span>Affordable Internet Access Point</span> shall bill customer
              according to the section 2(above) as per the application form. No
              further notification between the parties shall be required.
            </p>
            <p>
              <span>Affordable Internet Access Point</span> Shall provide
              Service covered us per the application for the transmission od
              Data traffic.
            </p>
            <p>
              <span>Affordable Internet Access Point</span> Shall provide
              Service covered us per the application for the transmission od
              Data traffic.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
