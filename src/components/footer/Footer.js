import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Grid className="footer" container>
        <Grid xs={12} md={6}>
          <h5 className="footer-text">
            Get Connected With Us On Social Media
          </h5>
        </Grid>
        <Grid xs={12} md={6} item>
          <button className="btn-footer">
            <a href="">
              <FacebookIcon />
            </a>
          </button>
          <button className="btn-footer">
            <a href="">
              <LinkedInIcon />
            </a>
          </button>
          <button className="btn-footer">
            <a href="">
              <InstagramIcon />
            </a>
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
