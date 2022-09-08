import React, { useState } from "react";
import postContext from "./postContext";

const PostStateContext = (props) => {
  const [data, setData] = useState([]);
  const [stories, setStories] = useState([]);
  return (
    <postContext.Provider value={{ data, setData, stories, setStories }}>
      {props.children}
    </postContext.Provider>
  );
};

export default PostStateContext;
