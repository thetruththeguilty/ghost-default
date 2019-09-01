## usage

```js

let ghostDefault = require('ghost-default')

let object = {
  hello: (name) => "hello " + name + "!"
}

let ghost = ghostDefault(object)

ghost.hello("default value")("Alice") // => "hello Alice!"
ghost.hi("default value")("Bob") // => "default value"

```