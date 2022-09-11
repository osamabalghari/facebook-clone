import React, { useContext } from "react";
import postContext from "../../../../context/postContext/postContext";

const Secondary = () => {
    const context = useContext(postContext);
    const { userData } = context;
    return (
        <>
            <div
                class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2"
                style={{ width: "38px", height: "38px" }}
                type="button"
                id="secondMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
            >
                <i class="fas fa-caret-down"></i>
            </div>
            <ul
                class="dropdown-menu border-0 shadow p-3"
                aria-labelledby="secondMenu"
                style={{ width: "23em" }}
            >
                {userData.map((value) => {
                    return (
                        <li class="dropdown-item p-1 rounded d-flex" type="button">
                            <img
                                src={`http://localhost:3002/backend/uploads/${value.avatar}`}
                                alt="avatar"
                                class="rounded-circle me-2"
                                style={{ width: "45px", height: "45px", objectFit: "cover" }}
                            />
                            <div>
                                <p class="m-0">{value.name} {value.surname}</p>
                                <p class="m-0 text-muted">See your profile</p>
                            </div>
                        </li>
                    );
                })}
                <hr />

                <li
                    class="dropdown-item p-1 rounded d-flex align-items-center"
                    type="button"
                >
                    <i class="fas fa-exclamation-circle bg-gray p-2 rounded-circle"></i>
                    <div class="ms-3">
                        <p class="m-0">Give Feedback</p>
                        <p class="m-0 text-muted fs-7">Help us improve the new Flexbook.</p>
                    </div>
                </li>
                <hr />

                <li class="dropdown-item p-1 my-3 rounded" type="button">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="d-flex" data-bs-toggle="dropdown">
                                <i class="fas fa-cog bg-gray p-2 rounded-circle"></i>
                                <div class="ms-3 d-flex justify-content-between align-items-center w-100">
                                    <p class="m-0">Settings & Privacy</p>
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>

                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-cog"></i>
                                        </div>
                                        <p class="m-0">Settings</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-lock"></i>
                                        </div>
                                        <p class="m-0">Privacy Checkup</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-unlock-alt"></i>
                                        </div>
                                        <p class="m-0">Privacy Shortcuts</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-list"></i>
                                        </div>
                                        <p class="m-0">Activity Log</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-newspaper"></i>
                                        </div>
                                        <p class="m-0">News Feed Preferences</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-globe"></i>
                                        </div>
                                        <p class="m-0">Language</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="dropdown-item p-1 my-3 rounded" type="button">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="d-flex" data-bs-toggle="dropdown">
                                <i class="fas fa-question-circle bg-gray p-2 rounded-circle"></i>
                                <div class="ms-3 d-flex justify-content-between align-items-center w-100">
                                    <p class="m-0">Help & Support</p>
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>

                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-cog"></i>
                                        </div>
                                        <p class="m-0">Settings</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-lock"></i>
                                        </div>
                                        <p class="m-0">Privacy Checkup</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-unlock-alt"></i>
                                        </div>
                                        <p class="m-0">Privacy Shortcuts</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-list"></i>
                                        </div>
                                        <p class="m-0">Activity Log</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-newspaper"></i>
                                        </div>
                                        <p class="m-0">News Feed Preferences</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-globe"></i>
                                        </div>
                                        <p class="m-0">Language</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="dropdown-item p-1 my-3 rounded" type="button">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="d-flex" data-bs-toggle="dropdown">
                                <i class="fas fa-moon bg-gray p-2 rounded-circle"></i>
                                <div class="ms-3 d-flex justify-content-between align-items-center w-100">
                                    <p class="m-0">Display & Accessibility</p>
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>

                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-cog"></i>
                                        </div>
                                        <p class="m-0">Settings</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-lock"></i>
                                        </div>
                                        <p class="m-0">Privacy Checkup</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-unlock-alt"></i>
                                        </div>
                                        <p class="m-0">Privacy Shortcuts</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-list"></i>
                                        </div>
                                        <p class="m-0">Activity Log</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-newspaper"></i>
                                        </div>
                                        <p class="m-0">News Feed Preferences</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div
                                            class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            <i class="fas fa-globe"></i>
                                        </div>
                                        <p class="m-0">Language</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="dropdown-item p-1 my-3 rounded" type="button">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a
                                href="./index.html"
                                class="d-flex text-decoration-none text-dark"
                            >
                                <i class="fas fa-cog bg-gray p-2 rounded-circle"></i>
                                <div class="ms-3 d-flex justify-content-between align-items-center w-100">
                                    <p class="m-0">Log Out</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default Secondary;