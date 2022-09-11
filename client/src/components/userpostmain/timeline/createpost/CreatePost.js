import React, { useState, useContext, useEffect } from "react";
import { useRef } from "react";
import postContext from "../../../../context/postContext/postContext";

const CreatePost = () => {
    const [image, setImage] = useState({});
    const [caption, setCaption] = useState("");
    const ref = useRef();
    const refClose = useRef();
    const showFile = () => {
        ref.current.click();
    };
    const context = useContext(postContext);
    const { setData, userData } = context;
    const handleCreatePost = async () => {
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("avatar", image);
        formData.append("caption", caption);
        const response = await fetch("http://localhost:3002/api/post/createpost", {
            method: "POST",
            headers: {
                token: token,
            },
            body: formData,
        });

        if (!response.ok) {
            return;
        }

        const newPost = await response.json();

        setData((prev) => {
            return [newPost, ...prev];
        });

        setCaption("");
        setImage({});

        refClose.current.click();
    };

    return (
        <div class="bg-white p-3 mt-3 rounded border shadow">
            <form
                action="/createpost"
                method="post"
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
            <div class="d-flex" type="button">
                {userData.map((value) => {
                    return <>
                        <div class="p-1">
                            <img
                                src={`http://localhost:3002/backend/uploads/${value.avatar}`}
                                alt="avatar"
                                class="rounded-circle me-2"
                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                            />
                        </div>

                        <input
                            type="text"
                            class="form-control rounded-pill border-0 bg-gray pointer"
                            disabled
                            placeholder={`What's on your mind, ${value.name}? `}
                            data-bs-toggle="modal"
                            data-bs-target="#createModal"
                        />
                    </>
                })}
            </div>

            <div
                class="modal fade"
                id="createModal"
                tabindex="-1"
                aria-labelledby="createModalLabel"
                aria-hidden="true"
                data-bs-backdrop="false"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header align-items-center">
                            <h5
                                class="text-dark text-center w-100 m-0"
                                id="exampleModalLabel"
                            >
                                Create Post
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                ref={refClose}
                            ></button>
                        </div>

                        <div class="modal-body">
                            <div class="my-1 p-1">
                                <div class="d-flex flex-column">
                                    {userData.map((value) => {
                                        return <div class="d-flex align-items-center">

                                            <div class="p-2">

                                                <img
                                                    src={`http://localhost:3002/backend/uploads/${value.avatar}`}
                                                    alt="from fb"
                                                    class="rounded-circle"
                                                    style={{
                                                        width: "38px",
                                                        height: "38px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>

                                            <div>
                                                <p class="m-0 fw-bold">{value.name}</p>
                                                <select
                                                    class="form-select border-0 bg-gray w-75 fs-7"
                                                    aria-label="Default select example"
                                                >
                                                    <option selected value="1">
                                                        Public
                                                    </option>
                                                    <option value="2">Pin To Top</option>
                                                    <option value="3">Hide</option>
                                                </select>
                                            </div>
                                        </div>
                                    })}

                                    <div>
                                        <textarea
                                            cols="30"
                                            rows="5"
                                            class="form-control border-0"
                                            onChange={(e) => {
                                                setCaption(e.target.value);
                                            }}
                                            value={caption}
                                        ></textarea>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <img
                                            src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                                            class="pointer"
                                            alt="fb text"
                                            style={{
                                                width: "38px",
                                                height: "38px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <i class="far fa-laugh-wink fs-5 text-muted pointer"></i>
                                    </div>

                                    <div class="d-flex justify-content-between border border-1 border-light rounded p-3 mt-3">
                                        <p class="m-0">Add to your post</p>
                                        <div>
                                            <i
                                                class="fas fa-images fs-5 text-success pointer mx-1"
                                                onClick={showFile}
                                            ></i>
                                            <i class="fas fa-user-check fs-5 text-primary pointer mx-1"></i>
                                            <i class="far fa-smile fs-5 text-warning pointer mx-1"></i>
                                            <i class="fas fa-map-marker-alt fs-5 text-info pointer mx-1"></i>
                                            <i class="fas fa-microphone fs-5 text-danger pointer mx-1"></i>
                                            <i class="fas fa-ellipsis-h fs-5 text-muted pointer mx-1"></i>
                                        </div>
                                    </div>
                                </div >
                            </div >
                        </div >

                        <div class="modal-footer">
                            <button class="btn btn-primary w-100" onClick={handleCreatePost}>
                                Post
                            </button>
                        </div>
                    </div >
                </div >
            </div >
            <hr />

            <div class="d-flex flex-column flex-lg-row mt-3">
                <div
                    class="dropdown-item rounded d-flex align-items-center justify-content-center"
                    type="button"
                >
                    <i class="fas fa-video me-2 text-danger"></i>
                    <p class="m-0 text-muted">Live Video</p>
                </div>

                <div
                    class="dropdown-item rounded d-flex align-items-center justify-content-center"
                    type="button"
                >
                    <i class="fas fa-photo-video me-2 text-success"></i>
                    <p class="m-0 text-muted">Photo/Video</p>
                </div>

                <div
                    class="dropdown-item rounded d-flex align-items-center justify-content-center"
                    type="button"
                >
                    <i class="fas fa-smile me-2 text-warning"></i>
                    <p class="m-0 text-muted">Feeling/Activity</p>
                </div>
            </div>
        </div >
    );
};

export default CreatePost;