
var Writable = require('readable-stream').Writable
  , inherits = require('inherits')

function ActStream(seneca, fixed) {
  if (!(this instanceof ActStream)) {
    return new ActStream(seneca, fixed)
  }

  this.seneca = seneca
  this._fixed = fixed

  Writable.call(this, {
    objectMode: true,
    highWaterMark: 16
  })
}

inherits(ActStream, Writable)

ActStream.prototype._write = function write(obj, skip, callback) {
  for (var key in this._fixed) {
    obj[key] = this._fixed[key]
  }

  this.seneca.act(obj, callback)
}

module.exports = ActStream
