
var seneca    = require('seneca')
  , actStream = require('./')

var s = seneca()
  , pattern = { sample: 'call' }
  , stream  = actStream(s, pattern)
  , message = { hello: 'world' }

function check(arrived, done) {
  console.log('message received', arrived)
  done(null)
}

s.add(pattern, check);

stream.end(message);
