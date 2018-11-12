const keys = require('./loadenv')
const { encrypt } = require('./encryption')

const create = require('apisauce').create

const { ENCRYPTION_KEY, API_URL } = keys

// let tokenEncrypted = encrypt(ENCRYPTION_KEY)

const api = create({
	baseURL: API_URL,
	timeout: 30000,
	headers: {
		'auth': encrypt(ENCRYPTION_KEY)
	}
})

module.exports = api