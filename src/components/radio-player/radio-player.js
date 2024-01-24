import * as React from 'react'
import "./radio-player.css"

const RadioPlayer = () => {
    return(
        <div className="radio-player-wrap">
            <img className="radio-image" src="https://i0.wp.com/georgetownradio.com/wp/wp-content/themes/Ciola-child/img/footer-logo.png?w=600" alt="WGTB logo"></img>
            <figcaption className = "audio-caption">Georgetown Radio</figcaption>
            <audio className= "audio-player" controls src="https://s4.radio.co/sbeba14c92/listen"></audio>
        </div>
    )
};

export default RadioPlayer;