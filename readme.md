## usage

```js

let ghostDefault = require('ghost-default')

let object = {
  hello: (name) => "hello " + name + "!"
}

let ghost = ghostDefault(object)

ghost.hello("Alice")("default") // => "hello Alice!"
ghost.hi("Bob")("default") // => "default"

```