const sentiData = require('../../core/sentiData')

class Resounce extends sentiData {
	uuid
	majorType
	minorType

	constructor(data = null, vars = null) {
		super()
		this.assignData(data, vars)
	}
}
module.exports = Resounce