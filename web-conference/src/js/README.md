# Javascript files

This folder contains all javascript files required to run the applucation.

## Structure

The structure of files in this folder is up to you

Javacsript is versatile and there are various different ways to structure your javascript code.
One could write plain (vanilla) js in a single file
Or use a library (like jQuery) to help with some common functionality.
Or use a framework to write procedural or object oriented code.

The choice depends on the scope of the application and personal preference.
Most projects at Stamkracht are large enough that they require some sort of structure in order to be maintainable.
At the time of writing some projects use Angular and other React.

## Frameworks

There are different choices when it comes to using a framework:

- [EmberJS](https://www.emberjs.com/)
- [AngularJS](https://angular.io/)
- [ReactJS](https://reactjs.org/)
- [Vue](https://vuejs.org/)

For more information on javascript frameworks and tooling anno 2017 read [this](https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711)

## ReactJS

For now we have included a simple setup for an applucation in ReactJS to get you started.

As you can see this is a very minimal setup - take a look at [`index.js`](./index.js) file.

There are three things of importance to note here:

1. Import `React` and `ReactDOM`  
    These packages take care of the rendering part

2. Import the main `App` component  
    This is our main component that has all the business logic

3. Render `App` component inside the div with id `root`  
    This is to let react know that we want our App inside the [app/index.html](../../index.html)

All React components live in the [`components`](./components) folder :)

### Structure

Typically react apps consist of the following items:

1. Components  
    These are the most common objects in react universe.  
    Read more about components in the [components directory](./components)  

2. Services  
    Services take care of specific functionality such as data handling, api connection and others.  

3. Styles  
    Styles (css/scss) can be global or specific to the component.  
    Global styles would reside in a global (style directory](../css).  
    Styles specific to the component are imported directly in the component file.  

4. Utils  
    Utility functions help with various common tasks such as parsing text or sanitizing user input.  

For more information on how to get started with ReactJS check the [docs](https://reactjs.org/docs/hello-world.html)