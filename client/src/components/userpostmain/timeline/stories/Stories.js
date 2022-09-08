import React, { useState, useRef, useContext, useEffect } from "react";
import postContext from "../../../../context/postContext/postContext";
import StoriesModal from "./StoriesModal";

const Stories = () => {
  const [image, setImage] = useState({});
  const context = useContext(postContext);
  const { setStories, data } = context;
  const ref = useRef();
  const showFile = () => {
    ref.current.click();
  };
  const showHandleStory = async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("avatar", image);
    const response = await fetch("http://localhost:3002/api/post/addstories", {
      method: "POST",
      headers: {
        token: token,
      },
      body: formData,
    });
    const newStory = await response.json();
    setStories((prev) => {
      return [newStory.storie, ...prev];
    });
  };

  return (
    <div class="mt-5 d-flex justify-content-between position-relative">
      <form
        action="/addstories"
        method="get"
        enctype="multipart/form-data"
        className="d-none"
      >
        <input
          type="file"
          name="avatar"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          ref={ref}
        />
      </form>
      <div
        class="mx-1 bg-white rounded story"
        type="button"
        style={{ width: "6em", height: "190px" }}
        data-bs-target="#createModal"
      >
        {data.map((value) => {
          return (
            <img
              src={`http://localhost:3002/backend/uploads/${value.owner.avatar}`}
              class="card-img-top"
              alt="story posts"
              style={{ minHeight: "125px", objectFit: "cover" }}
            />
          );
        })}
        <div
          class="d-flex align-items-center justify-content-center position-relative"
          style={{ minHeight: "65px" }}
        >
          <p class="mb-0 text-center fs-7 fw-bold" onClick={showFile}>
            Create Story
          </p>
          <div class="position-absolute top-0 start-50 translate-middle">
            <i class="fas fa-plus-circle fs-3 text-primary bg-white p-1 rounded-circle"></i>
          </div>
          <button
            className="text-primary bg-white p-1 rounded-circle"
            onClick={showHandleStory}
          >
            Add Stories
          </button>
        </div>
      </div>
      <StoriesModal />
    </div>
  );
};

export default Stories;
