const sentiData = require('../../core/sentiData')

class Permission extends sentiData {
	privilege 
	entities

	constructor(data = null, vars = null) {
		super()
		this.assignData(data, vars)
	}
}
module.exports = Permission