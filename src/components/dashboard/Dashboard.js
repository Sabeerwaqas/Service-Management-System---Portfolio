import React, { useState } from "react";
import "./dashboard.css";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import create from "../../app/firebaseSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    client_name: "",
    client_number: "",
    onboarding_date:"",
    service_status: "",
    service_fee:""
  })

  return (
    <>
      <div>
        <Grid container rowGap={2} columnGap={3}>
          <Grid item md={3} className="same-classes company-profile-card">
            <div className="child-two">
              <h3>Service Managing Tool</h3>
              <hr />
            </div>
            <div className="child-four">
              <form action="">
                <div className="client-form-input">
                  <input
                    name="client_name"
                    value=""
                    type="text"
                    placeholder="Enter client name here."
                    className="data-input"
                  />
                </div>
                <div className="client-form-input">
                  <input
                    name="client_number"
                    value=""
                    type="number"
                    placeholder="Enter client phone."
                    className="data-input"
                  />
                </div>
                <div className="client-form-input">
                  <input
                    name="onboarding_date"
                    value=""
                    type="date"
                    placeholder="Enter client phone here."
                    className="data-input"
                  />
                </div>
                <div className="client-form-input">
                  {/* <label htmlFor="">Service Status</label> */}
                  <select
                    className="data-input"
                    name="client_status"
                    id="client_status"
                  >
                    <optgroup label="">
                      <option value="service_status">In Progress</option>
                      <option value="service_status">Completed</option>
                    </optgroup>
                  </select>
                </div>
                <div className="client-form-input">
                  <input
                    name="service_fee"
                    value="service_fee"
                    type="number"
                    placeholder="Enter client service fee."
                    className="data-input"
                  />
                </div>
              </form>
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
