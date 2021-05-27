import React from "react";
import Card from "components/cards/ProductCard";
import HeroPage from "components/hero/Hero.js";
import { Features } from "components/about/Features.js";
import { Pricing } from "components/pricing/Pricing.js";


const HomePage = ()=> {

  return (
    <div>
      <HeroPage
        heroLargeText="Verified Online Vendors, all in One Place !!! "
        supportingText="Your favourite online vendors from IG, Facebook and Twitter in one place with verification and service rating ."
        trialLink="/signup"
        registerLink="/signup"
      />
      <Features />
      <Card />
      <Pricing />
    </div>
  );
}

export default HomePage;