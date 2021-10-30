import React from "react";
import BigButton from "../UI/BigButton";
import Header from "../UI/Header";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <main className={classes.pageContainer}>
      <Header />
        <div className={classes.mainContainer}>
          <article className={classes.articleContainer}>
            <h1 className={classes.headLine}>
              <span className={classes.smallWord}>
                So, you want to travel to
              </span>
              <span className={classes.bigWord}>Space</span>
            </h1>
            <p className={classes.text}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>
          <div className={classes.buttonContainer}>
            <BigButton text="Explore" />
          </div>
        </div>
    </main>
  );
};

export default Home;
