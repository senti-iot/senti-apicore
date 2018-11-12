#!/usr/bin/env node
'use strict'

/*
 * Copyright (c) 2018-2018 senti-apicore.js contributors.
 * Copyright (c) 2018-2018 Christian Broberg.
 *
 * See LICENSE for more information
 */

// Import modules

const api = require('./lib/api')
const authenticate = require('./lib/authenticate')
const encrypt = require('./lib/encryption').encrypt
const decrypt = require('./lib/encryption').decrypt
const loadenv = require('./lib/loadenv')
const verifyapiversion = require('./lib/verifyapiversion')


// Expose senti-apicore modules
module.exports.api = api
module.exports.authenticate = authenticate
module.exports.encrypt = encrypt
module.exports.decrypt = decrypt
module.exports.loadenv = loadenv
module.exports.verifyapiversion = verifyapiversion
