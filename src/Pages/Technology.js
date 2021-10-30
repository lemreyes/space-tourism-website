import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Header from "../UI/Header";
import NavButton from "../UI/NavButton";

import classes from "./Technology.module.css";

import vehicleImgL from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehicleImgP from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleImgL from "../assets/technology/image-space-capsule-landscape.jpg";
import capsuleImgP from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportImgL from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportImgP from "../assets/technology/image-spaceport-portrait.jpg";

import { getSubpageIndex, navigateSubPages } from "../Utility/helper";

const DATA = require("../assets/data.json");

const Technology = () => {
  const params = useParams();
  console.log(params.tech);

  const landscapeImg = [vehicleImgL, capsuleImgL, spaceportImgL];
  const portraitImg = [vehicleImgP, capsuleImgP, spaceportImgP];
  const subPagesArr = [`/tech/vehicle/`, `/tech/spaceport/`, `/tech/capsule/`];

  // pick index for data access based on crew role
  let index = getSubpageIndex("tech", params.tech);

  // navigation for subpages
  let history = useHistory();
  const handleKeyDown = (event) => {
    navigateSubPages(subPagesArr, index, history, event);
  };

  // listen to keyboard event on page load
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
        <span className={classes["pageContainer--number"]}>03</span> Space
        Launch 101
      </h1>
      <div className={classes.mainContent}>
        <div className={classes.picContainer}>
          <picture id={params.tech}>
            <source
              srcSet={portraitImg[index]}
              media="(min-width:48rem)"
              type="image/jpg"
            />
            <img
              src={landscapeImg[index]}
              alt={params.tech}
              className={classes.mainImage}
            />
          </picture>
        </div>
        <div className={classes.navContainer}>
          <NavButton />
        </div>
        <div className={classes.textContainer}>
          <article>
            <h2 className={classes.name}>
              <span className={classes.pre}>The terminology...</span>
              {DATA.technology[index].name}
            </h2>
            <p className={classes.description}>
              {DATA.technology[index].description}
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Technology;
