const keys = require('./loadenv')
const { decrypt } = require('./encryption')

const { ENCRYPTION_KEY } = keys // Must be 256 bytes (32 characters)

const authenticate = (token) => {
	return (ENCRYPTION_KEY === decrypt(token)) ? true : false 
}

module.exports = authenticate
