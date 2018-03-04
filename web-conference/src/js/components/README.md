# React components

Components are the most common objects in react.

Typically you would have a main component that functions as the single source of truth in your application.  
For now we have created the `App` component to serve this function.  
(by convention file names of components are capitalized)  

Every component has to be a javascript class that extends from `React.Component`.  
The most important function of any component is called `render()`, it should return a single (html-like) element.  

In other words, a single component can return html like `<h1>hello</h1>`
Or any combination of html and/or multiple other react components.

## Main component

In this example we made a single [`App`](./App.js) component our main component.  
This means that most (if not all) of the business logic will be here.  

This makes it easy to pass on the functionality down to the components on the lower level.

## Properties

You can pass properties down to the components from the parent to the child.  

These properties can be anything - strings, integers, objects, arrays or functions.  

If you need to have some value on the parent updated based on a change in the child, simply pass an update function using the props.  

## State

Every react component has a state, this makes the component update when the state is changed.  

To initialize the state in your component, simply put it in the constructor like so:

```
this.state = {
  'count': 15,
}
```

To update that counter you can do:

```
this.setState({count: 16})
```

React will take care of rendering this updated count variable.  