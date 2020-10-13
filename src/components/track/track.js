import "./track.css";

import playActionButton from "../../assets/playActionButton.svg";

export function createTrackElement(track) {
  const divElement = document.createElement("div");
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
  buttonElement.onclick = function () {
    audioElement.play();
  };

  return divElement;
}
