import React from "react";
import { Helmet } from "react-helmet";
import FoodIllus from "assets/images/food-illus.png"
import MainHeader from "components/MainHeader";

const LandingPage = () => {
  return (
    <div>
      <Helmet title="Home" />
      <MainHeader/>
      Find your best restaurent menu anytime
      <img width="500px" src={FoodIllus} alt="food illustration" />
    </div>
  );
};

export default LandingPage;
