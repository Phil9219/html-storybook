import "./track.css";

import playActionButtonSrc from "../../assets/playActionButton.svg";
import pauseActionButtonSrc from "../../assets/icon-pause-gradient.svg";

import { createElement } from "../../pages/utils/elements";

// export function createTrackElement(track) {
//   const trackElement = createElement("div", {
//     className: "track",
//     innerText: "Replace Me",
//     children: [
//       createElement("img", {
//         className: "track__image",
//         src: track.imgsrc,
//         alt: `Image of ${track.artist}`,
//       }),
//     ],
//   });

export const createTrackElement = (track) => {
  let isPlaying = false;
  const audioElement = new Audio(track.audio);
  const playActionButton = createElement("img", {
    src: playActionButtonSrc,
  });

  const trackElement = createElement("div", {
    className: "track",
    children: [
      createElement("img", {
        className: "track__image",
        src: track.imgsrc,
        alt: `Image of ${track.artist}`,
      }),

      createElement("div", {
        className: "track__description",
        children: [
          createElement("h3", {
            innerText: track.title,
          }),
          createElement("p", {
            innerText: track.artist,
          }),
        ],
      }),
      createElement("button", {
        className: "track__button",
        children: [playActionButton],
        onclick: () => {
          if (isPlaying === true) {
            audioElement.pause();
            showPlayIcon(playActionButton);
          } else {
            audioElement.play();
            showPauseIcon(playActionButton);
          }

          isPlaying = !isPlaying;
        },
      }),
    ],
  });

  return trackElement;
};

const showPlayIcon = (actionIcon) => {
  actionIcon.src = playActionButtonSrc;
  actionIcon.alt = "Play Button";
};

const showPauseIcon = (actionIcon) => {
  actionIcon.src = pauseActionButtonSrc;
  actionIcon.alt = "Pause Button";
};

// export function createTrackElement(track) {
//   const divElement = document.createElement("div");
//   divElement.className = "track";

//   const titleElement = document.createElement("h3");
//   titleElement.innerText = track.title;

//   const artistElement = document.createElement("p");
//   artistElement.innerText = track.artist;

//   const imgElement = document.createElement("img");
//   imgElement.src = track.imgsrc;
//   imgElement.alt = `Image of ${track.artist}`;
//   imgElement.className = "track__image";

//   const buttonElement = document.createElement("button");
//   const playButtonImage = document.createElement("img");
//   playButtonImage.src = playActionButton;

//   buttonElement.className = "track__button";

//   const descriptionElement = document.createElement("div");
//   descriptionElement.className = "track__descript";
//   descriptionElement.append(titleElement, artistElement);
//   divElement.append(imgElement, descriptionElement, buttonElement);

//   const audioElement = new Audio(track.audio);
//   buttonElement.append(playButtonImage);

//   let isPlaying = false;

//   // const showPlayIcon = function () {
//   //   playButtonImage.src = playActionButton;
//   //   playButtonImage.alt = "Play Button";
//   // };

//   // const showPlayIcon = () => {            // Arrow Function
//   //   playButtonImage.src = playActionButton;
//   //   playButtonImage.alt = "Play Button";
//   // };
//   // function showPauseIcon() {           // else markieren, Glühbirne, extrahieren.
//   //     playButtonImage.src = pauseActionButton;
//   //     playButtonImage.alt = "Pause Button";
//   //   }
//   // }
//   //   const showPauseIcon = () => {
//   //     playButtonImage.src = pauseActionButton;
//   //     playButtonImage.alt = "Pause Button"
//   // }

//   buttonElement.onclick = function () {
//     if (isPlaying === true) {
//       audioElement.pause();
//       showPlayIcon(playButtonImage);
//     } else {
//       audioElement.play();
//       showPauseIcon(playButtonImage);
//     }

//     isPlaying = !isPlaying;
//   };

//   return divElement;
// }
