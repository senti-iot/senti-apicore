
/*
 * Copyright (c) 2016-2019 senti-iot contributors.
 * Copyright (c) 2016-2019 Christian Broberg.
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

const sentiData = require('./lib/core/sentiData')
const secureMqttHandler = require('./lib/mqtt/secureMqttHandler')

// Expose senti-apicore modules
module.exports.api = api
module.exports.authenticate = authenticate
module.exports.encrypt = encrypt
module.exports.decrypt = decrypt
module.exports.loadenv = loadenv
module.exports.verifyapiversion = verifyapiversion
module.exports.sentiData = sentiData
module.exports.secureMqttHandler = secureMqttHandler