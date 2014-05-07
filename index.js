
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

  var that = this
  this._emitOnWrite = function(err) {
    if (err)
      that.emit('oneError', err)

    that.emit('one')

    var cb = that._lastCallback

    if (cb) {
      that._lastCallback = null
      cb()
    }
  }
}

inherits(ActStream, Writable)

ActStream.prototype._write = function write(obj, skip, callback) {

  this._lastCallback = callback

  for (var key in this._fixed) {
    obj[key] = this._fixed[key]
  }

  this.seneca.act(obj, this._emitOnWrite)
}

module.exports = ActStream
