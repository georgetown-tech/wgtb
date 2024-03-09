import React from "react";
import * as styles from "./radio-player.module.css";
import { StaticImage } from "gatsby-plugin-image";

// Radio player component
const RadioPlayer = () => {
  return (
    <div className={styles.radioPlayerWrap}>
      <StaticImage
        className={styles.radioImage}
        src="../../images/wgtbLogoBlack.png"
        alt="WGTB logo"
      />
      <figcaption className={styles.audioCaption}>Georgetown Radio</figcaption>
      <audio controls autoPlay src="https://s4.radio.co/sbeba14c92/listen">
        <track kind="captions" src="" srcLang="en" label="English" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default RadioPlayer;
