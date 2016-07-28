![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js][] plugin

# SenecaActStream

[![Gitter][gitter-badge]][gitter-url]

If you are new to Seneca in general, please take a look at [senecajs.org][]. We have everything from
tutorials to sample apps to help get you up and running quickly.

If you're using this module, and need help, you can:

- Post a [github issue][],
- Tweet to [@senecajs][],
- Ask on the [Gitter][gitter-url].

## Install

```sh
npm install seneca-act-stream
```



Acting on Seneca through a Stream2 interface.

```js
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
```

## Contributing
The [Senecajs org][] encourages open participation. If you feel you can help in any way, be it with
documentation, examples, extra testing, or new features please get in touch.

## Acknowledgements

This project was kindly sponsored by [nearForm](http://nearform.com).

## License
Copyright Matteo Collina and other contributors 2015, Licensed under [MIT][].

[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/senecajs/seneca

[MIT]: ./LICENSE
[Senecajs org]: https://github.com/senecajs/
[senecajs.org]: http://senecajs.org/
[Seneca.js]: https://www.npmjs.com/package/seneca
[github issue]: https://github.com/senecajs-labs/seneca-act-stream/issues
[@senecajs]: http://twitter.com/senecajs
