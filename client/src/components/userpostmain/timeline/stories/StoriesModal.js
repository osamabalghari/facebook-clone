import React, { useContext, useEffect } from "react";
import postContext from "../../../../context/postContext/postContext";

const StoriesModal = () => {
    const context = useContext(postContext);
    const { stories, setStories } = context;



    const showHandleStories = async (token) => {
        const response = await fetch("http://localhost:3002/api/auth/getstories", {
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
        setStories(posts);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            showHandleStories(token);
        }
    }, []);
    return (
        <>
            {stories.map((value, index) => {
                return (
                    <>
                        <div
                            class="rounded mx-1 story"
                            type="button"
                            style={{ width: "6em", height: "190px" }}
                        >
                            <img
                                src={`http://localhost:3002/backend/uploads/${value.storyImage}`}
                                class="card-img-top rounded"
                                alt="story posts"
                                style={{ minHeight: "190px", objectFit: "cover" }}
                            />
                        </div>

                        <div class="position-absolute top-50 start-100 translate-middle pointer d-none d-lg-block">
                            <i
                                class="fas fa-arrow-right p-3 border text-muted bg-white rounded-circle"

                            ></i>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default StoriesModal;