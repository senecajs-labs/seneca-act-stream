
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

test('emits \'finish\' after the last acted message', function(t) {
  t.plan(1)

  var s = seneca()
    , stream  = actStream(s)
    , pattern = { sample: 'call' }
    , message = { sample: 'call', hello: 'world' }
    , called = false

  function check(arrived, done) {
    called = true
    done(null)
  }

  s.add(pattern, check);

  stream.on('finish', function() {
    t.ok(called, 'seneca service called')
  })

  stream.end(message);
})

test('one event', function(t) {

  var s = seneca()
    , stream  = actStream(s)
    , pattern = { sample: 'call' }
    , message = { sample: 'call', hello: 'world' }

  function check(arrived, done) {
    done(null)
  }

  s.add(pattern, check);

  stream.on('one', function() {
    t.end()
  })

  stream.end(message);
})
