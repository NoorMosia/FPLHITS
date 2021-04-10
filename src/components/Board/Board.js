import React from "react";
import * as Styles from "./Board.module.css";

import PlayersContainer from "./PlayersContainer/PlayersContainer";

const Board = props => {
    return <div className={Styles.Board}>
        <PlayersContainer
            {...props}
            players={props.players}
        />
    </div >
}

export default Board;