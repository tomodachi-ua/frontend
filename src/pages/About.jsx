import React from "react";
import styles from "../styles/about.module.scss";
import about from "../components/data/about.json";
import AboutItem from "../components/AboutItem";

const About = () => {
    return (
        <main className={styles.about}>
            <div className={`wrapper ${styles.wrapper}`}>
                <h1 className={styles.title}>Команда перекладу манги на солов'їну - <span
                    className={styles.title_accent}>Tomodachi</span>.</h1>

                {about.map(about_item =>
                    <AboutItem data={about_item}/>
                )}
            </div>
        </main>
    );
};

export default About;