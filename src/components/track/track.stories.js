import { createTrackElement } from "./track";
import coverImg from "../../assets/BillieJeanPic.png";
export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};
export const BillieJean = () =>
  createTrackElement({
    title: "Billie Jean",
    artist: "Michael Jackson",
    imgsrc: coverImg,
    audio:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Simon_Mathewson/Moonshine/Simon_Mathewson_-_16_-_Xmas_Party.mp3",
  });
export const Thriller = () => createTrackElement("Thriller", "Michael Jackson");
export const beatit = () => createTrackElement("BeatIt", "Michael Jackson");
export const EarthSong = () =>
  createTrackElement("Earth Song", "Michael Jackson");
export const SmoothCriminal = () =>
  createTrackElement("Smooth Criminal", "Michael Jackson");
//export const christmasAdventure = () => createTrackElement("A Christmas Adventure", "TRG Banks");
