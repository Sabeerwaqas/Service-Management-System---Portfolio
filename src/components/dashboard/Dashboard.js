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
          <Grid item md={3} className="same-classes company-profile-card">
            <div className=" child-one"></div>
            <div className="child-two">
              <h3>Service Managing Tool</h3>
            </div>
            <div className="child-four">
              <ul>
                <li className="list-child">Digital marketing services</li>
              </ul>
            </div>
          </Grid>
          <Grid item md={7} className="same-classes services-cards">
            <div>
              <h2 className="digital-marketing-clients">
                Digital Marketing Clients
              </h2>

              <Grid container>
                <Grid item md={2}>
                  <div className="client-data-card">
                    <div>
                      <h4 className="client-data">Client Name:</h4>
                    </div>
                    <div>
                      <h4 className="client-data">Client Phone:</h4>
                    </div>
                    <div>
                      <h4 className="client-data">Onboarding Date:</h4>
                    </div>
                    <div>
                      <h4 className="client-data"> Service Status:</h4>
                    </div>
                    <div>
                      <h4 className="client-data"> Service Fee:</h4>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
