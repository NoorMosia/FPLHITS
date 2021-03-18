import React from "react";
import * as Styles from "./Player.module.css";

const Player = props => {
    return <div className={Styles.PlayerColumn}>
        <img
            src={`${process.env.PUBLIC_URL}/images/AVLK.png`}
            alt="pitch"
        />
        <div className={Styles.TextContainer}>
            <div className={Styles.PlayerName}>
                {props.playerName}
            </div>
            <div className={Styles.Fixture}>
                {props.fixture}
            </div>
        </div>
    </div>
}

export default Player;