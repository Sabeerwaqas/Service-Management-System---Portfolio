import React from "react";
import "./dashboard.css";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item md={3} className="same-classes company profile card"></Grid>
          <Grid item md={6} className="same-classes services-cards"></Grid>
          <Grid item md={3} className="same-classes "></Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
