import React, { useState } from "react";
import { Button } from "mdbreact";
import * as Styles from "./Main.module.css";

import Squad from "../../container/Squad/Squad";
import Lineup from "../../container/Lineup/Lineup";
import TransferPane from "../../components/TransferPane/TransferPane";

//DATA
import userData from "./_sampledata";
import apiData from "./_test";
// import fixtures from "./_fixtures";

const Main = props => {
    const [currentPage, setCurrentPage] = useState("squad");
    let pageContent;
    const squadData = {
        GK: [],
        DEF: [],
        MID: [],
        FWD: []
    };

    const populateSquadData = (data, position) => {
        data.forEach(player => {
            for (let index = 0; index < apiData.elements.length; index++) {
                if (player.id === apiData.elements[index].id) {
                    const team = apiData.teams.find(team => team.code === apiData.elements[index].team_code)
                    apiData.elements[index] = {
                        ...apiData.elements[index],
                        team: { ...team },
                    };
                    squadData[position].push(apiData.elements[index]);
                    return;
                }
            }
        });
    }
    populateSquadData(userData.gwData.gameweek1.squad.goalkeepers, "GK")
    populateSquadData(userData.gwData.gameweek1.squad.defenders, "DEF")
    populateSquadData(userData.gwData.gameweek1.squad.midfielders, "MID")
    populateSquadData(userData.gwData.gameweek1.squad.forwards, "FWD")

    if (currentPage === "squad") {
        pageContent = <Squad players={{ ...squadData }} />
    } else {
        pageContent = <Lineup players={{ ...squadData }} team={userData.gwData.gameweek1.lineup} />
    }

    return <>
        <div className={Styles.Buttons}>
            <Button size="md" onClick={() => setCurrentPage("history")} color={currentPage === "history" ? "white" : "black"}>POINTS</Button>
            <Button size="md" onClick={() => setCurrentPage("lineup")} color={currentPage === "lineup" ? "white" : "black"}>LINEUP</Button>
            <Button size="md" onClick={() => setCurrentPage("squad")} color={currentPage === "squad" ? "white" : "black"}>SQUAD</Button>
        </div>
        <div className={Styles.Main}>
            <div className={Styles.Left}>
                <div className={Styles.GWDetails}>
                    <div className={Styles.LeftBTN}>Previous</div>
                    <div className={Styles.Details}>Gameweek 29</div>
                    <div className={Styles.RightBTN}>Next</div>
                </div>
                {pageContent}
            </div>
            <div className={Styles.Right}>
                <TransferPane players={apiData} />
            </div>
        </div>
    </>

}

export default Main;