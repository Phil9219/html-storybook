export function create2TrackElement() {
  const divElement = document.createElement("div"); // <div><
  divElement.innerText = "Be the girl";

  const h3Element = document.createElement("h3");
  h3Element.innerText = "Bebe Rexa";

  divElement.append(h3Element);
  return divElement;
}
