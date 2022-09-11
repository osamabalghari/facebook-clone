import React from 'react'

const Menumodal = () => {
    return (
        <>
            <div
                class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2"
                style={{ width: "38px", height: "38px" }}
                type="button"
                id="mainMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
            >
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <ul
                class="dropdown-menu border-0 shadow p-3 overflow-auto"
                aria-labelledby="mainMenu"
                style={{
                    width: "23em", maxHeight: "600px"
                }}
            >

                <div>

                    <li class="p-1 mx-2">
                        <h2>Menu</h2>
                    </li>

                    <li class="p-1">
                        <div
                            class="input-group-text bg-gray border-0 rounded-pill"
                            style={{ minHeight: "40px", minWidth: "230px" }}
                        >
                            <i class="fas fa-search me-2 text-muted"></i>
                            <input
                                type="text"
                                class="form-control rounded-pill border-0 bg-gray"
                                placeholder="Search Menu"
                            />
                        </div>
                    </li>

                    <h4 class="m-2">Social</h4>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                        >
                            <div class="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png"
                                    alt="icon from fb"
                                    class="rounded-circle"
                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="m-0">Campus</p>
                                <span class="fs-7 text-muted"
                                >Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, commodi.</span
                                >
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                        >
                            <div class="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png"
                                    alt="icon from fb"
                                    class="rounded-circle"
                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="m-0">Events</p>
                                <span class="fs-7 text-muted"
                                >Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, commodi.</span
                                >
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                        >
                            <div class="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
                                    alt="icon from fb"
                                    class="rounded-circle"
                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="m-0">Friends</p>
                                <span class="fs-7 text-muted"
                                >Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, commodi.</span
                                >
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                        >
                            <div class="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"
                                    alt="icon from fb"
                                    class="rounded-circle"
                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="m-0">Groups</p>
                                <span class="fs-7 text-muted"
                                >Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, commodi.</span
                                >
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                        >
                            <div class="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/hLkEFzsCyXC.png"
                                    alt="icon from fb"
                                    class="rounded-circle"
                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="m-0">News Feed</p>
                                <span class="fs-7 text-muted"
                                >Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, commodi.</span
                                >
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                        >
                            <div class="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png"
                                    alt="icon from fb"
                                    class="rounded-circle"
                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="m-0">Pages</p>
                                <span class="fs-7 text-muted"
                                >Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, commodi.</span
                                >
                            </div>
                        </a>
                    </li>
                    <hr />

                    <h4 class="m-2">Entertainment</h4>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                        >
                            <div class="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png"
                                    alt="icon from fb"
                                    class="rounded-circle"
                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="m-0">Campus</p>
                                <span class="fs-7 text-muted"
                                >Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, commodi.</span
                                >
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                        >
                            <div class="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png"
                                    alt="icon from fb"
                                    class="rounded-circle"
                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="m-0">Events</p>
                                <span class="fs-7 text-muted"
                                >Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, commodi.</span
                                >
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                        >
                            <div class="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
                                    alt="icon from fb"
                                    class="rounded-circle"
                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p class="m-0">Friends</p>
                                <span class="fs-7 text-muted"
                                >Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio, commodi.</span
                                >
                            </div>
                        </a>
                    </li>
                </div>
                <hr />

                <div>

                    <li class="p-1 mx-2">
                        <h2>Create</h2>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center"
                        >
                            <div
                                class="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                style={{ width: "38px", height: "38px" }}
                            >
                                <i class="fas fa-edit"></i>
                            </div>
                            <div>
                                <p class="m-0">Post</p>
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center"
                        >
                            <div
                                class="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                style={{ width: "38px", height: "38px" }}
                            >
                                <i class="fas fa-book-open"></i>
                            </div>
                            <div>
                                <p class="m-0">Story</p>
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center"
                        >
                            <div
                                class="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                style={{ width: "38px", height: "38px" }}
                            >
                                <i class="fas fa-video"></i>
                            </div>
                            <div>
                                <p class="m-0">Video</p>
                            </div>
                        </a>
                    </li>
                    <hr />

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center"
                        >
                            <div
                                class="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                style={{ width: "38px", height: "38px" }}
                            >
                                <i class="fas fa-flag"></i>
                            </div>
                            <div>
                                <p class="m-0">Page</p>
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center"
                        >
                            <div
                                class="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                style={{ width: "38px", height: "38px" }}
                            >
                                <i class="fas fa-bullhorn"></i>
                            </div>
                            <div>
                                <p class="m-0">Add</p>
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center"
                        >
                            <div
                                class="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                style={{ width: "38px", height: "38px" }}
                            >
                                <i class="fas fa-users"></i>
                            </div>
                            <div>
                                <p class="m-0">Group</p>
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center"
                        >
                            <div
                                class="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                style={{ width: "38px", height: "38px" }}
                            >
                                <i class="fas fa-book"></i>
                            </div>
                            <div>
                                <p class="m-0">Event</p>
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center"
                        >
                            <div
                                class="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                style={{ width: "38px", height: "38px" }}
                            >
                                <i class="fas fa-shopping-basket"></i>
                            </div>
                            <div>
                                <p class="m-0">Marketplace Listing</p>
                            </div>
                        </a>
                    </li>

                    <li class="my-2 p-1">
                        <a
                            href="#"
                            class="text-decoration-none text-dark d-flex align-items-center"
                        >
                            <div
                                class="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                style={{ width: "38px", height: "38px" }}
                            >
                                <i class="fas fa-suitcase"></i>
                            </div>
                            <div>
                                <p class="m-0">Job</p>
                            </div>
                        </a>
                    </li>
                </div>
            </ul>
        </>
    )
}

export default Menumodal