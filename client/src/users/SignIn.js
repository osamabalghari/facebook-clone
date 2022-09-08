import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

const SignIn = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const login = async () => {
    const response = await fetch("http://localhost:3002/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInput.email,
        password: userInput.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      console.log(json.token);
      localStorage.setItem("token", json.token);
      navigate("/profile");
    }
  };
  const change = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <div class="container mt-5 pt-5 d-flex flex-column flex-lg-row justify-content-evenly">
      <div class="text-center text-lg-start mt-0 pt-0 mt-lg-5 pt-lg-5">
        <h1 class="text-primary fw-bold fs-0">flexbook</h1>
        <p class="w-75 mx-auto fs-4 mx-lg-0">
          Flexbook helps you connect and share with the people in your life.
        </p>
      </div>

      <div style={{ maxWidth: "28rem", width: "100%" }}>
        <div class="bg-white shadow rounded p-3 input-group-lg">
          <input
            type="email"
            class="form-control my-3"
            placeholder="Email address or phone number"
            name="email"
            value={userInput.email}
            onChange={change}
          />
          <input
            type="password"
            class="form-control my-3"
            placeholder="Password"
            name="password"
            value={userInput.password}
            onChange={change}
          />
          <button class="btn btn-primary w-100 my-3" onClick={login}>
            Log In
          </button>
          <Link to="#" class="text-decoration-none text-center">
            <p>Forgotten password?</p>
          </Link>

          <hr />
          <SignUp />
        </div>

        <div class="my-5 pb-5 text-center">
          <p class="fw-bold">
            <Link to="#" class="text-decoration-none text-dark">
              Createa a Page
            </Link>{" "}
            <span class="fw-normal">for a celebrity, band or business.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
