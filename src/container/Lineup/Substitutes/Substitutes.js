import React from "react";
import * as Styles from "./Substitutes.module.css";

import Player from "../../../components/Board/PlayersContainer/Player/Player";

const Substitutes = props => {
    const subs = props.players.map((player, index) => {
        return <Player
            className={Styles.Selected}
            key={player.code}
            player={player}
            onClick={() => props.setSelectedPlayer({ ...player, index: index })}
            type="subs" />
    });

    return <div className={Styles.Row}>
        {subs}
    </div>
}

export default Substitutes;