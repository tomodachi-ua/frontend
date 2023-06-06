import React from "react";
import styles from "../styles/manga_page_main.module.scss";
import MangaInfoItem from "./MangaInfoItem";
import MangaProgressBar from "./MangaProgressBar";

const MangaPageMain = (props) => {
    const { data } = props;
    return (
        <section className={styles.main_content}>
            <h2 className={styles.title}>{data.name}</h2>
            <MangaInfoItem content={data.alternativeNames} listStyle={styles.list} titleStyle={styles.list_title} itemStyle={styles.alt_names_item}/>
            <MangaInfoItem content={data.genres} listStyle={styles.list} itemStyle={styles.item} titleStyle={styles.list_title}/>
            <MangaInfoItem title={"Опис"} content={data.description} titleStyle={styles.list_title} textStyle={styles.text}/>
            <MangaProgressBar current={data.translatedChaptersCount} total={data.chaptersCount}/>
        </section>
    )
}

export default MangaPageMain;