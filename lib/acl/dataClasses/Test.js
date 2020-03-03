const sentiData = require('../../core/sentiData')

class Test extends sentiData {
	resourceUUID
	entityUUID
	privileges
	allowed = false
	timestamp

	constructor(data = null, vars = null) {
		super()
		this.assignData(data, vars)
	}
}
module.exports = Test