import React from "react";

const MangaInfoItem = (props) => {
    if (Array.isArray(props.content)) {
        return (
            <div>
                <h6 className={props.titleStyle}>
                    {props.title}
                </h6>
                <div className={props.listStyle}>
                    {props.content.map(value => (
                        <p key={value} className={props.itemStyle}>{value}</p>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className={props.infoStyle}>
                <h6 className={props.titleStyle}>
                    {props.title}
                </h6>
                <p className={props.textStyle}>{props.content}</p>
            </div>
        )
    }
}

export default MangaInfoItem;