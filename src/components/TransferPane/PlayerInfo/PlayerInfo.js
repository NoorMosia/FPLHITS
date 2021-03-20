import React from "react";
import * as Styles from "./PlayerInfo.module.css";

const PlayerInfo = () => {
    return <div className={Styles.PlayerInfo}>
        <div className={Styles.ImageContainer}>
            <img
                src={`${process.env.PUBLIC_URL}/images/LIV.png`}
                alt="pitch"
            />
        </div>
        <div className={Styles.Name}>
            Martinez
                </div>
        <div className={Styles.Team}>
            AVL
                </div>
        <div className={Styles.Price}>
            £5.2
                </div>
    </div>
}

export default PlayerInfo;