import React from "react";
import "./about.css";
import { Typography } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { green } from "@mui/material/colors";
import aboutImage from "../images/about.gif";
const about = () => {
  return (
    <>
      {/* Main Heading  */}
      <Typography
        variant="h4"
        sx={{textAlign: "center" }}
      >
        About Us
      </Typography>
      {/* Grid Layout */}
      <Grid container  spacing={2} my={5} p={2}>
        <Grid  item sm={12}>
          <Box
            component={"div"}
            className="about-grid"
            sx={{
              backgroundColor: "red",
              width: "100%",
              height: "100%",
              padding: "2%",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <p>
              Welcome to Binary Nexus International, your trusted partner for
              digital marketing success. With a passion for delivering
              outstanding results and a dedication to helping businesses thrive
              in the digital landscape, we are here to transform your online
              presence and drive your business forward.
            </p>
            <p className="paragraph-two">
              We are a team of experienced digital marketing professionals who
              are committed to delivering top-notch solutions tailored to your
              unique business needs. With a deep understanding of the
              ever-changing digital landscape and a relentless pursuit of
              excellence, we stay ahead of the curve to provide you with
              innovative strategies that yield tangible results.
            </p>
          </Box>
        </Grid>
        <Grid item sm={12} md={4}></Grid>
      </Grid>
    </>
  );
};

export default about;
