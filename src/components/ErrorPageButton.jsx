import React from "react";
import "../styles/error_page.scss";


const GoToPreviousPageButton = (props) => {
    return (
        <button className="to_previous_page_link" onClick={props.onClick}>
            Go to previous page
        </button>
    );

}

export default GoToPreviousPageButton;
