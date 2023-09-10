import React from "react";
import homeLarge from "../assets/home/home_large.jpg"
import homeSmall1 from "../assets/home/home_small_1.jpg"
import homeSmall2 from "../assets/home/home_small_2.jpg"

export const Home = () => {
  return (
    <div>
      <img src={homeLarge} alt="Home" />
      <img src={homeSmall1} alt="Home" />
      <img src={homeSmall2} alt="Home" />
    </div>
  );
};
