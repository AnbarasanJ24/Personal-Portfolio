import React, { useState } from "react";
import { RiApps2Line } from "react-icons/ri";
import Web from "./web";
import Mobile from "./mobile";
import './header.css';
import logo from '../../assets/AJ.gif';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="header">
            <div className="logo">
                <img src={logo} alt="loading..." />
            </div>
            <div className="menus">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
                    <RiApps2Line className="mobile-icon" />
                    {
                        isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
                    }

                </div>
            </div>
        </section>
    )
}

export default Header
