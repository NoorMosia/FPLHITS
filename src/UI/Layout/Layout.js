import React from "react";
import * as Styles from "./Layout.module.css";
import { Button } from "mdbreact"

import Transfer from "../../components/Transfers/Transfers";
import Navbar from "../Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Layout = () => {

    return <div className={Styles.Layout}>
        <div className={Styles.Navbar}>
            <Navbar />
        </div>

        <div className={Styles.Buttons}>
            <Button color="white">TEAM</Button>
            <Button color="black">SQUAD</Button>

        </div>
        <div className={Styles.Main}>
            <div className={Styles.Left}>
                <Transfer />
            </div>
            <div className={Styles.Right}>

            </div>
        </div>

        <div className={Styles.Footer}>
            <Footer />
        </div>

    </div>
}

export default Layout;