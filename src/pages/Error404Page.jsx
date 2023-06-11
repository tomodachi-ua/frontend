import React from "react";
import { ReactComponent as Error404 } from "../assets/images/Error404.svg";
import GoToPreviousPageButton from "../components/ErrorPageButton";
import { useNavigate } from "react-router-dom";
import "../styles/error_page.scss";


const Error404Page = () => {
    const navigate = useNavigate();
    return (
        <main>
            <Error404 className="ErrorPage" />
            <GoToPreviousPageButton onClick={() => navigate(-1)}/>
        </main>
    );
}

export default Error404Page;
