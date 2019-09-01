## usage

```js

let { createDefaultGhost } = require('ghost-default')

let object = {
  hello: (name) => "hello " + name + "!"
}

let ghost = createDefaultGhost(object)

ghost.hello("Alice")("default") // => "hello Alice!"
ghost.hi("Bob")("default") // => "default"

```