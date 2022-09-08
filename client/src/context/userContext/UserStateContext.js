import React, { useState, useEffect } from "react";
import userContext from "./userContext";

const UserStateContext = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState([]);
  const showUserData = async (token) => {
    const response = await fetch("http://localhost:3002/api/auth/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    console.log(data.user);
    setUserData(data);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      showUserData(token);
    }
  }, []);

  return (
    <userContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userData, showUserData }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserStateContext;
