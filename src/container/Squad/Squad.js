import React from "react";

import Board from "../../components/Board/Board";

const Squad = props => {
    return <>
        <Board
            players={props.players}
            setSelectedPlayer={props.setSelectedSquadPlayer}
        />
    </>
}

export default Squad;