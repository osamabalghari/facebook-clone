import React, { useState } from "react";
import userContext from "./userContext";

const UserStateContext = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [friendShow, setFriendShow] = useState([])


    return (
        <userContext.Provider
            value={{ isAuthenticated, setIsAuthenticated, friendShow, setFriendShow }}
        >
            {props.children}
        </userContext.Provider>
    );
};

export default UserStateContext;