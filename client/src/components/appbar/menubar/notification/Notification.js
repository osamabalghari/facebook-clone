import React from 'react'

const Notification = () => {
    return (
        <>
            <div
                class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2"
                style={{ width: "38px", height: "38px" }}
                type="button"
                id="notMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
            >
                <i class="fas fa-bell"></i>
            </div>

            <ul
                class="dropdown-menu border-0 shadow p-3"
                aria-labelledby="notMenu"
                style={{ width: "23em", maxHeight: "600px", overflowY: "auto" }}
            >

                <li class="p-1">
                    <div class="d-flex justify-content-between">
                        <h2>Notifications</h2>
                        <div>
                            <i
                                class="fas fa-ellipsis-h pointer p-2 rounded-circle bg-gray"
                                type="button"
                                data-bs-toggle="dropdown"
                            ></i>
                            <ul class="dropdown-menu">
                                <li
                                    class="dropdown-item d-flex align-items-center"
                                    type="button"
                                >
                                    <i class="fas fa-check me-3 text-muted"></i>
                                    <p class="m-0">Mark all as read</p>
                                </li>
                                <li
                                    class="dropdown-item d-flex align-items-center"
                                    type="button"
                                >
                                    <i class="fas fa-cog me-3 text-muted"></i>
                                    <p class="m-0">Privacy Checkup</p>
                                </li>
                                <li
                                    class="dropdown-item d-flex align-items-center"
                                    type="button"
                                >
                                    <i class="fas fa-desktop me-3 text-muted"></i>
                                    <p class="m-0">Privacy Shortcuts</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex" type="button">
                        <p class="rounded-pill bg-gray p-2">All</p>
                        <p class="ms-3 rounded-pill bg-primary p-2 text-white">
                            Unread
                        </p>
                    </div>
                </li>

                <div class="d-flex justify-content-between mx-2">
                    <h5>New</h5>
                    <a href="#" class="text-decoration-none">See All</a>
                </div>

                <li class="my-2 p-1">
                    <a
                        href="#"
                        class="d-flex align-items-center justify-content-evenly text-decoration-none text-dark"
                    >
                        <div class="d-flex align-items-center justify-content-evenly">
                            <div class="p-2">
                                <img
                                    src="https://source.unsplash.com/random/1"
                                    alt="avatar"
                                    class="rounded-circle"
                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="fs-7 m-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum unde amet at nulla quae porro.
                                </p>
                                <span class="fs-7 text-primary">about an hour ago</span>
                            </div>
                        </div>
                        <i class="fas fa-circle fs-7 text-primary"></i>
                    </a>
                </li>

                <li class="my-2 p-1">
                    <a
                        href="#"
                        class="d-flex align-items-center justify-content-evenly text-decoration-none text-dark"
                    >
                        <div class="d-flex align-items-center justify-content-evenly">
                            <div class="p-2">
                                <img
                                    src="https://source.unsplash.com/random/2"
                                    alt="avatar"
                                    class="rounded-circle"
                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="fs-7 m-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum unde amet at nulla quae porro.
                                </p>
                                <span class="fs-7 text-primary">about an hour ago</span>
                            </div>
                        </div>
                        <i class="fas fa-circle fs-7 text-primary"></i>
                    </a>
                </li>

                <li class="my-2 p-1">
                    <a
                        href="#"
                        class="d-flex align-items-center justify-content-evenly text-decoration-none text-dark"
                    >
                        <div class="d-flex align-items-center justify-content-evenly">
                            <div class="p-2">
                                <img
                                    src="https://source.unsplash.com/random/3"
                                    alt="avatar"
                                    class="rounded-circle"
                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="fs-7 m-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum unde amet at nulla quae porro.
                                </p>
                                <span class="fs-7 text-primary">about an hour ago</span>
                            </div>
                        </div>
                        <i class="fas fa-circle fs-7 text-primary"></i>
                    </a>
                </li>

                <li class="my-2 p-1">
                    <a
                        href="#"
                        class="d-flex align-items-center justify-content-evenly text-decoration-none text-dark"
                    >
                        <div class="d-flex align-items-center justify-content-evenly">
                            <div class="p-2">
                                <img
                                    src="https://source.unsplash.com/random/4"
                                    alt="avatar"
                                    class="rounded-circle"
                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="fs-7 m-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum unde amet at nulla quae porro.
                                </p>
                                <span class="fs-7 text-primary">about an hour ago</span>
                            </div>
                        </div>
                        <i class="fas fa-circle fs-7 text-primary"></i>
                    </a>
                </li>

                <li class="my-2 p-1">
                    <a
                        href="#"
                        class="d-flex align-items-center justify-content-evenly text-decoration-none text-dark"
                    >
                        <div class="d-flex align-items-center justify-content-evenly">
                            <div class="p-2">
                                <img
                                    src="https://source.unsplash.com/random/5"
                                    alt="avatar"
                                    class="rounded-circle"
                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="fs-7 m-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum unde amet at nulla quae porro.
                                </p>
                                <span class="fs-7 text-primary">about an hour ago</span>
                            </div>
                        </div>
                        <i class="fas fa-circle fs-7 text-primary"></i>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Notification