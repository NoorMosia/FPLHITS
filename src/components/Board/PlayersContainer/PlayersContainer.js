import React from "react";
import * as Styles from "./PlayersContainer.module.css";

import Player from "./Player/Player";

const PlayersContainer = props => {
    const selectPlayer = (player, index) => {
        if (!player.selectedStartingPlayer.id) {
            props.setSelectedPlayer({ ...player, index: index })
            if (!player.selectedSquadPlayer.id) {
                props.setSelectedPlayer({ ...player, index: index })
            } else {
                props.setSelectedPlayer({})
            }
        } else {
            props.setSelectedPlayer({})
        }
    }
    const GK = props.players.GK.map((player, index) => {
        return <Player
            key={player.id}
            player={player}
            setSelectedPlayer={props.setSelectedPlayer}
            onClick={() => selectPlayer(player, index)}
        />
    })

    const DEF = props.players.DEF.map((player, index) => {
        return <Player
            key={player.id}
            player={player}
            setSelectedPlayer={props.setSelectedPlayer}
            onClick={() => selectPlayer(player, index)}
        />
    })

    const MID = props.players.MID.map((player, index) => {
        return <Player
            key={player.id}
            player={player}
            setSelectedPlayer={props.setSelectedPlayer}
            onClick={() => selectPlayer(player, index)}
        />
    })

    const FWD = props.players.FWD.map((player, index) => {
        return <Player
            key={player.id}
            player={player}
            setSelectedPlayer={props.setSelectedPlayer}
            onClick={() => selectPlayer(player, index)}
        />
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