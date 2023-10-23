import React from "react";
import "./dashboard.css";
import { Grid } from "@mui/material";
import profileCardImage from "../images/profileCard.gif"

const Dashboard = () => {
  return (
    <>
      <div>
        <Grid container rowGap={2} columnGap={3}>
          <Grid item md={2}  className="same-classes company-profile-card">
              <div className=" child-one">
              <img src={profileCardImage} className="profile-card-img" alt="service management system gif" />
              </div>
              <div className="child-three">2</div>
              <div className="child-two" >3</div>
              <div className="child-four">4</div>
          </Grid>
          <Grid item md={6} className="same-classes services-cards">w</Grid>
          <Grid item md={2} className="same-classes ">e</Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
