import React from 'react'
import Contacts from '../contacts/Contacts'
import Friends from '../friends/Friends'
import Sponser from '../sponsers/Sponser'

const MainChatBar = () => {
    return (
        <div class="col-12 col-lg-3">
            <div
                style={{
                    maxWidth: "360px",
                    width: "100 %",
                    zIndex: "4",
                    paddingTop: "56px",
                    left: "initial !important",

                }}

            >
                <div class="p-3 mt-4">
                    <h5 class="text-muted">Sponsored</h5>
                    <Sponser />
                    <Contacts />
                    <Friends />
                </div>
            </div>
        </div>
    )
}

export default MainChatBar