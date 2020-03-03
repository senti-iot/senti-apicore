
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
const sentiToken = require('./lib/core/sentiToken')
const sentiMail = require('./lib/core/sentiMail')
const secureMqttHandler = require('./lib/mqtt/secureMqttHandler')
const sentiAuthClient = require('./lib/authentication/sentiAuthClient')
const sentiAclClient = require('./lib/acl/aclClient')
const sentiAclBackend = require('./lib/acl/aclBackendPHP')


// Expose senti-apicore modules
module.exports.api = api
module.exports.authenticate = authenticate
module.exports.encrypt = encrypt
module.exports.decrypt = decrypt
module.exports.loadenv = loadenv
module.exports.verifyapiversion = verifyapiversion
module.exports.sentiData = sentiData
module.exports.sentiToken = sentiToken
module.exports.sentiMail = sentiMail
module.exports.secureMqttHandler = secureMqttHandler
module.exports.sentiAuthClient = sentiAuthClient
module.exports.sentiAclBackend = sentiAclBackend
module.exports.sentiAclClient = sentiAclClient