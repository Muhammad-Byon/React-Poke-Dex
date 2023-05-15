import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

function HLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((response) => {
        localStorage.setItem("authToken", true);
        navigate("/");
      });
  };

  return (
    <div className="hero min-h-full flex flex-col justify-center  px-6 py-12 lg:px-8 ">
      <img
        className="mx-auto h-20 w-auto"
        src="../../img/logo.png"
        alt="Your Company"
      />
      <h1 className="text-5xl font-bold mb-4">Login now!</h1>
      <p className="text-base mb-6">Pokemon Need To Login</p>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mb-16 ">
        <div className="card-body ">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered input-ghost text-black"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered input-ghost text-black"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <a href="/#" className="font-semibold text-gray-600 text-sm mt-0" style={{ float: "right" }} >
              Forgot Password
            </a>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-black" type="submit">
                Login
              </button>
            </div>
            <p className="mt-5 text-center text-sm text-gray-500">
              you don't have an account? click to{" "}
              <a
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HLogin;