'use strict';

var createErrorClass = require('create-error-class');

/* eslint-disable no-invalid-this */
module.exports = createErrorClass('MissingMiddleware', function (name) {
	this.message = name + '\n';
	this.message += '\tAdd it before using this middleware: app.use(require(\'' + name + '\')());\n';
	this.message += '\tOr read documentation at http://npmjs.com/' + name;
});
