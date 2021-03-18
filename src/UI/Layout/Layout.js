import React from "react";
// import { Switch, Route } from "react-router-dom"
import * as Styles from "./Layout.module.css";
import { Button } from "mdbreact"

import Navbar from "../Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// // import Squad from "../../container/Squad/Squad";
// import Lineup from "../../container/Team/Team";

// play around with lineup
import Transfers from "../../components/Board/Board";
import Subs from "../../container/Team/Substitutes/Substitutes";

const Layout = () => {

    return <div className={Styles.Layout}>
        <div className={Styles.Navbar}>
            <Navbar />
        </div>

        <div className={Styles.Buttons}>
            <Button color="white">LINEUP</Button>
            <Button color="black">SQUAD</Button>

        </div>
        <div className={Styles.Main}>
            <div className={Styles.Left}>
                <Transfers />
                <Subs />

                {/* <Switch>
                    <Route path="/Squad" component={Squad} exact />
                    <Route path="/" component={Lineup} />
                </Switch> */}
            </div>
            <div className={Styles.Right}>

            </div>
        </div>

        <div className={Styles.Footer}>
            <Footer />
        </div>

    </div >
}

export default Layout;