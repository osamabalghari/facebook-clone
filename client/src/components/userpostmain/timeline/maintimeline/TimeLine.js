import React from 'react'
import CreatePost from '../createpost/CreatePost'
import Post from '../posts/Post'
import Stories from '../stories/Stories'


const TimeLine = () => {
    return (
        <>
            <div class="col-12 col-lg-6 pb-5">
                <div
                    class="d-flex flex-column justify-content-center w-100 mx-auto"
                    style={{ paddingTop: "56px", maxWidth: "680px" }}
                >
                    <Stories />
                    <CreatePost />
                    <Post />
                </div>
            </div>

        </>
    )
}

export default TimeLine