import React from "react";
import * as Styles from "./Board.module.css";

import PlayersContainer from "./PlayersContainer/PlayersContainer";

const Board = () => {
    return <div className={Styles.Board}>
        <PlayersContainer />
    </div >
}

export default Board;