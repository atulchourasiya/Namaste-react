import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement(
    "h1",
    {id : "heading"},
    "Namaste"
)

const root = ReactDOM.createRoot(
    document.getElementById("root")
)

const jsxHeading = <h1>Namaste React using JSX</h1>

const HeadingComponent = ()=> (<h1>Namaste Component</h1>)

// or
const fnOneLiner = ()=> <h1>hello</h1>
//or
const fnReturn = ()=>{
    return <h1>hello</h1>
}
//or
const  fnMultiliner = ()=>(
  <h1>hello</h1>
)
root.render(HeadingComponent());
// root.render(jsxHeading);

//Here i can put javascript inside jsx
const Heading = ()=>{
    const number = 1000;
    <div id="container">
        {
            number
        }
    </div>
}