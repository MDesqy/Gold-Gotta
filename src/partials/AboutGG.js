import React from "react";
import { Link } from "react-router-dom";
import GGAbout from "../images/banner/GG-dummy-1.png";

function AboutGG() {
  return (
    <section>
      <div className="max-w-full flex mx-auto pt-32 px-4 sm:px-6 relative">
        <div className="w-1/2">
          {/* images about */}
          <Link to="/" className="block" aria-label="Gold Gotta">
            <img
              src={GGAbout}
              className="gold-gotta-logo"
              alt="About Gold Gotta"
            ></img>
          </Link>
        </div>
        <div className="w-1/2">
          <h1 className="text-about mb-8 pt-about pl-about">
            * <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum blandit est, id gravida mi facilisis id. Proin malesuada
            dapibus nisi in condimentum condimentum blandit est.
          </h1>
          <p className="weight-thin text-about-sm align-center pl-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum blandit est, id gravida mi facilisis id. Proin malesuada
            dapibus condimentum blandit est, id gravida mi facilisis id.
          </p>
        </div>
      </div>

    </section>
  );
}

export default AboutGG;
