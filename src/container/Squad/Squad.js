import React from "react";

import Board from "../../components/Board/Board";

const Squad = props => {
    const players = {
        GK: ["Martinez", "McCarthy"],
        DEF: ["Alexander-Arnold", "Dallas", "Taylor", "Dunk", "Veltman"],
        MID: ["Salah", "Fernandez", "Son", "Soucek", "Raphinha"],
        FWD: ["Bamford", "Watkins", "Kane"]
    }
    return <>
        <Board players={players} />
    </>
}

export default Squad;