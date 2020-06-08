/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import logo from "../../assets/img/cgo.png";
import { verifyLogin } from "../../data/auth";
import { navigate } from "@reach/router";

import { toaster } from "evergreen-ui";
//lets define css
const centerForm = css`
  margin: 150px auto;
  width: 20%;
  padding: 10px;
  background-color: #2c3338;
`;
const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background-color: #2c3338;
  color: #606468;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
`;

const login = css`
  color: #eee;
  input[type="text"],
  input[type="password"],
  input[type="submit"] {
    border-radius: 0.25rem;
    padding: 16px;
    padding: 1rem;
  }
  label {
    background-color: #363b41;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-left: 20px;
    padding-left: 1.25rem;
    padding-right: 20px;
    padding-right: 1.25rem;
  }

  input[type="password"],
  input[type="text"] {
    background-color: #3b4148;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  input[type="password"]:focus,
  input[type="password"]:hover,
  input[type="text"]:focus,
  input[type="text"]:hover {
    background-color: #434a52;
  }

  input[type="submit"] {
    background-color: #ea4c88;
    color: #eee;
    font-weight: 700;
    text-transform: uppercase;
    width: 100%;
  }

  input[type="submit"]:focus,
  input[type="submit"]:hover {
    background-color: #d44179;
  }
  input {
    background-image: none;
    border: 0;
    color: inherit;
    font: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }
`;
const hidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
const form = css`
  .form {
    margin: -14px;
    margin: -0.875rem;
  }

  .form input[type="password"],
  .form input[type="text"],
  .form input[type="submit"] {
    width: 100%;
  }

  .form__field {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 14px;
    margin: 0.875rem;
  }

  .form__input {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
`;
//end css definitions

const Login = () => {
  //statehooks
  const { loginStatus, setLogin } = useState("false");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const verify = async () => {
    const isAuthenticated = await verifyLogin(username, password);

    if (isAuthenticated === false) {
      toaster.danger("Wrong username / password Combination");
      return;
    } else {
      // return <Redirect noThrow={true} to="/dashboard" />;
      await navigate("/dashboard");
    }
  };

  useEffect(() => {}, []);

  return (
    <div css={fullscreen}>
      <div css={centerForm}>
        <img
          css={css`
            margin-left: 150px;
          `}
          src={logo}
          alt="logo"
          height="100"
          width="100"
        />
        <br />
        <div
          css={css`
            font-size: 24px;
            color: "#fff";
            text-align: center;
          `}
        >
          CarryGo Admin
        </div>
        <br />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            verify();
          }}
          css={[form, login]}
        >
          <div className="form__field">
            <label htmlFor="login__username">
              <span css={hidden}>Username</span>
            </label>
            <input
              id="login__username"
              type="text"
              name="email"
              className="form__input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form__field">
            <label htmlFor="login__password">
              <span css={hidden}>Password</span>
            </label>
            <input
              id="login__password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form__field">
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
