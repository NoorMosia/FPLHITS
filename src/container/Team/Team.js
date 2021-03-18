import React from "react";
import * as Styles from "./Transfers.module.css";

import PlayersContainer from "./PlayersContainer/PlayersContainer";

const Team = () => {
    return <div className={Styles.Transfers}>
        <PlayersContainer />
    </div >
}

export default Team;