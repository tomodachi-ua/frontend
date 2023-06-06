import React from "react";
import styles from "../styles/join_page.module.scss";
import JoinItem from "../components/JoinItem";
import join from "../components/data/join.json"

const JoinPage = () => {
    return (
        <main className={styles.join}>
            <div className={`wrapper ${styles.wrapper}`}>
                <h1 className={styles.title}>Ви хочете перекладати манґу і не знаєте, до якої команди приєднатись?  Ми пропонуємо Вам долучитись до нас!</h1>
                <p className={styles.subtitle}>Якщо у Вас немає досвіду -  це не проблема. Головне, щоб у Вас був вільний час, а навички ви зможете отримати у нас)</p>

                <div className={styles.join_list}>
                    {join.map(joinElement =>
                        <JoinItem data={joinElement}/>
                    )}
                </div>
            </div>
        </main>
    );
};

export default JoinPage;