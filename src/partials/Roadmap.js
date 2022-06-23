import React from "react";
import { Link } from "react-router-dom";
import NFTList from "../images/banner/NFT-list-dummy.png";
import GGAbout from "../images/banner/GG-dummy-1.png";

function Roadmap() {
  return (
    <section>
      <div className="max-w-full pb-12 md:pb-16 heading-y-center pl-tagline">
        <h1 className="h1 weight-bold text-center" data-aos="fade-up">
          Roadmap
        </h1>
        {/* <img
          src={NFTList}
          className="align-center pt-12"
          alt="Gold Gotta NFT"
        ></img> */}
      </div>
      <div className="max-w-full flex mx-auto pt-32 px-4 sm:px-6 relative">
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
      </div>
    </section>
  );
}

export default Roadmap;
