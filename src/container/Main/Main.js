import React, { useState } from "react";
import { Button } from "mdbreact";
import * as Styles from "./Main.module.css";

import Squad from "../../container/Squad/Squad";
import Lineup from "../../container/Lineup/Lineup";
import TransferPane from "../../components/TransferPane/TransferPane";
import UserInfoPane from "../../components/UserInfoPane/UserInfoPane";

//DATA
import initUserData from "./_sampledata";
import initApiData from "./_test";

const Main = () => {
    const [userData, setUserData] = useState(initUserData)
    const [apiData] = useState(initApiData)
    const [currentPage, setCurrentPage] = useState("squad");
    const [squadTransferable, setSquadTransferable] = useState("All");

    //for swopping bech player for a player in the squad
    const [selectedBenchPlayer, setSelectedBenchPlayer] = useState({})
    const [selectedStartingPlayer, setSelectedStartingPlayer] = useState({})

    // Squad transfers
    const [selectedSquadPlayer, setSelectedSquadPlayer] = useState({})
    const [selectedPlayerToTransferIN, setSelectedPlayerToTransferIN] = useState({})
    console.log(userData);


    const swop = (benched, starting) => {
        let newUserData = { ...userData }

        let startingIndex = newUserData.gwData
            .gameweek1.lineup[starting.position]
            .findIndex((player) => {
                return player === starting.placement
            })
        let benchedIndex = newUserData.gwData
            .gameweek1.lineup.SUB
            .findIndex((player) => {
                return player === benched.placement
            })

        if (starting.position === benched.position) {
            newUserData.gwData.gameweek1.lineup[starting.position][startingIndex] = benched.placement
            newUserData.gwData.gameweek1.lineup.SUB[benchedIndex] = starting.placement
        }

        if (starting.position !== benched.position) {
            const addedplayerArray = [...newUserData.gwData.gameweek1.lineup[benched.position]]
            const removedPlayerArray = [...newUserData.gwData.gameweek1.lineup[starting.position]]
            removedPlayerArray.splice(startingIndex, 1)
            addedplayerArray.push(benched.placement)
            newUserData = {
                ...newUserData,
                gwData: {
                    ...newUserData.gwData,
                    gameweek1: {
                        ...newUserData.gwData.gameweek1,
                        lineup: {
                            ...newUserData.gwData.gameweek1.lineup,
                            [benched.position]: [...addedplayerArray],
                            [starting.position]: [...removedPlayerArray],
                        }
                    }
                }
            }
            newUserData.gwData.gameweek1.lineup.SUB[benchedIndex] = starting.placement
        }

        setUserData({ ...newUserData });
    }
    // console.log(userData);
    if (selectedStartingPlayer.index >= 0 && selectedBenchPlayer.index >= 0) {
        if (selectedBenchPlayer.position === "GK" && selectedStartingPlayer.position !== "GK") {

        } else if (selectedStartingPlayer.position === "GK" && selectedBenchPlayer.position !== "GK") {

        } else if (selectedStartingPlayer.position === "FWD" && userData.gwData.gameweek1.lineup.FWD.length < 2) {

        } else {
            swop(selectedBenchPlayer, selectedStartingPlayer)
        }
        setSelectedBenchPlayer({})
        setSelectedStartingPlayer({})
    }

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
                        position: position,
                        placement: player.placement,
                        selectedBenchPlayer: selectedBenchPlayer,
                        selectedStartingPlayer: selectedStartingPlayer,
                        selectedSquadPlayer: selectedSquadPlayer
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

    let pageContent;
    if (currentPage === "squad") {
        pageContent = <Squad
            players={{ ...squadData }}
            setSelectedSquadPlayer={setSelectedSquadPlayer}
            setSquadTransferable={setSquadTransferable}
        />

    } else if (currentPage === "lineup") {
        pageContent = <Lineup
            players={{ ...squadData }}
            team={userData.gwData.gameweek1.lineup}
            setSelectedBenchPlayer={setSelectedBenchPlayer}
            setSelectedStartingPlayer={setSelectedStartingPlayer}
        />

    } else {
        pageContent = <Lineup
            players={{ ...squadData }}
            team={userData.gwData.gameweek1.lineup}
            setSelectedBenchPlayer={setSelectedBenchPlayer}
            setSelectedStartingPlayer={setSelectedStartingPlayer}
        />
    }

    let RightSideContent;
    if (currentPage === "squad") {
        RightSideContent = <TransferPane
            players={apiData}
            squadTransferable={squadTransferable}
            setSquadTransferable={setSquadTransferable}
            setSelectedPlayerToTransferIN={setSelectedPlayerToTransferIN}
        />
    } else {
        RightSideContent = <UserInfoPane />
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
                {RightSideContent}
            </div>
        </div>
    </>
}

export default Main;