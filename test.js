
var test      = require('tap').test
  , seneca    = require('seneca')
  , actStream = require('./')

test('calling a seneca service', function(t) {
  t.plan(1)

  var s = seneca()
    , stream  = actStream(s)
    , pattern = { sample: 'call' }
    , message = { sample: 'call', hello: 'world' }

  function check(arrived, done) {
    delete arrived.actid$
    t.deepEqual(arrived, message)
    done(null)
  }

  s.add(pattern, check);

  stream.end(message);
})

test('calling a seneca service with a default pattern', function(t) {
  t.plan(1)

  var s = seneca()
    , pattern = { sample: 'call' }
    , stream  = actStream(s, pattern)
    , message = { hello: 'world' }
    , expectedMessage = {
          sample: 'call'
        , hello: 'world' }

  function check(arrived, done) {
    delete arrived.actid$
    t.deepEqual(arrived, message)
    done(null)
  }

  s.add(pattern, check);

  stream.end(message);
})
