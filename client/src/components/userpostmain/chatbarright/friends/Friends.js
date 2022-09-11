import React from 'react'

const Friends = () => {
    return (
        <li
            class="dropdown-item rounded my-2 px-0"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#singleChat1"
        >

            <div
                class="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
        <div>
          <div class="popover-body d-flex p-2">
            <div>
              <img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
            </div>
            <div >
              <h5>Mike</h5>
              <div class="d-flex">
                <i class="fas fa-user-friends m-1 text-muted"></i>
                <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
              </div>
              <div class="d-flex">
              <i class="fas fa-graduation-cap m-1 text-muted"></i>
              <p>Studies at MIT</p>
              </div>
            </div>
          </div>
        </div>
      '
                data-bs-html="true"
            >
                <div class="position-relative">
                    <img
                        src="https://source.unsplash.com/random/4"
                        alt="avatar"
                        class="rounded-circle me-2"
                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                    />
                    <span
                        class="position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                        style={{ left: "75%" }}
                    >
                        <span class="visually-hidden"></span>
                    </span>
                </div>
                <p class="m-0">Mike</p>
            </div>
        </li>
    )
}

export default Friends