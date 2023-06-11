import React from "react";
import MangaInfoItem from "./MangaInfoItem";
import styles from "../styles/manga_page_aside.module.scss";
import {TranslationStatus} from "./data/enum";
import {Status} from "./data/enum";

const MangaPageAside = (props) => {
    const {data} = props;

    return (
        <aside className={styles.aside}>
            <img src={data.coverUrl} alt="Cover not found" className={styles.cover}/>
            <MangaInfoItem title={"Автор"} content={data.author} titleStyle={styles.list_title} textStyle={styles.text} infoStyle={styles.infoStyle}/>
            <MangaInfoItem title={"Статус"} content={data.status === "PUBLISHED" ? Status.PUBLISHED : Status.ONGOING} titleStyle={styles.list_title} textStyle={styles.text} infoStyle={styles.infoStyle}/>
            <MangaInfoItem title={"Статус перекладу"} content={data.translationStatus === "IN_PROGRESS" ? TranslationStatus.IN_PROGRESS : TranslationStatus.DONE} titleStyle={styles.list_title} textStyle={styles.text} infoStyle={styles.infoStyle}/>
        </aside>
    )
}

export default MangaPageAside;