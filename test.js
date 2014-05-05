
var test      = require('tap').test
  , seneca    = require('seneca')
  , actStream = require('./')

test('call a seneca service', function(t) {
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
