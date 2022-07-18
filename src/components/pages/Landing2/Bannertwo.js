import React from "react";
import "../../pages/styles/Banner.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
const Banner = () => {
  return (
    <div className="banner-home b-two">
      <div className="title">
        <h1>
          <FormattedMessage
            id="best-education"
            defaultMessage="Best educational institutions for your kids"
          />
        </h1>
        <p>
          <FormattedMessage
            id="best-education2"
            defaultMessage="KosovaEducation collaborates with the best institutions of Kosova to bring the best 
opportunities to your kids"
          />
        </p>
        <Link to="/">
          {" "}
          <FormattedMessage
            id="best-education3"
            defaultMessage="See all institutions"
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
