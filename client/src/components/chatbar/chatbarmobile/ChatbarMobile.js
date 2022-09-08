import React from 'react'

const ChatbarMobile = () => {

    return (
        <>
            <div
                class="fixed-bottom right-100 p-3"
                style={{ zIndex: 6, "left": "initial" }}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#newChat"
            >
                <i class="fas fa-edit bg-white rounded-circle p-3 shadow"></i>
            </div>
            <div
                class="modal fade"
                id="newChat"
                tabindex="-1"
                aria-labelledby="newChatLabel"
                aria-hidden="true"
                data-bs-backdrop="false"
            >
                <div
                    class="modal-dialog modal-sm position-absolute bottom-0 end-0 w-75 shadow"
                    style={{ transform: "translateX(-80px)" }}
                >
                    <div class="modal-content border-0">

                        <div class="modal-header align-items-start">
                            <div>
                                <h6 class="modal-title text-dark mb-2" id="newChat1Label">
                                    New Message
                                </h6>
                                <label class="text-dark">To:</label>
                                <input type="text" class="border-0" />
                            </div>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body shadow m-0 chat-border">
                            <p class="m-0 text-primary ms-4">Suggested</p>
                        </div>

                        <div class="modal-footer border-0" style={{ minHeight: "300px" }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatbarMobile