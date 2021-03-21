import React, { useState } from "react";
import { Button } from "mdbreact";
import * as Styles from "./Main.module.css";

import Squad from "../../container/Squad/Squad";
import Lineup from "../../container/Lineup/Lineup";
import TransferPane from "../../components/TransferPane/TransferPane";

//DATA
import userData from "./sampledata";
import apiData from "./test";

const Main = props => {
    const [currentPage, setCurrentPage] = useState("lineup");
    let pageContent;

    const squaData = {
        GKS: [],
        DEF: [],
        MID: [],
        FWD: []
    };


    userData.gwData.gameweek1.squad.goalkeepers.forEach(player => {
        for (let index = 0; index < apiData.elements.length; index++) {
            if (player.id === apiData.elements[index].id) {
                squaData.GKS.push(apiData.elements[index]);
                return;
            }
        }
    });

    userData.gwData.gameweek1.squad.defenders.forEach(player => {
        for (let index = 0; index < apiData.elements.length; index++) {
            if (player.id === apiData.elements[index].id) {
                squaData.DEF.push(apiData.elements[index]);
                return;
            }
        }
    });
    userData.gwData.gameweek1.squad.midfielders.forEach(player => {
        for (let index = 0; index < apiData.elements.length; index++) {
            if (player.id === apiData.elements[index].id) {
                squaData.MID.push(apiData.elements[index]);
                return;
            }
        }
    });
    userData.gwData.gameweek1.squad.forwards.forEach(player => {
        for (let index = 0; index < apiData.elements.length; index++) {
            if (player.id === apiData.elements[index].id) {
                squaData.FWD.push(apiData.elements[index]);
                return;
            }
        }
    });

    if (currentPage === "lineup") {
        pageContent = <Lineup />
    } else {
        pageContent = <Squad data={squaData} />
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
                <TransferPane />
            </div>
        </div>
    </>

}

export default Main;