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
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        About Us
      </Typography>
      {/* Grid Layout */}
      <Grid container spacing={2} my={5} p={2}>
        <Grid item sm={12}>
          <Box
            component={"div"}
            className="about-grid"
            sx={{
              backgroundColor: "#1F82BD",
              width: "100%",
              height: "100%",
              padding: "2%",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              repellat ipsam nesciunt vel doloremque blanditiis ipsa aperiam
              cum, voluptatem deserunt ea assumenda dignissimos temporibus, hic
              quos impedit atque explicabo et?
            </p>
            <p className="paragraph-two">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              adipisci recusandae ex quibusdam optio? Rem praesentium corporis
              accusantium obcaecati, soluta vitae pariatur temporibus
              perspiciatis rerum officiis eos debitis aliquid fuga voluptatum
              nobis fugiat consequatur quod ipsum repudiandae reiciendis
              suscipit sed aut libero explicabo? Rem, neque!
            </p>
          </Box>
        </Grid>
        <Grid item sm={12} md={4}></Grid>
      </Grid>
    </>
  );
};

export default about;
