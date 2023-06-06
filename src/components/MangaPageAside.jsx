import React, {useEffect, useState} from "react";
import MangaInfoItem from "./MangaInfoItem";
import styles from "../styles/manga_page_aside.module.scss";
import {useOutletContext} from "react-router-dom";
import {TranslationStatus} from "./data/enum";
import {Status} from "./data/enum";

const MangaPageAside = (props) => {
    // const [loading, setLoading] = useOutletContext();
    const {data} = props;

    return (
        <aside className={styles.aside}>
            <img src={data.cover} alt="Cover not found" className={styles.cover}/>
            <MangaInfoItem title={"Автор"} content={data.author} titleStyle={styles.list_title} textStyle={styles.text}/>
            <MangaInfoItem title={"Статус"} content={data.status === "PUBLISHED" ? Status.PUBLISHED : Status.ONGOING} titleStyle={styles.list_title} textStyle={styles.text}/>
            <MangaInfoItem title={"Статус перекладу"} content={data.translationStatus === "IN_PROGRESS" ? TranslationStatus.IN_PROGRESS : TranslationStatus.DONE} titleStyle={styles.list_title} textStyle={styles.text}/>
        </aside>
    )
}

export default MangaPageAside;