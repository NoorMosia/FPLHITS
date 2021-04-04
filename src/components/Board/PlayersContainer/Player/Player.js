import React from "react";
import * as Styles from "./Player.module.css";

const Player = props => {
    let image_url = `${process.env.PUBLIC_URL}/images/ARS.png`;
    // if (props.player.element_type === 1) {
    //     image_url = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${props.player.team_code}_1-110.png`
    // } else {
    //     image_url = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${props.player.team_code}-110.png`
    // }

    return <div
        onClick={props.onClick}
        className={Styles.PlayerColumn}
    >
        <img
            src={image_url}
            alt="pitch"
        />
        <div className={Styles.TextContainer}>
            <div className={Styles.PlayerName}>
                {props.player.web_name}
            </div>
            <div className={Styles.Fixture}>
                {props.player.position}
            </div>
        </div>
    </div >
}

export default Player;