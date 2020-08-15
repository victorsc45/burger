# burger
fun with MVC, ORM, MYSQL,EXPRESS, and Express-Handlebars


 

[![npm version](http://versionbadg.es//[victorsc45]/[burger].svg)](https://img.shields.io/npm/v/badges.svg)

 # Licence
  
  >  
     * select the license badge to view licence aggreements:

     
[![License](https://img.shields.io/badge/License-MIT-lime.svg)](https://opensource.org/licenses/MIT)

  ### :octocat:
  ### node js :package: 

# Burger App
* Using MVC development methods
* requiring: Object Relational Mapping (ORM)
  NPM package mysql
  Leveraging Express for the app and Express-handlebars for the view

# Table of Contents
  <!-- toc -->
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Setup](#setup)
  * [Contributors](#contributors)
  * [GitHub Information](#github-information)
  * [Questions](#questions)
  * [Credits](#credits)
  * [Testing](#testing)
   <!-- toc stop -->

# Description

> This application uses MVC to create an app that   
    models, views (provided by express-handlebars) and 
    custom controllers to route crud operations for the user

# Installation

>No installation for the deployed version can  
 be found on Heroku at:

 https://tinyurl.com/burger-dive

    or

 https://lit-oasis-69475.herokuapp.com/

# Usage

 **As a User:**

* Devour a Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the 
    left side of the page --  waiting to be devoured

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger
     will move to the right side of the page

* The app will store every burger in a database, whether devoured or not and can be thrown away 
    if user wants to
  

#### **User input**

* Build your own burger
* choose a menu item burger
* Eat the burger and clean up your own mess or not!

# Setup

#### Config Setup


   *  `orm.js` file, the methods execute the necessary MySQL commands in the controllers. These are the
         methods  used order to retrieve and store data in your database

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`
     *  `delete()`

   * ORM object is exported

#### Model setup

* Inside a folder named `models`

  * In `models`, make a `burger.js` file.

    *  `orm.js` is imported into `burger.js`

    *  `burger.js` code calls the ORM functions using burger specific input for the ORM.

    * Exports burger.

#### Controller setup

   * Controllers folder named `controllers`.

   * In `controllers` is the  `burgers_controller.js` file.

     Inside the `burgers_controller.js` file, the following is required:

   * Express npm package
   * `burger.js`

     From the express npm packeage the router is used to route all controller CRUD operations.

#### View setup

 Express-handlebars uses views directory with an index.handlebars file and a layouts directory inside of the view directory with a main.handlebars file .

   * Setup the `main.handlebars` file so it's able to be used by Handlebars.

   * Setup the `index.handlebars` to have the template that Handlebars can render onto.
   
   * Create a button in `index.handlebars` that will submit the user input into the database.


# Contributors

#### askBCS Learning assistant @iarcones "Thanks again" :)
#### @Carl Vega [TA] thanks for giving the code a second look for me!

 ## **GitHub Information**
 
  # '''' https://github.com/victorsc45 ''''

  Picture of Developer: 

  <img src="https://avatars0.githubusercontent.com/victorsc45" width="200px" >
  
  ## *Questions*

  > questions or comments contact me by email : 

     
  ####  victorlitzau+github@gmail.com


 ### Credits

#### https://www.w3schools.com/jsref/jsref_splice.asp
#### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
#### https://stackoverflow.com
#### https://www.npmjs.com/package/express
#### https://www.npmjs.com/
# Testing

**testing I have provided a screenshot of final handlebars deployed html view**

<img src="./public/assets/img/Devour-some-burgers" width="500px" >



