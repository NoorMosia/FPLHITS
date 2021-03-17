import React from "react";
import * as Styles from "./Transfers.module.css";

import PlayersContainer from "./PlayersContainer/PlayersContainer";

const Transfers = () => {
    return <div className={Styles.Transfers}>
        <PlayersContainer />
    </div >
}

export default Transfers;