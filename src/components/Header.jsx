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

                <nav>
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


