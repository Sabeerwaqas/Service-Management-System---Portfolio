import React from "react";
import "./contact.css";
import { Grid, TextField, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
const Contact = () => {
  return (
    <>
      <div>
        <Typography variant="h2" className="contact-heading">
          Contact Us
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6} className="contact-credentials">
            <div>
              <div className="address-container">
                <span>
                  <LanguageIcon />
                </span>
                <span>
                  <Typography className="our-address">Our Address:</Typography>
                </span>
                <small className="address">
                  Office # 12, Mona Square, Opp. Kanzul Iman Masjid, Guru
                  Mandir, Karachi.
                </small>
              </div>
              <div className="address-container">
                <span>
                  <LocalPostOfficeIcon />
                </span>
                <span>
                  <Typography className="our-mailbox">Our Mailbox:</Typography>
                </span>
                <small className="emails">
                  billing@binarynexusinternational.com
                </small>
                <small className="emails">
                  sales@binarynexusinternational.com
                </small>
                <small className="emails">
                  info@binarynexusinternational.com
                </small>
              </div>
              <div className="address-container">
                <span>
                  <PhoneInTalkIcon />
                </span>
                <span>
                  <Typography className="our-phone">Our Phone:</Typography>
                </span>
                <small className="phone">0311-2608281</small>
                <small className="phone">+1 (619) 828-5557</small>
                <small className="phone">0316-2139575</small>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="contact-form">
            <div className="form-container">
            <h6 className="form-filling-queries">
              Please fill the form to discuss your queries.
            </h6>
              <form
                action="https://formsubmit.co/sabeerwaqas.dev@gmail.com"
                method="POST"
              >
                <TextField
                  className="contact-input"
                  name="Sender's Name:"
                  label="Name"
                  size="small"
                  type="text"
                  required
                />
                <TextField
                  className="contact-input"
                  name="Phone No:"
                  label="Phone No. With Country Code"
                  size="small"
                  type="number"
                  required
                />
                <TextField
                  className="contact-input"
                  name="Email"
                  label="Enter your e-mail here"
                  size="small"
                  type="email"
                  required
                />
                <textarea
                  className="text-message"
                  name="message"
                  id="message"
                  cols="23"
                  placeholder="Write your message here."
                  rows="5"
                  required
                ></textarea>
                <button type="submit" className="form-submit-button">
                  Submit
                </button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Contact;
