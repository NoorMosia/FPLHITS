import React from "react";
import Board from "../../components/Board/Board";

import Subs from "./Substitutes/Substitutes";

const Lineup = props => {
    const DEF = props.players.DEF.slice(0, 4)
    const MID = props.players.MID.slice(0, 4)
    const FWD = props.players.FWD.slice(0, 2)

    const players = {
        GK: [props.players.GK[[props.team.goalkeeper[0]]]],
        DEF: DEF,
        MID: MID,
        FWD: FWD
    }
    // console.log(props)
    console.log(players)

    return <>
        <Board players={players} />
        {/* <Subs /> */}
    </>
}

export default Lineup;