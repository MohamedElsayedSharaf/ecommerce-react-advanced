import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false)
    return (
        <div className='header'>
            <div className="container d-flex">
                <div className="categories d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                    <h4>Categories <i className='fa fa-chevron-down'></i></h4>
                </div>
                <div className="navlink">
                    <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f-flex capitalize"} onClick={() => setMobileMenu(false)}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pages">Pages</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user">User Account</NavLink>
                        </li>
                        <li>
                            <NavLink to="/vendor">Vendor Account</NavLink>
                        </li>
                        <li>
                            <NavLink to="/track">Track my order</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                        {MobileMenu ? <i className='fa fa-times close home-bth'></i> :
                            <i className='fa fa-bars open'></i>}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
