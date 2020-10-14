import "./track.css";

import playActionButton from "../../assets/playActionButton.svg";
import pauseActionButton from "../../assets/icon-pause-gradient.svg";

export function createTrackElement(track) {
  const divElement = document.createElement("div");

  const showPlayIcon = (actionIcon) => {
    actionIcon.src = playActionButton;
    actionIcon.alt = "Play Button";
  };

  const showPauseIcon = (actionIcon) => {
    actionIcon.src = pauseActionButton;
    actionIcon.alt = "Pause Button";
  };

  divElement.className = "track";

  const titleElement = document.createElement("h3");
  titleElement.innerText = track.title;

  const artistElement = document.createElement("p");
  artistElement.innerText = track.artist;

  const imgElement = document.createElement("img");
  imgElement.src = track.imgsrc;
  imgElement.alt = `Image of ${track.artist}`;
  imgElement.className = "track__image";

  const buttonElement = document.createElement("button");
  const playButtonImage = document.createElement("img");
  playButtonImage.src = playActionButton;

  buttonElement.className = "track__button";

  const descriptionElement = document.createElement("div");
  descriptionElement.className = "track__descript";
  descriptionElement.append(titleElement, artistElement);
  divElement.append(imgElement, descriptionElement, buttonElement);

  const audioElement = new Audio(track.audio);
  buttonElement.append(playButtonImage);

  let isPlaying = false;

  // const showPlayIcon = function () {
  //   playButtonImage.src = playActionButton;
  //   playButtonImage.alt = "Play Button";
  // };

  // const showPlayIcon = () => {            // Arrow Function
  //   playButtonImage.src = playActionButton;
  //   playButtonImage.alt = "Play Button";
  // };
  // function showPauseIcon() {           // else markieren, Glühbirne, extrahieren.
  //     playButtonImage.src = pauseActionButton;
  //     playButtonImage.alt = "Pause Button";
  //   }
  // }
  //   const showPauseIcon = () => {
  //     playButtonImage.src = pauseActionButton;
  //     playButtonImage.alt = "Pause Button"
  // }

  buttonElement.onclick = function () {
    if (isPlaying === true) {
      audioElement.pause();
      showPlayIcon(playButtonImage);
    } else {
      audioElement.play();
      showPauseIcon(playButtonImage);
    }

    isPlaying = !isPlaying;
  };

  return divElement;
}
