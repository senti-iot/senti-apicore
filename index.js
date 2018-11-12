#!/usr/bin/env node
'use strict'

/*
 * Copyright (c) 2018-2018 apicore.js contributors.
 * Copyright (c) 2018-2018 Christian Broberg.
 *
 * See LICENSE for more information
 */

// Import modules

const authenticate = require('./lib/authenticate')
const encrypt = require('./lib/encryption').encrypt
const decrypt = require('./lib/encryption').decrypt
const loadenv = require('./lib/loadenv')
const verifyapiversion = require('./lib/verifyapiversion')

/*
const encrypt = require('./lib/encryption').encrypt
const decrypt = require('./lib/encryption').decrypt
*/

// Expose mqttalk modules
module.exports.authenticate = authenticate
module.exports.encrypt = encrypt
module.exports.decrypt = decrypt
module.exports.loadenv = loadenv
module.exports.verifyapiversion = verifyapiversion
/*
module.exports.encrypt = encrypt
module.exports.decrypt = decrypt
*/

