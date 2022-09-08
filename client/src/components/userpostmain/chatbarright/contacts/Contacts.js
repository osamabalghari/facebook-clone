import React from 'react'

const Contacts = () => {
    return (
        <div
            class="my-3 d-flex justify-content-between align-items-center"
        >
            <p class="text-muted fs-5 m-0">Contacts</p>

            <div class="text-muted">

                <i
                    class="fas fa-video mx-2 pointer"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#videoRoomD"
                ></i>

                <div
                    class="modal fade"
                    id="videoRoomD"
                    tabindex="-1"
                    aria-labelledby="videoRoomDLabel"
                    aria-hidden="true"
                    data-bs-backdrop="false"
                >
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content bg-dark">

                            <div class="modal-header border-0">
                                <button
                                    type="button"
                                    class="btn-close btn-close-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div
                                class="modal-body d-flex flex-column align-items-center justify-content-center"
                                style={{ minHeight: "400px" }}
                            >
                                <i class="fas fa-video fs-0"></i>
                                <h3 class="text-white">Schedule A Room For Later</h3>
                                <p class="text-white text-center w-50 mx-auto">
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Ut deserunt alias laudantium itaque eius enim
                                    natus culpa eligendi consectetur maiores!
                                </p>
                                <button class="btn btn-lg btn-primary rounded-pill">
                                    Schedule Room
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <i
                    class="fas fa-search mx-2 pointer"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#newChat"
                ></i>

                <i
                    class="fas fa-ellipsis-h pointer text-muted mx-2"
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
            </div>
        </div>
    )
}

export default Contacts