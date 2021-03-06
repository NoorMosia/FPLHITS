import React, { useState } from "react";
import * as Styles from "./TransferPane.module.css";

import PlayerInfo from "./PlayerInfo/PlayerInfo";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";

const TransferPane = props => {
    const allPlayers = {
        GK: [],
        DEF: [],
        MID: [],
        FWD: []
    };

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const populateSquadData = (position) => {
        props.players.elements.forEach(player => {
            if (player.element_type === 1 && position === "GK") {
                const team = props.players.teams.find(team => team.id === player.team)

                player = {
                    ...player,
                    team: { ...team },
                };
                if (player.web_name.toLowerCase().includes(searchTerm.toLowerCase()))
                    allPlayers[position].push(player);
            }
            else if (player.element_type === 2 && position === "DEF") {
                const team = props.players.teams.find(team => team.id === player.team)
                player = {
                    ...player,
                    team: { ...team },
                };
                if (player.web_name.toLowerCase().includes(searchTerm.toLowerCase()))
                    allPlayers[position].push(player);
            }
            else if (player.element_type === 3 && position === "MID") {
                const team = props.players.teams.find(team => team.id === player.team)
                player = {
                    ...player,
                    team: { ...team },
                };
                if (player.web_name.toLowerCase().includes(searchTerm.toLowerCase()))
                    allPlayers[position].push(player);
            }
            else if (player.element_type === 4 && position === "FWD") {
                const team = props.players.teams.find(team => team.id === player.team)
                player = {
                    ...player,
                    team: { ...team },
                };
                if (player.web_name.toLowerCase().includes(searchTerm.toLowerCase()))
                    allPlayers[position].push(player);
            }
        });
    }
    populateSquadData("GK")
    populateSquadData("DEF")
    populateSquadData("MID")
    populateSquadData("FWD")
    allPlayers.GK.sort((a, b) => (a.total_points < b.total_points) ? 1 : -1)
    allPlayers.DEF.sort((a, b) => (a.total_points < b.total_points) ? 1 : -1)
    allPlayers.MID.sort((a, b) => (a.total_points < b.total_points) ? 1 : -1)
    allPlayers.FWD.sort((a, b) => (a.total_points < b.total_points) ? 1 : -1)

    let goalkeepers = [];
    let defenders = [];
    let mids = [];
    let forwards = [];

    if (props.squadTransferable === "All") {
        goalkeepers = allPlayers.GK.slice(0, 3).map(player => {
            return <PlayerInfo
                setSelectedPlayerToTransferIN={props.setSelectedPlayerToTransferIN}
                key={player.code}
                player={player} />
        })
    } else if (props.squadTransferable === "GK") {
        goalkeepers = allPlayers.GK.slice(0, 10).map(player => {
            return <PlayerInfo key={player.code} player={player} />
        })
    }
    if (props.squadTransferable === "All") {
        defenders = allPlayers.DEF.slice(0, 5).map(player => {
            return <PlayerInfo key={player.code} player={player} />
        })
    } else if (props.squadTransferable === "DEF") {
        defenders = allPlayers.DEF.slice(0, 10).map(player => {
            return <PlayerInfo key={player.code} player={player} />
        })
    }
    if (props.squadTransferable === "All") {
        mids = allPlayers.MID.slice(0, 5).map(player => {
            return <PlayerInfo key={player.code} player={player} />
        })
    } else if (props.squadTransferable === "MID") {
        mids = allPlayers.MID.slice(0, 10).map(player => {
            return <PlayerInfo key={player.code} player={player} />
        })
    }
    if (props.squadTransferable === "All") {
        forwards = allPlayers.FWD.slice(0, 5).map(player => {
            return <PlayerInfo key={player.code} player={player} />
        })
    } else if (props.squadTransferable === "FWD") {
        forwards = allPlayers.FWD.slice(0, 10).map(player => {
            return <PlayerInfo key={player.code} player={player} />
        })
    }

    return <div className={Styles.TransferPane}>
        <Search value={searchTerm}
            onChange={handleChange} />
        <Dropdown onChange={props.setSquadTransferable} />

        {
            goalkeepers.length > 0 ?
                <div className={Styles.Container}>
                    <div className={Styles.Heading}>
                        Goalkeepers
                    </div>
                    <div className={Styles.Content}>
                        {goalkeepers}
                    </div>
                </div> : ""
        }
        {
            defenders.length > 0 ?
                <div className={Styles.Container}>
                    <div className={Styles.Heading}>
                        Defenders
                    </div>
                    <div className={Styles.Content}>
                        {defenders}
                    </div>
                </div> : ""
        }
        {
            mids.length > 0 ?
                <div className={Styles.Container}>
                    <div className={Styles.Heading}>
                        Midfielders
                    </div>
                    <div className={Styles.Content}>
                        {mids}
                    </div>
                </div> : ""
        }
        {
            forwards.length > 0 ?
                <div className={Styles.Container}>
                    <div className={Styles.Heading}>
                        Forwardss
                    </div>
                    <div className={Styles.Content}>
                        {forwards}
                    </div>
                </div> : ""
        }

        <div className={Styles.Pagination}>
            <Pagination />
        </div>
    </div>
}

export default TransferPane;