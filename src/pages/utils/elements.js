// export const createElement = (tagName, props) => {
//   const element = document.createElement(tagName);
//   element.className = props.className;
//   element.innerText = props.innerText;

//   return elements;
// };

export const createElement = (tagName, props) => {
  const element = document.createElement(tagName);
  const { children, ...otherProps } = props;

  Object.assign(element, otherProps);
  if (children) {
    element.append(...children);
  }
  return element;
};
