import React from "react";
import "./dashboard.css";
import { Grid } from "@mui/material";
import profileCardImage from "../images/profileImg.jpeg";
// import profileImage from "../images/profileImg.jpeg";

const Dashboard = () => {
  return (
    <>
      <div>
        <Grid container rowGap={2} columnGap={3}>
          <Grid item md={2}  className="same-classes company-profile-card">
              <div className=" child-one">
              <img src={profileCardImage} className="profile-card-img" alt="service management system gif" />
              </div>
              <div className="child-two" >
              <h3>Service Managing Tool</h3>
              </div>
              <div className="child-four">
                <ul>
                  <li className="list-child">Digital marketing services</li>
                </ul>
              </div>
          </Grid>
          <Grid item md={6} className="same-classes services-cards">
            <div>
              <h2 className="digital-marketing-clients">
                Digital Marketing Clients
              </h2>
            </div>
          </Grid>
          <Grid item md={2} className="same-classes">e</Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
