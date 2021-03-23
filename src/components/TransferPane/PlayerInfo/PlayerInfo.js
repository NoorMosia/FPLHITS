import React from "react";
import * as Styles from "./PlayerInfo.module.css";

const PlayerInfo = props => {
    let image_url;
    if (props.player.element_type === 1) {
        image_url = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${props.player.team_code}_1-110.png`
    } else {
        image_url = `https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_${props.player.team_code}-110.png`
    }
    return <div className={Styles.PlayerInfo}>
        <div className={Styles.ImageContainer}>
            <img
                src={image_url}
                alt="pitch"
            />
        </div>
        <div className={Styles.Name}>
            {props.player.web_name}
        </div>
        <div className={Styles.Team}>
            {props.player.total_points}
        </div>
        <div className={Styles.Price}>
            £{parseFloat(props.player.now_cost / 10).toFixed(1)}
        </div>
    </div>
}

export default PlayerInfo;