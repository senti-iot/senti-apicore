const sentiData = require('../sentiData')

class MailMessage extends sentiData {
	to
	from
	bcc
	cc
	subject
	text
	html
	attachments

	constructor(data = null, vars = null) {
		super()
		this.assignData(data, vars)
	}
}
module.exports = MailMessage