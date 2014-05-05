
SenecaActStream
===============

Acting on Seneca through a Stream2 interface.

```js
var seneca    = require('seneca')()
  , actStream = require('seneca-act-stream')
  , pattern = { sample: 'call' }
  , stream  = actStream(seneca, pattern)
  , message = { hello: 'world' }

function check(arrived, done) {
  console.log('message received', arrived)
  done(null)
}

s.add(pattern, check);

stream.end(message);
```

License
-------

ISC
