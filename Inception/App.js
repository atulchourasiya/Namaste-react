//Creating hello world from react
// const heading = React.createElement("h1", {id:'xyz'}, "Hello world from react!");
// const root = ReactDOM.createRoot(document.getElementById('reactRoot'));
// root.render(heading);

// how to create a struction of react
const parent = React.createElement("div", { id: 'parent' },
React.createElement(
   "div",
   {id:"child"},
   [React.createElement('h1',{},'I am h1'),
   React.createElement('h1',{},'I am h1')]
));

const root = ReactDOM.createRoot(document.getElementById('reactRoot'));

root.render(parent);