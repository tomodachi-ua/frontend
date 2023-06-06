import React, {useEffect, useState} from "react";
import styles from "../styles/manga_item.module.scss";
import {Link} from "react-router-dom";
import {Type} from "./data/enum"

const MangaItem = (props) => {
    const {name, cover, genres, type, chaptersCount, translatedChaptersCount, id} = props;
    const [mangaType, setMangaType] = useState("");
    useEffect(() => {
        switch (type) {
            case "MANGA":
                setMangaType(Type.MANGA);
                break;
            case "MANHWA":
                setMangaType(Type.MANHWA);
                break;
            case "ONESHOT":
                setMangaType(Type.ONESHOT);
                break;
            case "WEBMANHWA":
                setMangaType(Type.WEBMANHWA);
                break;
        }
    }, [])


    return (
        <Link to={`/manga/${id}`} className={styles.manga_item}>
            <div className={styles.img_wrap}>
                <img src={cover} className={styles.img} alt="cover not found"/>
                <p className={styles.chapters_count}>
                    {translatedChaptersCount} / {chaptersCount}
                </p>
            </div>
            <div className={styles.description}>
                <h6 className={styles.name}>{name}</h6>
                <p className={styles.genres}>{genres.map(genre => (
                    <span className={styles.genre}>{genre}</span>
                ))}</p>
                <p className={styles.type}>{mangaType}</p>
            </div>
        </Link>
    );
};

export default MangaItem;