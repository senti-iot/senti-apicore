const sentiData = require('../sentiData')

class UserToken extends sentiData {
	token
	uuid
	created
	expires

	constructor(data = null, vars = null) {
		super()
		this.assignData(data, vars)
	}
}
module.exports = UserToken