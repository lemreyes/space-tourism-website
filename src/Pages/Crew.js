import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Header from "../UI/Header";
import classes from "./Crew.module.css";

import commanderImgPng from "../assets/crew/image-douglas-hurley.png";
import commanderImgWebp from "../assets/crew/image-douglas-hurley.webp";
import specialistImgPng from "../assets/crew/image-mark-shuttleworth.png";
import specialistImgWebp from "../assets/crew/image-mark-shuttleworth.webp";
import pilotImgPng from "../assets/crew/image-victor-glover.png";
import pilotImgWebp from "../assets/crew/image-victor-glover.webp";
import engrImgPng from "../assets/crew/image-anousheh-ansari.png";
import engrImgWebp from "../assets/crew/image-anousheh-ansari.webp";
import NavDots from "../UI/NavDots";
import { getSubpageIndex, navigateSubPages } from "../Utility/helper";

const DATA = require("../assets/data.json");

const Crew = () => {
  const params = useParams();
  console.log(params.crewRole);

  const pngImg = [commanderImgPng, specialistImgPng, pilotImgPng, engrImgPng];
  const webpImg = [
    commanderImgWebp,
    specialistImgWebp,
    pilotImgWebp,
    engrImgWebp,
  ];
  const subPagesArr = [
    `/crew/commander/`,
    `/crew/specialist/`,
    `/crew/pilot/`,
    `/crew/engr/`,
  ];

  // listen to keyboard events after page load
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  // pick index for data access based on crew role
  let index = getSubpageIndex("crew", params.crewRole);

  // navigation for subpages
  let history = useHistory();
  const handleKeyDown = (event) => {
    navigateSubPages(subPagesArr, index, history, event);
  };

  return (
    <main className={classes.pageContainer}>
      <Header />
      <h1 className={classes["pageContainer--headLine"]}>
        <span className={classes["pageContainer--number"]}>02</span> Meet your
        crew
      </h1>
      <div className={classes.mainContent}>
        <div className={classes.picContainer}>
          <picture id={params.crewRole}>
            <source srcSet={webpImg[index]} type="image/webp" />
            <img
              src={pngImg[index]}
              alt={params.crewRole}
              className={classes.mainImage}
            />
          </picture>
        </div>
        <div className={classes.description}>
          <NavDots />
          <article>
            <h2 className={classes.name}>
              <span className={classes.role}>{DATA.crew[index].role}</span>
              {DATA.crew[index].name}
            </h2>
            <p className={classes.bio}>{DATA.crew[index].bio}</p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Crew;
