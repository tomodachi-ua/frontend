import React from "react";
import {Link} from "react-router-dom";
import styles from "../styles/header.module.scss";
import logo from "../assets/icons/tomodachi-logo.svg"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="wrapper">
                <Link to="/" className={styles.go_home}>
                    <img src={logo} alt="TOMODACHI" className={styles.logo}/>
                </Link>

                <button className={styles.burger}>
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9H25M1 1H25M1 17H25" stroke="#161616" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </button>
                <nav className={styles.nav}>
                    <ul className={styles.nav_list}>
                        <li className={styles.nav_list_item}>
                            <Link to="/" className={styles.nav_list_link}>
                                Головна
                            </Link>
                        </li>
                        <li className={styles.nav_list_item}>
                            <Link to="/manga" className={styles.nav_list_link}>
                                Манґа
                            </Link>
                        </li>
                        <li className={styles.nav_list_item}>
                            <Link to="/join" className={styles.nav_list_link}>
                                Приєднатись до команди
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;


