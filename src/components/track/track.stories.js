import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};
export const BillieJean = () =>
  createTrackElement("Billie Jean", "Michael Jackson");
export const Thriller = () => createTrackElement("Thriller", "Michael Jackson");
export const beatit = () => createTrackElement("BeatIt", "Michael Jackson");
export const EarthSong = () =>
  createTrackElement("Earth Song", "Michael Jackson");
export const SmoothCriminal = () =>
  createTrackElement("Smooth Criminal", "Michael Jackson");
//export const christmasAdventure = () => createTrackElement("A Christmas Adventure", "TRG Banks");
