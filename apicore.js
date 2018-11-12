#!/usr/bin/env node
'use strict'

/*
 * Copyright (c) 2018-2018 apicore.js contributors.
 * Copyright (c) 2018-2018 Christian Broberg.
 *
 * See LICENSE for more information
 */

// Import modules

var authenticate = require('./lib/authenticate')
var encryption = require('./lib/encryption')
var loadenv = require('./lib/loadenv')
var verifyapiversion = require('./lib/verifyapiversion')

/*
var encrypt = require('./lib/encryption').encrypt
var decrypt = require('./lib/encryption').decrypt
*/

// Expose mqttalk modules
module.exports.authenticate = authenticate
module.exports.encryption = encryption
module.exports.loadenv = loadenv
module.exports.verifyapiversion = verifyapiversion
/*
module.exports.encrypt = encrypt
module.exports.decrypt = decrypt
*/

