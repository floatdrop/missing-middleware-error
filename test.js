/* global it */

'use strict';

var assert = require('assert');
var MissingMiddlewareError = require('./');

it('should have nice message', function () {
	var error = new MissingMiddlewareError('cookie-parser');
	assert.ok(/^cookie-parser/.test(error.message));
	assert.ok(/app\.use\(require\('cookie-parser'\)\(\)\);/.test(error.message));
});
