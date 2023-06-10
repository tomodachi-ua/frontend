import styles from "../styles/header.module.scss";
import {Link} from "react-router-dom";
import React from "react";

const HeaderNav = () => {
    return (
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
    )
}

export default HeaderNav;