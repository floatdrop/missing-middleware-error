# missing-middleware-error [![Build Status](https://travis-ci.org/floatdrop/missing-middleware-error.svg?branch=master)](https://travis-ci.org/floatdrop/missing-middleware-error)

> Error class for missing middlewares


## Install

```
$ npm install --save missing-middleware-error
```


## Usage

```js
var MissingMiddlewareError = require('missing-middleware-error');

throw new MissingMiddlewareError('cookie-parser');

/*
MissingMiddleware: cookie-parser
	Add it before using this middleware: app.use(require('cookie-parser')());
	Or read documentation at http://npmjs.com/cookie-parser
*/
```


## API

### MissingMiddlewareError(name)

#### name

*Required*  
Type: `string`

Name of required middleware.

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
