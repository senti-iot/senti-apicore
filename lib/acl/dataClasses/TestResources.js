const sentiData = require('../../core/sentiData')
const Test = require('./Test')

class TestResources extends sentiData {
	permissions = []
	allowed = false

	constructor(data = null, vars = null) {
		super()
		this.assignData(data, vars)
		if (this.permissions.length > 0) {
			let tmpPermission = []
			this.permissions.forEach(permission => {
				tmpPermission.push(new Test(permission))
			})
			this.permissions = tmpPermission
		}
	}
}
module.exports = TestResources