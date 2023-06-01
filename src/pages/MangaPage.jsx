import React from "react";
import styles from "../styles/manga_page.module.scss";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import data from "../components/data/data.json";
import MangaPageMain from "../components/MangaPageMain";
import MangaPageAside from "../components/MangaPageAside";

const MangaPage = () => {
    const {id} = useParams();
    const [mangaInfo, setMangaInfo] = useState({});

    useEffect(() => {
        data.forEach(element => {
            if (+element.id === +id) {
                setMangaInfo(element);
            }
        });
    }, [id]);


    return (
        <main>
            <div className={`wrapper ${styles.wrapper}`}>
                <MangaPageAside data={mangaInfo}/>
                {/*<img src={mangaInfo.cover} alt="Cover not found" className={styles.cover}/>*/}

                <MangaPageMain data={mangaInfo}/>
            </div>
        </main>
    );
};

export default MangaPage;