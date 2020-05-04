const nodemailer = require("nodemailer")
const MailTemplate = require('./dataClasses/MailTemplate')
const MailMessage = require('./dataClasses/MailMessage')
const MailSmtpSetting = require('./dataClasses/MailSmtpSetting')

class sentiSmtpMail {
	db = null
	wlhost = null
	smtp = null

	static messageType = {
		confirm: 1,
		forgotPassword: 2,
		passwordChanged: 3,
		approve: 4,
		notificationEmail: 5,
		confirmHasPassword: 6
	}
	constructor(db, wlhost = 'senti.cloud') {
		this.db = db
		this.wlhost = wlhost
	}
	async smtpConnect() {
		let select = `SELECT 
							IFNULL(MS.host, MSD.host) AS host,
							IFNULL(MS.port, MSD.port) AS port,
							IFNULL(MS.user, MSD.user) AS user,
							IFNULL(MS.pass, MSD.pass) AS pass,
							IFNULL(MS.secure, MSD.secure) AS secure,
							IFNULL(MS.pool, MSD.pool) AS pool
						FROM mailSmtpSettings MSD
							LEFT JOIN mailSmtpSettings MS ON MS.wlhost = ?
						WHERE MSD.wlhost = 'senti.cloud'`
		// let sql = this.db.format(select, [this.wlhost])
		let rs = await this.db.query(select, [this.wlhost])
		if (rs[0].length !== 1) {
			return false
		}
		let smtpSetting = new MailSmtpSetting(rs[0][0])
		return this.smtp = await nodemailer.createTransport(smtpSetting)
	}

	async send(msg) {
		if (this.smtp === null) {
			this.smtp = await this.smtpConnect()
		}
		const mailMessage = new MailMessage(msg)
		let mailStatus = await this.smtp.sendMail(mailMessage).catch((err) => {
			return {
				statusCode: err.responseCode, 
				statusMessage: err.response
			}
		})
		console.log(mailStatus)
		return mailStatus
	}
	async getTemplate(id) {
		let select = `SELECT MT.subject, MT.html, MT.fromEmail, MT.fromName FROM mailTemplates MT WHERE MT.id = ?;`
		let rs = await this.db.query(select, [id])
		if (rs[0].length !== 1) {
			return false
		}
		return await new MailTemplate(rs[0][0])
	}
	async getTemplateByType(type, host = '', language = 'da') {
		let select = `SELECT T.subject, T.html, T.fromEmail, T.fromName
					FROM (
		--                                wanted language           default language
						SELECT temp.*, IF(temp.language = ?, 2, IF(temp.language='da',1,0)) AS score
						FROM (
							SELECT  hostDefault.type as type,
									IFNULL(T.host, hostDefault.host) AS hostName,
									IFNULL(T.language, hostDefault.language) AS language
							FROM 	mailTemplates hostDefault
							LEFT JOIN mailTemplates T ON T.type = hostDefault.type AND T.host = ? -- wanted host
							WHERE hostDefault.type = ? AND hostDefault.host='senti.cloud' -- default host
						) temp
					)ts
					INNER JOIN mailTemplates T ON T.type=ts.type AND T.host=ts.hostName AND T.language=ts.language
					ORDER BY ts.score DESC
					LIMIT 0,1`
		let rs = await this.db.query(select, [language, host, type])
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
		if (template.html !== '') {
			template.html = template.html.replace('@MSGSUBJECT@', template.subject)
		}
		template.from = `${template.fromName} <${template.fromEmail}>` 
		return new MailMessage(template)
	}
	async getMailMessageFromTemplateType(type, content, host = '', language = 'da') {
		let template = await this.getTemplateByType(type, host, language)
		Object.entries(content).map(([key, value]) => {
			if (template.html !== '') {
				template.html = template.html.replace(key, value)
			}
			
		})
		template.from = `${template.fromName} <${template.fromEmail}>` 
		return new MailMessage(template)
	}
}
module.exports = sentiSmtpMail