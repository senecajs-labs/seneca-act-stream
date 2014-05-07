
var seneca    = require('seneca')()
  , actStream = require('./')
  , pattern = { sample: 'call' }
  , stream  = actStream(seneca, pattern)
  , message = { hello: 'world' }

function check(arrived, done) {
  console.log('message received', arrived)
  done(null)
}

seneca.add(pattern, check);

stream.on('one', function() {
  console.log('one event')
})

stream.end(message);
