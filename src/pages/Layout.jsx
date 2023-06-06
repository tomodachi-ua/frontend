import {Outlet} from "react-router-dom";
import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Layout = () => {
    const [loading, setLoading] = useState(false);

    if (loading) {
        return (
            <Loader/>
        )
    }
    return (
        <>
            <Header />
            <Outlet context={[loading, setLoading]}/>
            <Footer/>
        </>
    );
};

export default Layout;