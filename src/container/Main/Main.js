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
    const [currentPage, setCurrentPage] = useState("squad");
    let pageContent;

    const squadData = {
        GK: [],
        DEF: [],
        MID: [],
        FWD: []
    };


    userData.gwData.gameweek1.squad.goalkeepers.forEach(player => {
        for (let index = 0; index < apiData.elements.length; index++) {
            if (player.id === apiData.elements[index].id) {
                squadData.GK.push(apiData.elements[index]);
                return;
            }
        }
    });

    userData.gwData.gameweek1.squad.defenders.forEach(player => {
        for (let index = 0; index < apiData.elements.length; index++) {
            if (player.id === apiData.elements[index].id) {
                squadData.DEF.push(apiData.elements[index]);
                return;
            }
        }
    });
    userData.gwData.gameweek1.squad.midfielders.forEach(player => {
        for (let index = 0; index < apiData.elements.length; index++) {
            if (player.id === apiData.elements[index].id) {
                squadData.MID.push(apiData.elements[index]);
                return;
            }
        }
    });
    userData.gwData.gameweek1.squad.forwards.forEach(player => {
        for (let index = 0; index < apiData.elements.length; index++) {
            if (player.id === apiData.elements[index].id) {
                squadData.FWD.push(apiData.elements[index]);
                return;
            }
        }
    });

    if (currentPage === "squad") {
        pageContent = <Squad players={{ ...squadData }} />
    } else {
        pageContent = <Lineup players={{ ...squadData }} team={userData.gwData.gameweek1.lineup} />
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