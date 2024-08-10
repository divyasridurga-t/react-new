let heading = React.createElement(
  "h1",
  { className: "heading_1", id: "heading_container" },
  "hello guys !!!!!!!!"
);
let h2tag = React.createElement("h2", {}, "heading 2 tag");
let divTag = React.createElement("div", { class: "container" }, [
  heading,
  h2tag,
]);
let root = ReactDOM.createRoot(document.getElementById("route")); // manipulating reactDOM to inject the content inside div with id route
// ReactDOM.render(divTag, root)  this is no longer supported in 18
root.render(divTag);
