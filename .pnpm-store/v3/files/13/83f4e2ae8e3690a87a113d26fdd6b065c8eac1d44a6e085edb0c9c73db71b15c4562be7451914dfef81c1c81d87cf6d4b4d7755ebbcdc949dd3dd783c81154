# smiirl-library-js
To use the library, you need to install this library with npm.

```bash
npm install smiirl/smiirl-library-js
```

## Usage

### Generate json response
```javascript
const { Counter } = require("@smiirl/smiirl-library-js");
Counter.jsonResponse(12345);
Counter.stringResponse(12345);
```

### Reset to 0

```javascript
const { Counter } = require("@smiirl/smiirl-library-js");
// Get the real values from your counter in https://my.smiirl.com
const mac = "e08e00000000";
const token = "abcdef123456";
const counter = new Counter(mac, token);
counter.reset().then(function(json) {
    console.log("Counter Reset Response", json)
})
```

### Push a number

```javascript
counter.push(12345).then(function(json) {
    console.log("Counter Push Response", json)
})
```

### Add a number to the current value

```javascript
counter.add(21).then(function(json) {
    console.log("Counter Add Response", json)
})
```

## Custom Counters

Smiirl Custom Counters are available on our website [https://www.smiirl.com](https://www.smiirl.com).

