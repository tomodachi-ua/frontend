import React from 'react';
import {Link} from "react-router-dom";
import Contacts from "./Contacts";

const BurgerMenu = (props) => {
    const {isOpen, styles, onClickCloseMenu} = props;

    return (
        <>
            {isOpen && (
                <>
                    <nav className="nav">
                        <ul className={`${styles.nav_list} nav_list`}>
                            <li className={styles.nav_list_item}>
                                <Link to="/" className={`${styles.nav_list_link} nav_list_link`} onClick={onClickCloseMenu}>
                                    Головна
                                </Link>
                            </li>
                            <li className={styles.nav_list_item}>
                                <Link to="/manga" className={`${styles.nav_list_link} nav_list_link`} onClick={onClickCloseMenu}>
                                    Манґа
                                </Link>
                            </li>
                            <li className={styles.nav_list_item}>
                                <Link to="/join" className={`${styles.nav_list_link} nav_list_link`} onClick={onClickCloseMenu}>
                                    Приєднатись до команди
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <Contacts styles={styles}/>
                </>
            )}
        </>
    );

}


export default BurgerMenu;