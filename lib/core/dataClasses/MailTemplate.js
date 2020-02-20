const sentiData = require('../sentiData')

class MailTemplate extends sentiData {
	fromEmail
	fromName
	subject
	html = ''

	constructor(data = null, vars = null) {
		super()
		this.assignData(data, vars)
	}
}
module.exports = MailTemplate