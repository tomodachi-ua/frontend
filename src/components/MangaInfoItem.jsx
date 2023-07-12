import React from "react";

const MangaInfoItem = (props) => {
    let content;

    if (!Array.isArray(props.content)) {
        content = [props.content];
    } else content = props.content;

    return (
        <div>
            <h6 className={props.titleStyle}>
                {props.title}
            </h6>
            <div className={props.listStyle}>
                {content.map(value => (
                    <p key={value} className={props.itemStyle}>{value}</p>
                ))}
            </div>
        </div>
    )

}

export default MangaInfoItem;