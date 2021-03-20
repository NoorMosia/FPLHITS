import React from "react";
import Board from "../../components/Board/Board";

import Subs from "./Substitutes/Substitutes";

const Lineup = () => {
    const players = {
        GK: ["Martinezo"],
        DEF: ["Alexander-Arnold", "Taylor", "Dunk", "Veltman"],
        MID: ["Salah", "Fernandez", "Son", "Soucek", "Raphinha"],
        FWD: ["Bamford"]
    }

    return <>
        <Board players={players} />
        <Subs />
    </>
}

export default Lineup;