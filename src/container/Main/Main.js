import React, { useState } from "react";
import { Button } from "mdbreact";
import * as Styles from "./Main.module.css";

import Squad from "../../container/Squad/Squad";
import Lineup from "../../container/Lineup/Lineup";

const Main = props => {
    const [currentPage, setCurrentPage] = useState("lineup");
    let pageContent;

    if (currentPage === "lineup") {
        pageContent = <Lineup />
    } else {
        pageContent = <Squad />
    }

    return <>
        <div className={Styles.Buttons}>
            <Button size="md" onClick={() => setCurrentPage("lineup")} color={currentPage === "lineup" ? "white" : "black"}>LINEUP</Button>
            <Button size="md" onClick={() => setCurrentPage("squad")} color={currentPage === "squad" ? "white" : "black"}>SQUAD</Button>
            <Button size="md" onClick={() => setCurrentPage("history")} color={currentPage === "history" ? "white" : "black"}>HISTORY</Button>
        </div>
        <div className={Styles.Main}>
            <div className={Styles.Left}>
                {pageContent}
            </div>
            <div className={Styles.Right}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </>

}

export default Main;