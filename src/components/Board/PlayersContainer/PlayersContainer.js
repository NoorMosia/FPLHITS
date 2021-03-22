import React from "react";
import * as Styles from "./PlayersContainer.module.css";

import Player from "./Player/Player";

const PlayersContainer = props => {
    console.log("props")
    const GK = props.players.GK.map(player => {
        return <Player key={player.id} player={player} fixture="NEW(H)" />
    })

    const DEF = props.players.DEF.map(player => {
        return <Player key={player.id} player={player} fixture="NEW(H)" />
    })

    const MID = props.players.MID.map(player => {
        return <Player key={player.id} player={player} fixture="NEW(H)" />
    })

    const FWD = props.players.FWD.map(player => {
        return <Player key={player.id} player={player} fixture="NEW(H)" />
    })

    return <div className={Styles.PlayersContainer}>
        <div className={Styles.Row}>
            {GK}
        </div>
        <div className={Styles.Row}>
            {DEF}
        </div>
        <div className={Styles.Row}>
            {MID}
        </div>
        <div className={Styles.Row}>
            {FWD}
        </div>
    </div >
}

export default PlayersContainer;