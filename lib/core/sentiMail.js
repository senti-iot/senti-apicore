const sgMail = require('@sendgrid/mail')
const MailTemplate = require('./dataClasses/MailTemplate')
const MailMessage = require('./dataClasses/MailMessage')

class sentiMail {
	db = null

	static messageType = {
		confirm: 1,
		forgotPassword: 2,
		passwordChanged: 3,
		approve: 4
	}
	constructor(apikey, db) {
		this.db = db
		sgMail.setApiKey(apikey)
	}
	async send(msg) {
		const mailMessage = new MailMessage(msg)
		let mailStatus = await sgMail.send(mailMessage)
		return {
			statusCode: mailStatus[0].statusCode, 
			statusMessage: mailStatus[0].statusMessage
		}
	}
	async getTemplate(id) {
		let select = `SELECT MT.subject, MT.html, MT.fromEmail, MT.fromName FROM mailTemplates MT WHERE MT.id = ?;`
		let rs = await this.db.query(select, [id])
		if (rs[0].length !== 1) {
			return false
		}
		return await new MailTemplate(rs[0][0])
	}
	async getTemplateByType(type, language = 'da') {
		let select = `SELECT IFNULL(MT2.subject, MT1.subject) as subject, 
				IFNULL(MT2.html, MT1.html) as html,
				IFNULL(MT2.fromEmail, MT1.fromEmail) as fromEmail,
				IFNULL(MT2.fromName, MT1.fromName) as fromName
			FROM mailTemplates MT1 
				LEFT JOIN mailTemplates MT2 ON MT2.type = MT1.type AND MT2.language = ? 
			WHERE MT1.type = ? AND MT1.language = 'da'`

		let rs = await this.db.query(select, [language, type])
		if (rs[0].length !== 1) {
			return false
		}
		return await new MailTemplate(rs[0][0])
	}

	async getMailMessageFromTemplate(id, content) {
		let template = await this.getTemplate(id)
		Object.entries(content).map(([key, value]) => {
			if (template.html !== '') {
				template.html = template.html.replace(key, value)
			}
			
		})
		template.from = {
			email: template.fromEmail,
			name: template.fromName
		}
		return new MailMessage(template)
	}
	async getMailMessageFromTemplateType(type, content, language = 'da') {
		let template = await this.getTemplateByType(type, language)
		Object.entries(content).map(([key, value]) => {
			if (template.html !== '') {
				template.html = template.html.replace(key, value)
			}
			
		})
		template.from = {
			email: template.fromEmail,
			name: template.fromName
		}
		return new MailMessage(template)
	}
}
module.exports = sentiMail