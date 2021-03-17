import React from "react";
import * as Styles from "./Substitutes.module.css";

const Substitutes = () => {
    return <div className={Styles.Substitutes}>
        <div className={Styles.Row}>
            <div className={Styles.PlayerColumn}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/BHA.png`}
                    alt="pitch"
                />
            </div>
            <div className={Styles.PlayerColumn}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/TOT.png`}
                    alt="pitch"
                />
            </div>
            <div className={Styles.PlayerColumn}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/LEE.png`}
                    alt="pitch"
                />
            </div>
            <div className={Styles.PlayerColumn}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/LIV.png`}
                    alt="pitch"
                />
            </div>
        </div>

    </div>
}

export default Substitutes;