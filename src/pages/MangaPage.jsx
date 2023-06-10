import React from "react";
import styles from "../styles/manga_page.module.scss";
import {useEffect, useState} from "react";
import {useOutletContext, useParams} from "react-router-dom";
import MangaPageMain from "../components/MangaPageMain";
import MangaPageAside from "../components/MangaPageAside";
import {getManga} from "../Logic/requests";

const MangaPage = () => {
    const [loading, setLoading] = useOutletContext();
    const {id} = useParams();
    const [mangaInfo, setMangaInfo] = useState({});

    useEffect(() => {
        setLoading(true);
        getManga(id).then(response => {
            setMangaInfo(response.data);
        }).catch(error => {
            console.log(error);
        })
        setLoading(false);
    }, [])

    return (
        <main>
            <div className={`wrapper ${styles.wrapper}`}>
                <MangaPageAside data={mangaInfo}/>
                <MangaPageMain data={mangaInfo}/>
            </div>
        </main>
    );
};

export default MangaPage;