const createAPI = require('apisauce').create
const crypto = require('crypto');

class sentiAuthClient {
	api = null
	passwordsalt = null

	constructor(baseURL, passwordsalt) {
		try {
			this.passwordsalt = passwordsalt
			this.api = createAPI({
				baseURL: baseURL,
				headers: { 
					'Accept': 'application/json', 
					'Content-Type': 'application/json',
					'User-Agent': 'Senti.io v2'
				}
			})
		} catch (err) {
			console.log(err)
		}
	}
	async getLease(req) {
		let token = this.parseBearerToken(req)
		if (token === null) {
			return false
		}
		let rs = await this.api.get('v2/auth/' + token)
		return (rs.ok) ? rs.data : false
	}
	parseBearerToken(req) {
		let auth = req.headers ? req.headers.authorization || null : null
		if (!auth) {
			return null
		}
		let parts = auth.split(' ')
		// Malformed header.
		if (parts.length < 2) {
			return null
		}
		let schema = parts.shift().toLowerCase()
		let token = parts.join(' ')
		if (schema !== 'bearer') {
			return null
		}
		return token
	}
	getPWHash(password) {
		return crypto.createHash('sha256').update(this.passwordsalt + crypto.createHash('md5').update(password).digest('hex')).digest('hex')
	}
}
module.exports = sentiAuthClient