import React from "react";
import styles from "../styles/about.module.scss";

const Layout = () => {
    return (
        <main className={styles.about}>
            <div className={`wrapper ${styles.wrapper}`}>
                <h1 className={styles.title}>Команда перекладу манги на солов'їну - <span
                    className={styles.title_accent}>Tomodachi</span>.</h1>

                <h2 className={styles.subtitle}>Хто ми та чим ми займаємось?</h2>
                <p className={styles.text}>
                    Наша команда була заснована 7 травня 2022 року. Все розпочалось з любові групки друзів до манґи та
                    ідеї перекладати слиз. І ось, нам вже 1 рік - ми працюємо не над одним лише слизом, у нас чудова команда, чудові читачі.</p>
            </div>
        </main>
    );
};

export default Layout;