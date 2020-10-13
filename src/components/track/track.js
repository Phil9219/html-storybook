import "./track.css";
import michaelJacksonCoverPic from "../../assets/BillieJeanPic.png";
import playActionButton from "../../assets/playActionButton.svg";

export function createTrackElement(title, artist) {
  const divElement = document.createElement("div");
  divElement.className = "track";

  const titleElement = document.createElement("h3");
  titleElement.innerText = title;
  const artistElement = document.createElement("p");
  artistElement.innerText = artist;
  const imgElement = document.createElement("img");
  imgElement.src = michaelJacksonCoverPic;
  imgElement.alt = `Image of ${artist}`;
  imgElement.className = "track__image";

  const buttonElement = document.createElement("button");
  const playButtonImage = document.createElement("img");
  playButtonImage.src = playActionButton;
  buttonElement.className = "track__button";

  const descriptionElement = document.createElement("div");
  descriptionElement.className = "track__descript";
  descriptionElement.append(titleElement, artistElement);
  divElement.append(imgElement, descriptionElement, buttonElement);

  buttonElement.append(playButtonImage);
  buttonElement.onclick = function () {
    alert(`CLick`);
  };

  return divElement;
}
