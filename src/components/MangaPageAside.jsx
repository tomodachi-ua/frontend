import React from "react";
import MangaInfoItem from "./MangaInfoItem";
import styles from "../styles/manga_page_aside.module.scss";


const MangaPageAside = (props) => {
    const {data} = props;
    return (
        <aside className={styles.aside}>
            <img src={data.cover} alt="Cover not found" className={styles.cover}/>
            <MangaInfoItem title={"Автор"} content={data.author} titleStyle={styles.list_title} textStyle={styles.text}/>
            <MangaInfoItem title={"Статус"} content={data.status} titleStyle={styles.list_title} textStyle={styles.text}/>
            <MangaInfoItem title={"Статус перекладу"} content={data.translationStatus} titleStyle={styles.list_title} textStyle={styles.text}/>
        </aside>
    )
}

export default MangaPageAside;