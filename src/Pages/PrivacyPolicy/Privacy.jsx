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
              4. Unless the parties otherwise agree in writing 
              <span>Affordable Internet Access Point</span> shall bill customer monthly
              for service provided within the Month. No further notification what so ever
              between the parties shall be required. As all services provided anytime during
              the Month will be billed on a periodic basis.
            </p>
            <p>
              5. In the event of early termination, customer shall pay <span>Affordable Internet Access Point</span>
              monthly recurring charges that would have become due for each monthof the un-expired
              portion(if any) of the current service term.
            </p>
            <p>
              6. This specific terms and conditions will be in force from the activation date
              and will remain enforce for period defined in the section 2 of this application.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
