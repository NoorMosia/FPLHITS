import React from "react";
import * as Styles from "./Layout.module.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Main from "../../container/Main/Main";

const Layout = props => {

    return <div className={Styles.Layout}>
        <div className={Styles.Navbar}>
            <Navbar />
        </div>

        <Main />

        <div className={Styles.Footer}>
            <Footer />
        </div>
    </div >
}

export default Layout;