# compifly
A Front-end library for creating dynamic html elements on the fly. Its makes it easy to create dynamics elements coupled with data(e.g, data coming from the database).

## Installation
#### Using npm
```commandline
  npm install compifly --save
```
You can also check it out on [NPM](http://www.npmjs.com/compifly)

## Usage
### Require complify

```javascript
  var complify = require("complify");
  
  // extract component constructor
  var Component = complifly.Component;
```

###Instantiating a component (creating an element)

```javascript
  // creating a "p" tag
  
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
