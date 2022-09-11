import React from 'react'
import ChatbarModal from '../../../chatbar/chatbarmodal/ChatbarModal'

const Chatmenu = () => {
    return (
        <>
            <div
                class="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2"
                style={{ width: "38px", height: "38px" }}
                type="button"
                id="chatMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
            >
                <i class="fas fa-comment"></i>
            </div>
            <ul
                class="dropdown-menu border-0 shadow p-3 overflow-auto"
                aria-labelledby="chatMenu"
                style={{ width: "23em", maxHeight: "600px" }}
            >

                <li class="p-1">
                    <div class="d-flex justify-content-between">
                        <h2>Message</h2>
                        <div>

                            <i
                                class="fas fa-ellipsis-h text-muted mx-2"
                                type="button"
                                data-bs-toggle="dropdown"
                            ></i>

                            <ul class="dropdown-menu shadow" style={{ width: "18em" }}>

                                <div class="p-2">
                                    <h5>Chat Settings</h5>
                                    <span class="text-muted fs-7"
                                    >Customize your Messenger experience.</span
                                    >
                                </div>
                                <hr />

                                <li>
                                    <div
                                        class="dropdown-item d-flex align-items-center justify-content-between"
                                    >

                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-phone-alt me-3"></i>
                                            <p class="m-0">Incoming call sounds</p>
                                        </div>

                                        <div class="form-check form-switch m-0">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="flexSwitchCheckChecked"
                                                checked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexSwitchCheckChecked"
                                            ></label>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div
                                        class="dropdown-item d-flex align-items-center justify-content-between"
                                    >

                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-volume-off me-4 fs-4"></i>
                                            <p class="m-0">Message sounds</p>
                                        </div>

                                        <div class="form-check form-switch m-0">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="flexSwitchCheckChecked"
                                                checked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexSwitchCheckChecked"
                                            ></label>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div
                                        class="dropdown-item d-flex align-items-center justify-content-between"
                                    >

                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-spinner me-3"></i>
                                            <p class="m-0">Pop-up new messages</p>
                                        </div>

                                        <div class="form-check form-switch m-0">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="flexSwitchCheckChecked"
                                                checked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexSwitchCheckChecked"
                                            ></label>
                                        </div>
                                    </div>
                                    <span class="ms-5 text-muted fs-7"
                                    >Automatically open new messages.</span
                                    >
                                </li>
                                <hr class="m-0" />

                                <li>
                                    <div
                                        class="dropdown-item d-flex align-items-center justify-content-between"
                                    >

                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-toggle-off me-3"></i>
                                            <p class="m-0">Turn Off Active Status</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div
                                        class="dropdown-item d-flex align-items-center justify-content-between"
                                    >

                                        <div class="d-flex align-items-center">
                                            <i class="far fa-comment-alt me-3"></i>
                                            <p class="m-0">Message Request</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div
                                        class="dropdown-item d-flex align-items-center justify-content-between"
                                    >

                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-share-square me-3"></i>
                                            <p class="m-0">Message delivery settings</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div
                                        class="dropdown-item d-flex align-items-center justify-content-between"
                                    >

                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-shield-alt me-3"></i>
                                            <p class="m-0">Block settings</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <i
                                class="fas fa-expand-arrows-alt text-muted mx-2"
                                type="button"
                            ></i>

                            <i
                                class="fas fa-edit text-muted mx-2"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#newChat"
                            ></i>
                        </div>
                    </div>
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
                            placeholder="Search Messenger"
                        />
                    </div>
                </li>

                <li
                    class="my-2 p-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#singleChat1"
                >
                    <div class="d-flex align-items-center justify-content-between">

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
                                <p class="fs-7 m-0">Mike</p>
                                <span class="fs-7 text-muted"
                                >Lorem ipsum &#8226; 7d</span
                                >
                            </div>
                        </div>

                        <div class="p-2">
                            <img
                                src="https://source.unsplash.com/random/1"
                                alt="avatar"
                                class="rounded-circle"
                                style={{ width: "15px", height: "15px", objectFit: "cover" }}

                            />
                        </div>
                    </div>
                </li>

                <li
                    class="my-2 p-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#singleChat2"
                >
                    <div class="d-flex align-items-center justify-content-between">

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
                                    Tuan
                                    <span class="fs-7 text-muted"
                                    >Lorem ipsum &#8226; 7d</span
                                    >
                                </p>
                            </div>
                        </div>

                        <div class="p-2">
                            <img
                                src="https://source.unsplash.com/random/2"
                                alt="avatar"
                                class="rounded-circle"
                                style={{ width: "15px", height: "15px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </li>

                <li
                    class="my-2 p-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#singleChat3"
                >
                    <div class="d-flex align-items-center justify-content-between">

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
                                <p class="fs-7 m-0">Jerry</p>
                                <span class="fs-7 text-muted"
                                >Lorem ipsum &#8226; 7d</span
                                >
                            </div>
                        </div>

                        <div class="p-2">
                            <img
                                src="https://source.unsplash.com/random/3"
                                alt="avatar"
                                class="rounded-circle"
                                style={{ width: "15px", height: "15px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </li>

                <li
                    class="my-2 p-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#singleChat4"
                >
                    <div class="d-flex align-items-center justify-content-between">

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
                                <p class="fs-7 m-0">Tony</p>
                                <span class="fs-7 text-muted"
                                >Lorem ipsum &#8226; 7d</span
                                >
                            </div>
                        </div>

                        <div class="p-2">
                            <img
                                src="https://source.unsplash.com/random/4"
                                alt="avatar"
                                class="rounded-circle"
                                style={{ width: "15px", height: "15px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </li>

                <li
                    class="my-2 p-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#singleChat5"
                >
                    <div class="d-flex align-items-center justify-content-between">

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
                                <p class="fs-7 m-0">Phu</p>
                                <span class="fs-7 text-muted"
                                >Lorem ipsum &#8226; 7d</span
                                >
                            </div>
                        </div>

                        <div class="p-2">
                            <img
                                src="https://source.unsplash.com/random/5"
                                alt="avatar"
                                class="rounded-circle"
                                style={{ width: "15px", height: "15px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </li>
                <hr class="m-0" />
                <a href="#" class="text-decoration-none">
                    <p class="fw-bold text-center pt-3 m-0">See All in Messenger</p>
                </a>
            </ul>

        </>
    )
}

export default Chatmenu