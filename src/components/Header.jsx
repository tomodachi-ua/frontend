import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import styles from "../styles/header.module.scss";
import logo from "../assets/icons/tomodachi-logo.svg"
import "../styles/burger_menu.scss"
import BurgerMenu from "./BurgerMenu";
import HeaderNav from "./HeaderNav";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (document.body.classList.contains('burger-menu')) {
            document.body.classList.remove('burger-menu');
        } else {
            document.body.classList.add('burger-menu');
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('burger-menu');
    };

    return (
        <header className={`${styles.header} header`}>
            <div className={`wrapper ${styles.wrapper}`}>
                <div className={styles.mobile_wrap}>
                    <Link to="/" className={styles.go_home}>
                        <img src={logo} alt="TOMODACHI" className={styles.logo}/>
                    </Link>

                    <input type="checkbox" id="navbar-toggle" checked={isOpen} onChange={toggleMenu} />
                    <label htmlFor="navbar-toggle" className="burger-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <HeaderNav/>

                <BurgerMenu styles={styles} isOpen={isOpen} onClickCloseMenu={closeMenu}/>
            </div>
        </header>
    );
};

export default Header;


