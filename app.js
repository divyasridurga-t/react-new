 // basic way of creating dynamic tags in react
 let content = React.createElement("h1", { 'id': 'heading1' }, 'Hello World !!!');

 // nested
 let example = React.createElement("div", { id: "parent" },
     React.createElement("div", { id: "child" },
         React.createElement("div", { id: 'inner_child' },
             "This div has 2 parent classes")))

 // tags with 2 child classes  
 let example_2 = React.createElement("div", { id: "parent" }, [
     React.createElement("div", { id: "child1" }, React.createElement("h2", { id: "inner_child1" }, "child element 1")),
     React.createElement("div", { id: "child2" }, React.createElement("h2", { id: "inner_child2" }, "child element 2"))
 ])



 let root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(example_2)