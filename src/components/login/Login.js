import React, { useState } from "react";
import "./login.css";
import Logo from "../../components/images/logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        history("/dashboard");
      })
      .catch((error) => {
        console.log("Error Found");
      });
  };

  return (
    <>
      <div className="container">
        <div className="login_form_container Grid container sm={12}">
          <div>
            <img src={Logo} className="logo" alt="Binary Nexus Logo" />
            <h6 className="admin-login">Admin LogIn</h6>
            <hr className="form-hr" />
          </div>
          <form onSubmit={(e) => signIn(e)}>
            <div>
              <input
                className="email_input"
                type="email"
                name="email"
                id="admin-email"
                placeholder="Enter your e-mail here   "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className="password_input"
                type="password"
                name="password"
                id="admin-email"
                placeholder="Enter your password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className="signin-btn" type="submit">
                LogIn
              </button>
            </div>
            {/* <div className="signup-link">
              <a href="">Don't have an account? SignUp Here</a>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
