import React from "react";
import styles from "../styles/manga_list.module.scss";
import data from "../components/data/data.json";
import MangaItem from "../components/MangaItem";

const MangaList = () => {
    return (
        <main className={styles.manga_list}>
            <div className={`wrapper ${styles.wrapper}`}>
                {data.map(manga => (
                    <MangaItem key={manga.id} name={manga.name} cover={manga.cover} genres={manga.genres}
                               type={manga.type} chaptersCount={manga.chaptersCount}
                               translatedChaptersCount={manga.translatedChaptersCount} id={manga.id}/>
                ))}
            </div>
        </main>
    );
};

export default MangaList;