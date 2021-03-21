import React from "react";

import Board from "../../components/Board/Board";

const Squad = props => {
    // const players = {
    //     GK: ["Martinez", "McCarthy"],
    //     DEF: ["Alexander-Arnold", "Dallas", "Taylor", "Dunk", "Veltman"],
    //     MID: ["Salah", "Fernandez", "Son", "Soucek", "Raphinha"],
    //     FWD: ["Bamford", "Watkins", "Kane"]
    // }
    console.log(props.SquadData)
    return <>
        <Board players={props.SquadData} />
    </>
}

export default Squad;