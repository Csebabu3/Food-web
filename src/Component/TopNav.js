// TopNav.js
import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { MdFoodBank } from 'react-icons/md';
import './TopNav.css';

function TopNav({ onMenuClick }) {
    const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);

    const handleMenuClick = () => {
        setIsSideNavbarOpen(!isSideNavbarOpen);
        onMenuClick();
    };

    const handleCloseClick = () => {
        setIsSideNavbarOpen(false);
    };

    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-light" style={{ backgroundColor: "orange" }}>
                <div className='ms-4 text-white'>&ensp;&ensp;
                    <MdFoodBank size={27} className='mb-2' />&ensp;&ensp;
                    <a className="navbar-brand" href="#"><b style={{ color: "white" }}>FastEat.</b></a>
                </div>
                <div className='navbar-btns flex align-center me-4'>
                    <button type="button" className='navbar-show-btn text-white' onClick={handleMenuClick}>
                        {/* <IoMdMenu size={27} /> */}
                        <i className="fa fa-bars" aria-hidden="true" style={{border: "0px", fontSize: "25px"}}></i>
                    </button>
                </div>
            </nav>

            {/* Side Navbar */}
            {isSideNavbarOpen && (
                <div className="side-navbar">
                    {/* Add your side navbar content here */}
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseClick} style={{ marginLeft: "180px" }}></button>
                    <div class="d-flex flex-column text-white" style={{cursor: "pointer"}}>
                        <div class="p-2">Flex item 1</div>
                        <div class="p-2">Flex item 2</div>
                        <div class="p-2">Flex item 3</div>
                        <div class="p-2">Flex item 1</div>
                        <div class="p-2">Flex item 2</div>
                        <div class="p-2">Flex item 3</div>
                        <div class="p-2">Flex item 1</div>
                        <div class="p-2">Flex item 2</div>
                        <div class="p-2">Flex item 3</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TopNav;
