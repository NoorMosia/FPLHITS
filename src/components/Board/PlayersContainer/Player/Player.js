import React from "react";
import * as Styles from "./Player.module.css";

const Player = props => {
    let image_url = `${process.env.PUBLIC_URL}/images/LIV.png`;
    if (props.player.element_type === 1) {
        image_url = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${props.player.team_code}_1-110.png`
    } else {
        image_url = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${props.player.team_code}-110.png`
    }
    let style = `${Styles.PlayerColumn}`

    if (props.player.selectedStartingPlayer.code === props.player.code) {
        style += ` ${Styles.Opaque}`
    }
    if (props.player.selectedBenchPlayer.code === props.player.code) {
        style += ` ${Styles.Opaque}`
    }
    if (props.player.selectedSquadPlayer.code === props.player.code) {
        style += ` ${Styles.Opaque}`
    }

    return <div
        onClick={props.onClick}
        className={style}
    >
        <img
            src={image_url}
            alt="pitch"
        />
        {/* <div className={Styles.Number}>{props.player.team.short_name}</div> */}

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