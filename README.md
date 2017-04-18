# compifly
A Front-end library for creating dynamic html elements on the fly. Its makes it easy to create dynamic elements coupled with data(e.g, data coming from the database).

## Installation
#### Using npm
```commandline
  npm install compifly --save
```
You can also check it out on [NPM](http://www.npmjs.com/compifly)

## Usage
### Require compifly

```javascript
  var compifly = require("complify");
  
  // extract component constructor
  var Component = compifly.Component;
```

### Instantiating a component (creating an element)

```javascript
  // creating a paragraph tag on the fly
  
  var paragraph = new Component({
    type: "p",
    innerText: "Hey Compifly",
    style: {
      "background-color": "#bbb",
      "padding": "24px",
      "color": "white"
    }
  })
 ```
 The Component constructor takes one argument which is an object. For now, the object only takes 3 properties:
 * **type** - this is the type of element you want to create
 * **innerText** - this is the innerHTML of the created element
 * **style** - this is an object that contains the styles to be applied to the created element. **PS: the properties and property values      should all be in double quotes**
 
 ### Appending the created element to its parent
 
 Now that we have instantiated the component, the component will be automatically generated; but the element wont be visible in the html  file until we append it to an existing element in the html.
 
 ##### For example, we are going to append the created element to the body tag.
 
 ```javascript
  paragraph.append(document.body);
  ```
  
  The append() method appends the created element to the specified element in the argument **PS: this takes only one element**
  
  #### How did you find the library, feel free to drop suggestions and complains. More features coming soon.
  
