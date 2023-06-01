import React from "react";
import styles from "../styles/manga_progress_bar.module.scss"

const MangaProgressBar = ({current, total}) => {
    const progressPercentage = (current / total) * 100;

    return (
        <>
            <h6 className={styles.title}>Прогрес</h6>
            <div className={styles.progress_bar}>
                <div
                    className={styles.progress_bar_fill}
                    style={{width: `${progressPercentage}%`}}
                >
                    <p className={styles.progress}>{current} / {total}</p>
                </div>
            </div>
        </>
    );
};

export default MangaProgressBar;
