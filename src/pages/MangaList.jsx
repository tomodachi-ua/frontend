import React, {useEffect, useState} from "react";
import styles from "../styles/manga_list.module.scss";
import MangaItem from "../components/MangaItem";
import {getAllMangas} from "../Logic/requests";
import {useOutletContext} from "react-router-dom";

const MangaList = () => {
    const [loading, setLoading] = useOutletContext();
    const [mangaList, setMangaList] = useState([]);

    useEffect(() => {
        setLoading(true);
        getAllMangas().then(response => {
            setMangaList(response.data);
        }).catch(error => {
            console.log(error);
        })
        setLoading(false);
    }, [])


    return (
        <main className={styles.manga_list}>
            <div className={`wrapper ${styles.wrapper}`}>
                {mangaList.map(manga => (
                    <MangaItem key={manga.id} manga={manga}/>
                ))}
            </div>
        </main>
    );
};

export default MangaList;