// import clickSound from "../../assets/audio/click.mp3";
import clickSound from "../../assets/audio/clickSound.mp3";

const playAudio = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.6;
    audio.play();
}

export default playAudio;