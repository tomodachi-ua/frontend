import {Outlet} from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    // const [loading, setLoading] = useState(false);
    //
    // if (loading) {
    //     return (
    //         <Loader/>
    //     )
    // }
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;