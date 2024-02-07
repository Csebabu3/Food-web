// App.js
import React from 'react';
import TopNav from './TopNav';

function Sidebar() {
    const handleMenuClick = () => {
        // Your menu click logic here
        console.log('Menu clicked');
    };

    return (
        <div>
            <TopNav onMenuClick={handleMenuClick} />
            <div className='relative'>
                <img className="image" src='https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg' alt="Spaghetti" />
                <div className='absolute d-flex align-items-center justify-content-center'>
                    <input type='text' className='search' placeholder='Search recipes here...' />
                    <button class="button button5"><i className="fa fa-search icon" aria-hidden="true"></i></button><br></br>
                    <h5 className='head'>What are your favorite cuisines?</h5>
                    <p className='para'>PERSONALIZE YOUR EXPERIENCE</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
