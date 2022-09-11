import React, { useState, useEffect, useCallback } from "react";
import postContext from "./postContext";

const PostStateContext = (props) => {
    const [data, setData] = useState([]);
    const [stories, setStories] = useState([]);
    const [userData, setUserData] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const showUserData = useCallback(async (token) => {
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
        const json = await response.json();
        console.log(json);
        setUserData(json);

    }, []);
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            showUserData(token)
        }
        return
    }, [])









    return (
        <postContext.Provider value={{ data, setData, stories, setStories, userData, showUserData, setUserData, setIsAuthenticated, isAuthenticated }}>
            {props.children}
        </postContext.Provider>
    );
};

export default PostStateContext;