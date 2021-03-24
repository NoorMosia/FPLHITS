import React from "react";
import * as Styles from "./UserInfoPane.module.css";

const UserInfoPane = () => {
    return <div className={Styles.UserInfoPane}>
        <div className={Styles.Name}>
            <div className={Styles.Label}>
                Team Name
            </div>
            <div className={Styles.Value}>
                Two-Bissaka
            </div>
        </div>
        <div className={Styles.GWPoints}>
            <div className={Styles.Label}>
                GW29 points
            </div>
            <div className={Styles.Value}>
                46
            </div>
        </div>
        <div className={Styles.Points}>
            <div className={Styles.Label}>
                OR Points
            </div>
            <div className={Styles.Value}>
                100
            </div>
        </div>
        <div className={Styles.GWPoints}>
            <div className={Styles.Label}>
                Average Points
            </div>
            <div className={Styles.Value}>
                21
            </div>
        </div>
    </div>
}

export default UserInfoPane;