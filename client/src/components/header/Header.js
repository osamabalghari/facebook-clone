import React from 'react'
import Navbar from '../appbar/mainNavbar/Navbar'
import ChatbarMobile from '../chatbar/chatbarmobile/ChatbarMobile'
import MainPost from '../userpostmain/mainpost/MainPost'


const Header = () => {
    return (
        <>
            <Navbar />
            <MainPost />
            <ChatbarMobile />

        </>
    )
}

export default Header