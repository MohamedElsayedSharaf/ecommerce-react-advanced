import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../components/assets/logo.png'

const Search = ({ CartItem }) => {
    window.addEventListener("scroll", function () {
        const search = document.querySelector('.search')
        search.classList.toggle("active", window.scrollY > 100)
    })
    return (
        <>
            <section className='search'>
                <div className="container c-flex">
                    <div className="logo width">
                        <NavLink to="/"><img src={logo} alt="" /></NavLink>
                    </div>
                    <div className="search-box f-flex">
                        <i className='fa fa-search'></i>
                        <input type="text" placeholder='Search and hit enter...' />
                        <span className='f-flex'>All Category</span>
                    </div>
                    <div className="icon f-flex width">
                        <i className='fa fa-user icon-circle'></i>
                        <div className="cart">
                            <NavLink to="/cart">
                                <i className='fa fa-shopping-bag icon-circle'></i>
                                <span>{CartItem?.length === 0 ? "" : CartItem?.length}</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;
