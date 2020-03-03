const sentiData = require('../../core/sentiData')

class Entity extends sentiData {
	uuid

	constructor(data = null, vars = null) {
		super()
		this.assignData(data, vars)
	}
}
module.exports = Entity