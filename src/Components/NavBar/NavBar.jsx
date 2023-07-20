import React, { useState } from 'react'
import './NavBar.css';
import './NavBar.scss';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const NavBar = () => {
    const [active, setActive] = useState("navbar")
    // function to toggle navbar
    const showNav = () =>{
        setActive('navbar activeNavbar')
    }

    // function to remove navbar
    const removeNavbar = () =>{
        setActive('navbar')
    }

    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className="logoDiv">
                    <a href="#" className='logo flex text-decoration-none'>
                        <h1 className='fs-3 fw-bold'><MdOutlineTravelExplore className='icon' /> Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navLists flex'>
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Package</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <button className='btn'>
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className='icon' />
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className='icon' />
                </div>

            </header>

        </section>
    )
}

export default NavBar
