import React from 'react'

const Sponser = () => {
    return (
        <li class="dropdown-item my-2 d-flex justify-content-between">

            <a
                href="/"
                class="d-flex align-items-center text-decoration-none link-dark"
            >
                <img
                    src="https://source.unsplash.com/random/1"
                    alt="ads"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    class="rounded me-3"
                />
                <div>
                    <p class="m-0">Lorem ipsum</p>
                    <span class="text-muted fs-7">loremipsum.com</span>
                </div>
            </a>

            <div
                class="rounded-circle p-1 bg-white d-flex align-items-center justify-content-center mx-2 sponsor-icon nav-item"
                type="button"
                style={{ width: "38px", height: "38px" }}
            >
                <i
                    class="fas fa-ellipsis-h text-muted p-2"
                    data-bs-toggle="dropdown"
                ></i>

                <ul class="dropdown-menu">

                    <li class="dropdown-item">
                        <a
                            href="#"
                            class="d-flex align-items-center text-decoration-none text-dark"
                        >
                            <i class="far fa-window-close"></i>
                            <div class="ms-3">
                                <p class="m-0">Hide Ad</p>
                                <span class="text-muted fs-7"
                                >Never see this add again.</span
                                >
                            </div>
                        </a>
                    </li>

                    <li class="dropdown-item">
                        <a
                            href="#"
                            class="d-flex align-items-center text-decoration-none text-dark"
                        >
                            <i class="fas fa-exclamation-triangle"></i>
                            <div class="ms-3">
                                <p class="m-0">Report Ad</p>
                                <span class="text-muted fs-7"
                                >Tell us a problem with this add.</span
                                >
                            </div>
                        </a>
                    </li>

                    <li class="dropdown-item">
                        <a
                            href="#"
                            class="d-flex align-items-center text-decoration-none text-dark"
                        >
                            <i class="fas fa-info-circle"></i>
                            <div class="ms-3">
                                <p class="m-0">Why am I seeing this ad?</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default Sponser