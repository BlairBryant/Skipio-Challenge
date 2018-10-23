/*
examples: 

    <div></div>
is transformed to:
    createElement('div', null)

    <div><h1>Heading</h1></div>
is transformed to:
    createElement("div", null, createElement("h1", {}, "Heading"));

    <div>
      <h1>Heading</h1>
      <p>Paragraph</p>
    </div>
is transformed to:
    createElement(
      "div",
      {},
      createElement("h1", null, "Heading"),
      createElement("p", null, "Paragraph")
    );

    <button onClick={fn}>Click Me</button>
is transformed to:
    createElement("button", { onClick: fn }, "Click Me");
*/

export default function createElement(nodeName, attributes, ...children) {
    const node = document.createElement(nodeName)
    console.log(node)
    // node.setAttribute(attributes, '')
  return node;
}