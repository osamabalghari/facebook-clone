import React from 'react'
import MainChatBar from '../chatbarright/mainchatbar/MainChatBar'
import Sidebar from '../sidebar/Sidebar'
import TimeLine from '../timeline/maintimeline/TimeLine'

const MainPost = () => {
    return (
        <div class="container-fluid">
            <div class="row justify-content-evenly">
                <Sidebar />
                <TimeLine />
                <MainChatBar />
            </div>
        </div>
    )
}

export default MainPost