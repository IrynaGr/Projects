# This folder contains everything concerning the application


## Installation

In order to get you started you are going to need the following:

1. Get [NodeJS](https://nodejs.org/)  
  Node is the main engine used to run the project and all dependencies in development.  
  This comes together with NPM (node package manager) which is used to manage project dependencies.  
  Generally speaking it is best to use to most recent (stable) version of both Node and NPM.  

2. Install 'global' packages  
  Global packages are installed using `npm install -g <package>` and are used to manage project dependencies.
  These include (but are not limited to):  
    * Serve (serves files in current directory): `npm install -g serve`
    * Yarn (marginally better version of npm): `npm install -g yarn`
  These packages may vary based on the specific project setup..  

3. Install 'local' packages  
  Inside the application directory (the one that contains 'package.json' file) run `npm install` or `yarn`  
  This is going to read `package.json` and install all dependencies listed there.  


## Requirements

There are two types of requirements:

**1. Development requirements**

  These requirements include tools used to help you with development of the application.  
  For example, while working you typically don't want to reload the browser and there are tools that 'autoreload' the browser everytime the source is changed.  
  A list of dependencies used in production can be found under the `devDependencies` key inside `package.json`.  

**2. Production requirements**

  These requirements include tools used to build the application and serve it in production.  
  A list of dependencies used in production can be found under the `dependencies` key inside `package.json`.  

## Development

In order to run the application:

`npm start` or `yarn start`


### JS

Workflow with js would differe depending on the framework of choice.  
For more information please refer to the [javascript source](./src/js)

### CSS
Watch an introduction of our CSS infrastructure and strategy:  
[slides.com/jordypouw/css-rant/](http://slides.com/jordypouw/css-rant/)

For more information please refer to the [css source](./src/css)
