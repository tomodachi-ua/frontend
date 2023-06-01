import React from "react";
import styles from "../styles/manga_item.module.scss";
import {Link} from "react-router-dom";

const MangaItem = (props) => {
    const { name, cover, genres, type, chaptersCount, translatedChaptersCount, id} = props;
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
                <p className={styles.type}>{type}</p>
            </div>
        </Link>
    );
};

export default MangaItem;