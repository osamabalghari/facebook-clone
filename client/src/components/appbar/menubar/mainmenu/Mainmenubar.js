import React, { useContext } from 'react'
import Chatmenu from '../chatmenu/Chatmenu'
import Menumodal from '../menumodal/Menumodal'
import Notification from '../notification/Notification'
import Secondary from '../secondarymenu/Secondary'
import postContext from '../../../../context/postContext/postContext'

const Mainmenubar = () => {
    const context = useContext(postContext)
    const { userData } = context
    return (
        <div class="col d-flex align-items-center justify-content-end">
            {userData.map((value) => {
                return <div
                    class="align-items-center justify-content-center d-none d-xl-flex"
                >
                    <img
                        src={`http://localhost:3002/backend/uploads/${value.avatar}`}
                        class="rounded-circle me-2"
                        alt="avatar"
                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                    />
                    <p class="m-0">{value.name} {value.surname}</p>
                </div>

            })}
            <Menumodal />
            <Chatmenu />
            <Notification />
            <Secondary />
        </div >
    )
}

export default Mainmenubar