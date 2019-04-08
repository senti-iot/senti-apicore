const keys = require('./loadenv')
const { decrypt } = require('./encryption')

const { ENCRYPTION_KEY } = keys // Must be 256 bytes (32 characters)

const authenticate = (token) => {
	return token ? (ENCRYPTION_KEY === decrypt(token)) ? true : false : false 
}

module.exports = authenticate
