import React, { useState } from "react";
import { Button } from "mdbreact";
import * as Styles from "./Main.module.css";

import Squad from "../../container/Squad/Squad";
import Lineup from "../../container/Lineup/Lineup";
import TransferPane from "../../components/TransferPane/TransferPane";

//DATA
import userData from "./_sampledata";
import apiData from "./_test";
import fixtures from "./_fixtures";

const Main = props => {
    const [currentPage, setCurrentPage] = useState("squad");
    let pageContent;

    const comingGW = fixtures.filter(fixture => fixture.event === 29)

    const squadData = {
        GK: [],
        DEF: [],
        MID: [],
        FWD: []
    };

    userData.gwData.gameweek1.squad.goalkeepers.forEach(player => {
        for (let index = 0; index < apiData.elements.length; index++) {
            if (player.id === apiData.elements[index].id) {
                let fixture = comingGW.find(game =>
                    game.team_a === apiData.elements[index].team ||
                    game.team_h === apiData.elements[index].team
                )

                fixture = { ...fixture }

                let opponent;
                if (fixture.team_a === apiData.elements[index].team) {
                    opponent = apiData.teams.find(team => team.id === fixture.team_h)
                } else {
                    opponent = apiData.teams.find(team => team.id === fixture.team_a)
                }

                opponent = { ...opponent }
                let opponentName = opponent.short_name;

                const team = apiData.teams.find(team => team.code === apiData.elements[index].team_code)
                apiData.elements[index].team = team;

                apiData.elements[index].opponent = { name: opponentName };

                squadData.GK.push(apiData.elements[index]);
                return;
            }
        }
    });

    // userData.gwData.gameweek1.squad.defenders.forEach(player => {
    //     for (let index = 0; index < apiData.elements.length; index++) {
    //         if (player.id === apiData.elements[index].id) {
    //             const team = apiData.teams.find(team => team.code === apiData.elements[index].team_code)
    //             apiData.elements[index].team = team;
    //             apiData.elements[index].opponent = team;
    //             squadData.DEF.push(apiData.elements[index]);
    //             return;
    //         }
    //     }
    // });
    // userData.gwData.gameweek1.squad.midfielders.forEach(player => {
    //     for (let index = 0; index < apiData.elements.length; index++) {
    //         if (player.id === apiData.elements[index].id) {
    //             const team = apiData.teams.find(team => team.code === apiData.elements[index].team_code)
    //             apiData.elements[index].team = team;
    //             apiData.elements[index].opponent = team;
    //             squadData.MID.push(apiData.elements[index]);
    //             return;
    //         }
    //     }
    // });
    // userData.gwData.gameweek1.squad.forwards.forEach(player => {
    //     for (let index = 0; index < apiData.elements.length; index++) {
    //         if (player.id === apiData.elements[index].id) {
    //             const team = apiData.teams.find(team => team.code === apiData.elements[index].team_code)
    //             apiData.elements[index].team = team;
    //             apiData.elements[index].opponent = team;
    //             squadData.FWD.push(apiData.elements[index]);
    //             return;
    //         }
    //     }
    // });

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