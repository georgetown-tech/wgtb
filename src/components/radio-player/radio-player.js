import * as React from 'react'
import * as styles from "./radio-player.module.css"
import { StaticImage } from 'gatsby-plugin-image';

const RadioPlayer = () => {
    return(
        <div className={styles.radioPlayerWrap}>
            <StaticImage className={styles.radioImage} src="../../images/wgtbLogoBlack.png" alt="WGTB logo"/>
            <figcaption className = {styles.audioCaption}>Georgetown Radio</figcaption>
            <audio className={styles.audioPlayer} controls src="https://s4.radio.co/sbeba14c92/listen"></audio>
        </div>
    )
};

export default RadioPlayer;