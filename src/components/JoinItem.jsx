import React from "react";
import {Link} from "react-router-dom";
import styles from "../styles/join_item.module.scss"

const JoinItem = (props) => {
    const {data} = props;
    return (
        <article className={styles.join_item}>
            <h6 className={styles.title}>{data.title}</h6>
            <p className={styles.description}>{data.description}</p>
            <a href={data.link} className={styles.join_link} rel="noreferrer" target="_blank">Заповнити анкету</a>
        </article>
    );
};

export default JoinItem;