import React from "react";
import * as Styles from "./TransferPane.module.css";

import PlayerInfo from "./PlayerInfo/PlayerInfo";

const TransferPane = () => {
    return <div className={Styles.TransferPane}>
        <div className={Styles.Container}>
            <div className={Styles.Heading}>
                Goalkeepers
            </div>
            <div className={Styles.Content}>
                <PlayerInfo />
                <PlayerInfo />
                <PlayerInfo />
            </div>
        </div>
        <div className={Styles.Container}>
            <div className={Styles.Heading}>
                Defenders
            </div>
            <div className={Styles.Content}>
                <PlayerInfo />
                <PlayerInfo />
                <PlayerInfo />
                <PlayerInfo />
                <PlayerInfo />
            </div>
        </div>
        <div className={Styles.Container}>
            <div className={Styles.Heading}>
                Midfielders
            </div>
            <div className={Styles.Content}>
                <PlayerInfo />
                <PlayerInfo />
                <PlayerInfo />
                <PlayerInfo />
                <PlayerInfo />

            </div>
        </div>
        <div className={Styles.Container}>
            <div className={Styles.Heading}>
                Forwards
            </div>
            <div className={Styles.Content}>
                <PlayerInfo />
                <PlayerInfo />
                <PlayerInfo />
                <PlayerInfo />
                <PlayerInfo />

            </div>
        </div>
    </div>
}

export default TransferPane;