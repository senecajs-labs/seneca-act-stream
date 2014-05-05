
SenecaActStream
===============

Acting on Seneca through a Stream2 interface.

```js
var seneca    = require('seneca')
var actStream = require('seneca-act-stream')

var s = seneca()
  , pattern = { sample: 'call' }
  , stream  = actStream(s, pattern)
  , message = { hello: 'world' }
  , expectedMessage = {
        sample: 'call'
      , hello: 'world' }

function check(arrived, done) {
  console.log('received!')
  done(null)
}

s.add(pattern, check);

stream.end(message);
```

License
-------

ISC
