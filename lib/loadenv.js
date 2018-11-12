// should go into our npm packet(s)
const path = require('find-config')('.env')
require('dotenv').config({ path: path })

module.exports = process.env

