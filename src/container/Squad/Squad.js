import React from "react";

import Board from "../../components/Board/Board";

const Squad = props => {
    return <>
        <Board players={props.players} />
    </>
}

export default Squad;