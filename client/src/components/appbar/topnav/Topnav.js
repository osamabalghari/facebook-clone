import React from 'react'

const Topnav = () => {
    return (
        <div class="col d-none d-xl-flex justify-content-center">

            <div class="mx-4 nav__btn nav__btn-active">
                <button type="button" class="btn px-4">
                    <i class="fas fa-home text-muted fs-4"></i>
                </button>
            </div>

            <div class="mx-4 nav__btn">
                <button type="button" class="btn px-4">
                    <i class="fas fa-store text-muted fs-4"></i>
                </button>
            </div>

            <div class="mx-4 nav__btn">
                <button type="button" class="btn px-4">
                    <i
                        type="button"
                        class="position-relative fas fa-users text-muted fs-4"
                    >
                        <span
                            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            style={{ fontSize: "0.5rem" }}
                        >
                            1
                            <span class="visually-hidden"></span>
                        </span>
                    </i>
                </button>
            </div>

            <div class="mx-4 nav__btn">
                <button type="button" class="btn px-4">
                    <i class="fas fa-gamepad text-muted fs-4"></i>
                </button>
            </div>
        </div>
    )
}

export default Topnav