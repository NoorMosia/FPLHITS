import React from "react";
import Board from "../../components/Board/Board";

import Subs from "./Substitutes/Substitutes";

const Lineup = props => {
    const DEF = props.players.DEF.slice(0, 4)
    const MID = props.players.MID.slice(0, 4)
    const FWD = props.players.FWD.slice(0, 2)

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

    ]

    return <>
        <Board players={players} />
        <Subs players={subs} />
    </>
}

export default Lineup;