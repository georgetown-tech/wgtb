import * as React from 'react'
import * as styles from "./radio-player.module.css"

const RadioPlayer = () => {
    return(
        <div className={styles.radioPlayerWrap}>
            <img className={styles.radioImage} src="https://i0.wp.com/georgetownradio.com/wp/wp-content/themes/Ciola-child/img/footer-logo.png?w=600" alt="WGTB logo"></img>
            <figcaption className = {styles.audioCaption}>Georgetown Radio</figcaption>
            <audio className={styles.audioPlayer} controls src="https://s4.radio.co/sbeba14c92/listen"></audio>
        </div>
    )
};

export default RadioPlayer;