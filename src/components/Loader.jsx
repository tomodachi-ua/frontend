import React from "react";
import styles from "../styles/loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.loader_page}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loader;
