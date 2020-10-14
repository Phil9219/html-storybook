import { createTrackElement } from "./track";

import coverImg from "../../assets/BillieJeanPic.png";
import coverImgEarthSong from "../../assets/coverImgEarthSong.png";
import coverImgSmoothCriminal from "../../assets/coverImgSmoothCriminal.png";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

const BillieJean = {
  title: "Billie Jean",
  artist: "Michael Jackson",
  imgsrc: coverImg,
  audio:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Simon_Mathewson/Moonshine/Simon_Mathewson_-_16_-_Xmas_Party.mp3",
};
const Thriller = {
  title: "Thriller",
  artist: "Michael Jackson",
  imgsrc: coverImg,
  audio:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Simon_Mathewson/Moonshine/Simon_Mathewson_-_16_-_Xmas_Party.mp3",
};

const beatit = {
  title: "BeatIt",
  artist: "Michael Jackson",
  imgsrc: coverImg,
  audio:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Simon_Mathewson/Moonshine/Simon_Mathewson_-_16_-_Xmas_Party.mp3",
};

const EarthSong = {
  title: "Earth Song",
  artist: "Michael Jackson",
  imgsrc: coverImgEarthSong,
  audio:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Simon_Mathewson/Moonshine/Simon_Mathewson_-_16_-_Xmas_Party.mp3",
};

const SmoothCriminal = {
  title: "Smooth Criminal",
  artist: "Michael Jackson",
  imgsrc: coverImgSmoothCriminal,
  audio:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Simon_Mathewson/Moonshine/Simon_Mathewson_-_16_-_Xmas_Party.mp3",
};

const playlist = [BillieJean, Thriller, beatit, EarthSong, SmoothCriminal];

export const songs = () => {
  const container = document.createElement("div");

  playlist.forEach((song) => {
    const trackElement = createTrackElement(song);
    container.append(trackElement);
  });

  return container;
};
