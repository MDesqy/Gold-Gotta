import React from "react";

import Header from "../partials/Header";

import BannerHome from "../partials/BannerHome";
import AboutGG from "../partials/AboutGG";
import MusicWidget from '../partials/MusicWidget';
import Roadmap from "../partials/Roadmap";

import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <BannerHome />
        <AboutGG />
        <Roadmap />
        <MusicWidget />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
