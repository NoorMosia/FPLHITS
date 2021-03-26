import React, { useState } from "react";
import Board from "../../components/Board/Board";
import Subs from "./Substitutes/Substitutes";

const Lineup = props => {
    let DEF = [];
    const MID = props.players.MID.slice(0, 4)
    const FWD = props.players.FWD.slice(0, 2)

    const [selectedBenchPlayer, setSelectedBenchPlayer] = useState({})
    const [selectedStartingPlayer, setSelectedStartingPlayer] = useState({})

    const players = {
        GK: [props.players.GK[0]],
        DEF: DEF,
        MID: MID,
        FWD: FWD
    }
    const subs = [
        props.players.GK[0],
        props.players.DEF[4],
        props.players.MID[4],
        props.players.FWD[2]
    ];

    if (selectedStartingPlayer.index >= 0 && selectedBenchPlayer.index >= 0) {
        // console.log("swop");
        setSelectedBenchPlayer({})
        setSelectedStartingPlayer({})
    }

    console.log(selectedBenchPlayer);
    console.log(selectedStartingPlayer);


    for (let index = 0; index < props.team.defenders.length - 1; index++) {
        DEF.push(props.players.DEF[props.team.defenders[index]])
    }
    console.log(props.players.DEF[0].position);

    return <>
        <Board
            players={players}
            setSelectedPlayer={setSelectedStartingPlayer}
        />
        <Subs
            players={subs}
            setSelectedPlayer={setSelectedBenchPlayer}
        />
    </>
}

export default Lineup;