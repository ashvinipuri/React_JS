import React from "react";
//console.log(React);
import ReactDOM from "react-dom";
import App from "./components/App";
//console.log(ReactDOM);

const result = ReactDOM.createRoot(document.getElementById("root"));
//result.render("Hello World");

// var username = "Ashvini";
// var age = 23;

// result.render(
//     <ul>
//         <li>{username}</li>
//         <li>{age}</li>
//     </ul>
// )

result.render(<App />);
