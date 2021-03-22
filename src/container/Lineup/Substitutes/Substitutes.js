import React from "react";
import * as Styles from "./Substitutes.module.css";

import Player from "../../../components/Board/PlayersContainer/Player/Player";

const Substitutes = props => {
    const subs = props.players.map(player => {
        return <Player key={player.code} player={player} type="subs" />
    })

    return <div className={Styles.Row}>
        {subs}
    </div>
}

export default Substitutes;