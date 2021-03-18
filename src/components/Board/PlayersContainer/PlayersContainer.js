import React from "react";
import * as Styles from "./PlayersContainer.module.css";

import Player from "./Player/Player";

const PlayersContainer = () => {
    return <div className={Styles.PlayersContainer}>
        <div className={Styles.Row}>
            <Player playerName="Martinez" fixture="NEW(H)" />
        </div>

        <div className={Styles.Row}>
            <Player playerName="Martinez" fixture="NEW(H)" />
            <Player playerName="Martinez" fixture="NEW(H)" />
            <Player playerName="Martinez" fixture="NEW(H)" />
        </div>
        <div className={Styles.Row}>
            <Player playerName="Martinez" fixture="NEW(H)" />
            <Player playerName="Martinez" fixture="NEW(H)" />
            <Player playerName="Martinez" fixture="NEW(H)" />
            <Player playerName="Martinez" fixture="NEW(H)" />
            <Player playerName="Martinez" fixture="NEW(H)" />
        </div>
        <div className={Styles.Row}>
            <Player playerName="Martinez" fixture="NEW(H)" />
            <Player playerName="Martinez" fixture="NEW(H)" />
        </div>
    </div >
}

export default PlayersContainer;