# Layout Foundation

- React will replace the content not append
- it is very clumsy to create structure with createElement in react that's where JSX came into picture
- JSx is not a part of react
- JSx is not a html it is html like syntax 
- JSx is not a pure js it is converted into js by babel
- JSx code is transpiled before it reaches the JS engine 
- Transpiling is done by parcel and itself is not doing this it is done by babel there 
- Babel is the javascript compiler convert jsx into react.createElement
- if you need to write jsx in multiple line then you need to give it inside bracket

## Babel 
- babel also convert es6 code for old browser

## Component
- need to create component in the capital letter 
- A function that return a jsx code is a function component 
- The differe nce between react element and react component is react component use uses arrow function.
```
const headingElement = (
    <h1>Element</h1>
)
const HeadingComponent = ()=>{
    return <h1>Element</h1>
}
```
another difference is you can render element in 
```
root.render(headingelement)
```
but you need to call a component either by using JSx syntax or call method 
```
root.render(<Heading/>)
or
root.render(Heading())
```

## what is component composition
- Component composition in React is the process of combining smaller, reusable components to create more complex UIs. This approach promotes code reusability, modularity, and maintainability.
- we can use normal function instead of arrow function but you need to return it 
- but it better to use arrow function
- if you write curly bracket inside jsx we can run any javascript code
- can also render react element inside component
- jsx take care xss attack 
- jsx sanitize the data in jsx
- we can write component like this also 
```
<Title></Title>
```
We can also call the functional component like this
```
Title();
```