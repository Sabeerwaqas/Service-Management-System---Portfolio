import React from "react";
import "./login.css";
import Logo from "../../components/images/logo.png";

const Login = () => {
  return (
    <>
      <div className="login_form_container Grid container sm={12}">
        <div>
          <img src={Logo} className="logo" alt="Binary Nexus Logo" />
          <h6 className="admin-login">Admin LogIn</h6>
          <hr className="form-hr" />
        </div>
        <form action="">
          <div>
            <input
              className="email_input"
              type="email"
              name="email"
              id="admin-email"
              placeholder="Enter your e-mail here   "
            />
          </div>
          <div>
            <input
              className="password_input"
              type="password"
              name="password"
              id="admin-email"
              placeholder="Enter your password here"
            />
          </div>
          <div>
            <button className="signin-btn">Sign In</button>
          </div>
          <div className="signup-link">
            <a href="">Don't have an account? SignUp Here</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
