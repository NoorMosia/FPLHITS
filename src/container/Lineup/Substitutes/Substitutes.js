import React from "react";
import * as Styles from "./Substitutes.module.css";

import Player from "../../../components/Board/PlayersContainer/Player/Player";

const PlayersContainer = () => {
    return <div className={Styles.Row}>
        <Player playerName="Martinez" fixture="NEW(H)" />
        <Player playerName="Martinez" fixture="NEW(H)" />
        <Player playerName="Martinez" fixture="NEW(H)" />
        <Player playerName="Martinez" fixture="NEW(H)" />
    </div>
}

export default PlayersContainer;