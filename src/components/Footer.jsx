import React from "react";
import styles from "../styles/footer.module.scss";
import Contacts from "./Contacts";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`wrapper ${styles.wrapper}`}>
                <Contacts styles={styles}/>
            </div>
        </footer>
    );
};

export default Footer;


