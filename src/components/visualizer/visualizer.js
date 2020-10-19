import "./visualizer.css";
import { createElement } from "../../pages/utils/elements";

export const createVisualizer = () => {
  const visualizerContainer = createElement("div", {
    className: "visualizerContainer",
  });

  for (let i = 0; i < 20; i++) {
    const einDiv = createElement("div", {
      classsName: "line",
      innerText: "ManyBars",
    });
    visualizerContainer.append(einDiv);
  }

  return visualizerContainer;
};
