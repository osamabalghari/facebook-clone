import React from 'react'
import Mainmenubar from '../menubar/mainmenu/Mainmenubar'
import Searchbar from '../searchbar/Searchbar'
import Topnav from '../topnav/Topnav'

const Navbar = () => {
    return (
        <div
            className="bg-white d-flex align-items-center fixed-top shadow"
            style={{ minHeight: "56px", zIndex: "5" }}
        >
            <div className="container-fluid">
                <div className="row align-items-center">
                    <Searchbar />
                    <Topnav />
                    <Mainmenubar />

                </div>

            </div>
        </div>
    )
}

export default Navbar