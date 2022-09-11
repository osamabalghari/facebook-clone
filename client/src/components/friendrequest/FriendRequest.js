/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from 'react';
import userContext from '../../context/userContext/userContext';
//import postContext from '../../context/postContext/postContext';
const FriendRequest = () => {
    const context = useContext(userContext)
    const { friendShow, setFriendShow } = context
    //const posContext = useContext(postContext)
    // const { userData, } = posContext
    const [userFollow, setUserFollow] = useState(false)
    const [followUserID, setFollowUserID] = useState(null)
    const [news, setNews] = useState([])


    const handleShowAllUser = async (token) => {
        const response = await fetch("http://localhost:3002/api/auth/getalluser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: token,
            },
        })
        const data = await response.json()
        setFriendShow(data)

    }


    const deleteUser = (_data) => {
        const deleteData = friendShow.filter((value, index) => {
            return _data !== value._id
        })
        setFriendShow(deleteData)
    }


    const followUser = async (id) => {
        try {
            const token = localStorage.getItem("token")
            const response = await fetch(`http://localhost:3002/api/auth//follow/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    token: token
                },

            })
            const data = await response.json()
            setUserFollow(!userFollow)
            if (data.success) {
                setUserFollow(!userFollow)
            } else {
                setUserFollow(userFollow)
            }

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        handleShowAllUser(token)

    }, [])

    return (
        <>
            <div className='d-flex justify-content-center align-item-flex-end flex-wrap' style={{ width: "60%", marginTop: "10vh", position: "absolute", right: "5rem" }} >
                {friendShow.map((value, index) => {
                    return <div class="card" style={{ height: "365px", width: "213px", position: "relative", borderRadius: "10px", marginRight: "10px", marginTop: "10px" }}>
                        <img class="card-img-top" src={`http://localhost:3002/backend/uploads/${value.avatar}`} style={{ height: "211px", width: "211px", objectFit: "cover" }} />
                        <div class="card-body">
                            <h5 class="card-title">{value.name} {value.surname}</h5>
                            <div className='d-flex justify-content-center'>
                                {userFollow ? <button class="btn btn-primary " onClick={() => { followUser(value._id) }} style={{ padding: "5px 68px", position: "absolute", left: "10px" }}>UnFollow</button> : <button class="btn btn-primary " onClick={() => { followUser(value._id) }} style={{ padding: "5px 68px", position: "absolute", left: "10px" }}>Follow</button>}
                                <button class="btn btn-secondary " onClick={() => { deleteUser(value._id) }} style={{ padding: "5px 68px", position: "absolute", left: "10px", marginTop: "40px" }}>Delete</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default FriendRequest