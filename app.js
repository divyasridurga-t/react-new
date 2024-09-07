import React from "react";
import ReactDOM from "react-dom/client";

// approach-1
// let heading = React.createElement(
//   "h1",
//   { className: "heading_1", id: "heading_container" },
//   "hello guys !!!!!!!!"
// );
// let h2tag = React.createElement("h2", {}, "heading 2 tag");
// let divTag = React.createElement("div", { class: "container" }, [
//   heading,
//   h2tag,
// ]);

// approach -2
{/* <div class="parent">
  <div class="child">
    <h2>H2 tag</h2>
  </div>
</div> */}

let x= React.createElement("div",{className:"parent"}, 
  React.createElement("div",{className:"child", key:"child"},[ React.createElement("h2", {key:"h2"},"H2 tag with nesting approach"), React.createElement("h3",{key:"h3"}, "h3 tag for sibling element reference")]
)
)

let root = ReactDOM.createRoot(document.getElementById("route")); // manipulating reactDOM to inject the content inside div with id route
// ReactDOM.render(divTag, root)  this is no longer supported in 18
root.render(x);
