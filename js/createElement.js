const createElement = (type, content, attributes) => {
  //make a function which creates an element of a given type
  const element = document.createElement(type);

  if (attributes !== undefined) {
    Object.assign(element, attributes);
  }

  if (Array.isArray(content)) {
    content.forEach(append);
  } else if (content !== null && content !== undefined) {
    append(content);
  }

  function append(node) {
    if (typeof node === "string") {
      node = document.createTextNode(node);
    }

    element.appendChild(node);
  }

  return element;
};

export default createElement;
