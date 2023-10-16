import React from "react";
import available from "../images/about.gif";
import arrow from "../images/arrow.gif";
import contact from "../images/contact.gif";
import cube from "../images/cube.gif";
import LanguageIcon from "@mui/icons-material/Language";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import BrushIcon from "@mui/icons-material/Brush";
import SecurityIcon from "@mui/icons-material/Security";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import "./homepage.css";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Homepage = () => {
  return (
    <>
      <Grid container className="home-page">
        <div>
          <h1 data-text="Sabeer Waqas" className="binary-nexus">
            Sabeer Waqas
          </h1>
        </div>
        <Grid item xs={12} md={6}>
          <div>
            {/* <img className="home-page-image" src={animatedImage} alt="" /> */}
          </div>
        </Grid>
      </Grid>
      <div className="horizontal-scroll">
        <marquee width="100%" behavior="" direction="left">
          <span className="scroll scroll-one">
            <span className="scroll-bar-icons">
              <LanguageIcon />
            </span>
            Digital Marketing
          </span>
          <span className="scroll scroll-two">
            <span className="scroll-bar-icons">
              <WebAssetIcon />
            </span>
            Website Development
          </span>
          <span className="scroll scroll-three">
            <span className="scroll-bar-icons">
              <BrushIcon />
            </span>
            Graphic Design
          </span>
          <span className="scroll scroll-four">
            <span className="scroll-bar-icons">
              <ManageSearchIcon />
            </span>
            Search Engine Optimization
          </span>
        </marquee>
      </div>
      <Grid container spacing={2} className="home-page-cards">
        <Grid className="home-cards" item xs={12} md={2}>
          <Box>
            <img className="animated-globe" src={available} alt="" />
          </Box>
        </Grid>
        <Grid className="home-cards" item xs={12} md={2}>
          <Box>
            <img className="animated-arrow" src={arrow} alt="" />
          </Box>
        </Grid>
        <Grid className="home-cards" item xs={12} md={2}>
          <Box>
            <img className="animated-call" src={contact} alt="" />
          </Box>
        </Grid>
        <Grid className="home-cards special-card" item xs={12} md={2}>
          <Box>
            <img className="cube-image" src={cube} alt="" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
