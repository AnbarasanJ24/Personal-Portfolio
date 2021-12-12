import React, { useState } from "react";
import { RiApps2Line } from "react-icons/ri";
import Web from "./web";
import Mobile from "./mobile";
import './header.css';
import logo from '../../assets/AJ.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    AOS.init();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="header" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
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
