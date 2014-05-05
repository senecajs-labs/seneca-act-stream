
var Writable = require('readable-stream').Writable
  , inherits = require('inherits')

function ActStream(seneca) {
  if (!(this instanceof ActStream)) {
    return new ActStream(seneca)
  }

  this.seneca = seneca

  Writable.call(this, {
    objectMode: true,
    highWaterMark: 16
  })
}

inherits(ActStream, Writable)

ActStream.prototype._write = function write(obj, skip, callback) {
  this.seneca.act(obj, callback)
}

module.exports = ActStream
