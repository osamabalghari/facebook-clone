import React, { useEffect, useContext, useState } from "react";
import postContext from "../../../../context/postContext/postContext";
//import ReactPlayer from "react-player";

const Post = () => {
    // {
    //   data, setData;
    // }
    const context = useContext(postContext);
    const { data, setData } = context;
    const [likeState, setLikeState] = useState(null)
    const [likeID, setLikeID] = useState(false)
    const handeShowPost = async (token) => {
        const response = await fetch("http://localhost:3002/api/auth/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: token,
            },
        });

        if (!response.ok) {
            return;
        }

        const posts = await response.json();
        setData(posts);


    };

    const handleLikeUnlike = async (id) => {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:3002/api/post/likeunlikePosts/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: token
            }
        })
        const json = await response.json()
        console.log(data);
        console.log("success", json.message);
        console.log("ownerID", data.map((value) => {
            return value.owner._id
        }));
        const newData = data.map((value) => {
            return value.owner._id
        });
        console.log("newData", newData[0]);
        setLikeState(id)
        if (newData[0] === id) {
            setLikeID(true)
        } else {
            setLikeID(false)
        }


    }


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            handeShowPost(token);
        }

    }, []);

    return (
        <>
            {data.map((value) => {
                return (
                    <div class="bg-white p-4 rounded shadow mt-3">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex">
                                <img
                                    src={`http://localhost:3002/backend/uploads/${value.owner.avatar}`}
                                    alt="avatar"
                                    class="rounded-circle me-2"
                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                />
                                <div>
                                    <p class="m-0 fw-bold">{value.owner.name}</p>
                                    <span class="text-muted fs-7">{value.createdAt}</span>
                                </div>
                            </div>

                            <i
                                class="fas fa-ellipsis-h"
                                type="button"
                                id="post1Menu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            ></i>

                            <ul
                                class="dropdown-menu border-0 shadow"
                                aria-labelledby="post1Menu"
                            >
                                <li class="d-flex align-items-center">
                                    <a
                                        class="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                        href="#"
                                    >
                                        Edit Post
                                    </a>
                                </li>
                                <li class="d-flex align-items-center">
                                    <a
                                        class="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                        href="#"
                                    >
                                        Delete Post
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-3">
                            <div>
                                <p>{value.caption}</p>
                                {/* <ReactPlayer
                  controls={true}
                  url={`http://localhost:3002/backend/uploads/${value.image}`}
                ></ReactPlayer> */}
                                <img
                                    src={`http://localhost:3002/backend/uploads/${value.image}`}
                                    alt="post image"
                                    class="img-fluid rounded"
                                />
                            </div>

                            <div class="post__comment mt-3 position-relative">
                                <div
                                    class="d-flex align-items-center top-0 start-0 position-absolute"
                                    style={{ height: "50px", zIndex: "5" }}
                                >
                                    <div class="me-2">
                                        <i class="text-primary fas fa-thumbs-up"></i>
                                        <i class="text-danger fab fa-gratipay"></i>
                                        <i class="text-warning fas fa-grin-squint"></i>
                                    </div>
                                    <p class="m-0 text-muted fs-7">{value.likes.length}</p>
                                </div>

                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item border-0">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <div
                                                class="accordion-button collapsed pointer d-flex justify-content-end"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePost1"
                                                aria-expanded="false"
                                                aria-controls="collapsePost1"
                                            >
                                                <p class="m-0">2 Comments</p>
                                            </div>
                                        </h2>
                                        <hr />

                                        <div class="d-flex justify-content-around">
                                            <div class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1">
                                                <i class="fas fa-thumbs-up me-3"></i>
                                                {likeState === value._id && likeID ? <p class="m-0" onClick={() => { handleLikeUnlike(value._id) }} >Liked</p> : <p class="m-0" onClick={() => { handleLikeUnlike(value._id) }} >Like</p>}
                                            </div>
                                            <div
                                                class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePost1"
                                                aria-expanded="false"
                                                aria-controls="collapsePost1"
                                            >
                                                <i class="fas fa-comment-alt me-3"></i>
                                                <p class="m-0">Comment</p>
                                            </div>
                                        </div>

                                        <div
                                            id="collapsePost1"
                                            class="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <hr />
                                            <div class="accordion-body">
                                                <div class="d-flex align-items-center my-1">
                                                    <img
                                                        src={`http://localhost:3002/backend/uploads/${value.image}`}
                                                        alt="avatar"
                                                        class="rounded-circle me-2"
                                                        style={{
                                                            width: "38px",
                                                            height: "38px",
                                                            objectFit: "cover",
                                                        }}
                                                    />

                                                    <div class="p-3 rounded comment__input w-100">
                                                        <div class="d-flex justify-content-end">
                                                            <i
                                                                class="fas fa-ellipsis-h text-blue pointer"
                                                                id="post1CommentMenuButton"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            ></i>

                                                            <ul
                                                                class="dropdown-menu border-0 shadow"
                                                                aria-labelledby="post1CommentMenuButton"
                                                            >
                                                                <li class="d-flex align-items-center">
                                                                    <a
                                                                        class="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                                        href="#"
                                                                    >
                                                                        Edit Comment
                                                                    </a>
                                                                </li>
                                                                <li class="d-flex align-items-center">
                                                                    <a
                                                                        class="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                                        href="#"
                                                                    >
                                                                        Delete Comment
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <p class="fw-bold m-0">John</p>
                                                        <p class="m-0 fs-7 bg-gray p-2 rounded">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="d-flex align-items-center my-1">
                                                    <img
                                                        src={`http://localhost:3002/backend/uploads/${value.image}`}
                                                        alt="avatar"
                                                        class="rounded-circle me-2"
                                                        style={{
                                                            width: "38px",
                                                            height: "38px",
                                                            objectFit: "cover",
                                                        }}
                                                    />

                                                    <div class="p-3 rounded comment__input w-100">
                                                        <p class="fw-bold m-0">Jerry</p>
                                                        <p class="m-0 fs-7 bg-gray p-2 rounded">
                                                            {value.caption}
                                                        </p>
                                                    </div>
                                                </div>

                                                <form class="d-flex my-1">
                                                    <div>
                                                        <img
                                                            src={`http://localhost:3002/backend/uploads/${value.image}`}
                                                            alt="avatar"
                                                            class="rounded-circle me-2"
                                                            style={{
                                                                width: "38px",
                                                                height: "38px",
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                    </div>

                                                    <input
                                                        type="text"
                                                        class="form-control border-0 rounded-pill bg-gray"
                                                        placeholder="Write a comment"
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Post;