import React from 'react'

const Searchbar = () => {
    return (
        <div class="col d-flex align-items-center">

            <i class="fab fa-facebook text-primary" style={{ fontSize: "3rem" }}></i>

            <div class="input-group ms-2" type="button">
                <span
                    class="input-group-prepend d-lg-none"
                    id="searchMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                >
                    <div
                        class="input-group-text bg-gray border-0 rounded-circle"
                        style={{ minHeight: "40px" }}
                    >
                        <i class="fas fa-search text-muted"></i>
                    </div>
                </span>
                <span
                    class="input-group-prepend d-none d-lg-block"
                    id="searchMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                >
                    <div
                        class="input-group-text bg-gray border-0 rounded-pill"
                        style={{ minHeight: "40px", minWidth: "230px" }}
                    >
                        <i class="fas fa-search me-2 text-muted"></i>
                        <p class="m-0 fs-7 text-muted">Search Flexbook</p>
                    </div>
                </span>

                <ul
                    class="dropdown-menu overflow-auto border-0 shadow p-3"
                    aria-labelledby="searchMenu"
                    style={{ width: "20em", maxHeight: "600px" }}
                >

                    <li>
                        <input
                            type="text"
                            class="rounded-pill border-0 bg-gray dropdown-item"
                            placeholder="Search Flexbook..."
                            autofocus
                        />
                    </li>

                    <li class="my-4">
                        <div
                            class="alert fade show dropdown-item p-1 m-0 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div class="d-flex align-items-center">
                                <img
                                    src="https://source.unsplash.com/random/1"
                                    alt="avatar"
                                    class="rounded-circle me-2"
                                    style={{ width: "35px", height: "35px", objectFit: "cover" }}
                                />
                                <p class="m-0">Lorem ipsum</p>
                            </div>
                            <button
                                type="button"
                                class="btn-close p-0 m-0"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            ></button>
                        </div>
                    </li>

                    <li class="my-4">
                        <div
                            class="alert fade show dropdown-item p-1 m-0 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div class="d-flex align-items-center">
                                <img
                                    src="https://source.unsplash.com/random/2"
                                    alt="avatar"
                                    class="rounded-circle me-2"
                                    style={{ width: "35px", height: "35px", objectFit: "cover" }}
                                />
                                <p class="m-0">Lorem ipsum</p>
                            </div>
                            <button
                                type="button"
                                class="btn-close p-0 m-0"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            ></button>
                        </div>
                    </li>


                    <li class="my-4">
                        <div
                            class="alert fade show dropdown-item p-1 m-0 d-flex align-items-center justify-content-between"
                            role="alert"
                        >
                            <div class="d-flex align-items-center">
                                <img
                                    src="https://source.unsplash.com/random/3"
                                    alt="avatar"
                                    class="rounded-circle me-2"
                                    style={{ width: "35px", height: "35px", objectFit: "cover" }}
                                />
                                <p class="m-0">Lorem ipsum</p>
                            </div>
                            <button
                                type="button"
                                class="btn-close p-0 m-0"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            ></button>
                        </div>
                    </li>
                </ul>
            </div >
        </div >
    )
}

export default Searchbar