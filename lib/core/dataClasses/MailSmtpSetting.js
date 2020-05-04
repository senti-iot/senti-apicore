const sentiData = require('../sentiData')

class MailSmtpSetting extends sentiData {
	pool
	host
	port
	secure
	auth
	user
	pass

	constructor(data = null, vars = null) {
		super()
		this.assignData(data, vars)
		this.auth = {}
		this.auth.user = this.user
		this.auth.pass = this.pass
	}
}
module.exports = MailSmtpSetting