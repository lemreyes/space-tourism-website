import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../UI/Header";

import classes from "./Destination.module.css";

import imgMoonPng from "../assets/destination/image-moon.png";
import imgMoonWebp from "../assets/destination/image-moon.webp";
import imgMarsPng from "../assets/destination/image-mars.png";
import imgMarsWebp from "../assets/destination/image-mars.webp";
import imgEuropaPng from "../assets/destination/image-europa.png";
import imgEuropaWebp from "../assets/destination/image-europa.webp";
import imgTitanPng from "../assets/destination/image-titan.png";
import imgTitanWebp from "../assets/destination/image-titan.webp";

import NavSecondary from "../UI/NavSecondary";
import { useParams } from "react-router-dom";
import { navigateSubPages, getSubpageIndex } from "../Utility/helper";

const DATA = require("../assets/data.json");

const Destination = () => {
  const params = useParams();
  const pngImg = [imgMoonPng, imgMarsPng, imgEuropaPng, imgTitanPng];
  const webpImg = [imgMoonWebp, imgMarsWebp, imgEuropaWebp, imgTitanWebp];
  const subPagesArr = [
    `/destination/moon/`,
    `/destination/mars/`,
    `/destination/europa/`,
    `/destination/titan/`,
  ];

  // pick index for data access based on crew role
  let index = getSubpageIndex("destination", params.destinationName);

  // navigation for subpages
  let history = useHistory();
  const handleKeyDown = (event) => {
    navigateSubPages(subPagesArr, index, history, event);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <main className={classes.pageContainer}>
      <Header />
      <h1 className={classes["pageContainer--headLine"]}>
        <span className={classes["pageContainer--number"]}>01</span> Pick your
        destination
      </h1>
      <div className={classes.mainContent}>
        <div className={classes.picContainter}>
          <picture id={params.destinationName}>
            <source srcSet={webpImg[index]} type="image/webp" />
            <img
              src={pngImg[index]}
              alt={params.destinationName}
              className={classes.mainImage}
            />
          </picture>
        </div>
        <div>
          <NavSecondary />
          <article>
            <h2 className={classes.destination}>
              {DATA.destinations[index].name}
            </h2>
            <p className={classes.description}>
              {DATA.destinations[index].description}
            </p>
          </article>
          <div id="stats" className={classes.statsContainer}>
            <div id="distance">
              <h3 className={classes["StatsContainer--heading"]}>
                Avg. Distance
              </h3>
              <p className={classes["StatsContainer--value"]}>
                {DATA.destinations[index].distance}
              </p>
            </div>
            <div id="travel-time">
              <h3 className={classes["StatsContainer--heading"]}>
                Est. Travel Time
              </h3>
              <p className={classes["StatsContainer--value"]}>
                {DATA.destinations[index].travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
