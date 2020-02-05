class sentiData {
	assignData(data, vars) {
		if (data !== null) {
			if (vars === null) {
				vars = Object.keys(this).reduce((obj, item, index) => {
					if (Object.keys(data).includes(item)) {
						obj[index] = item
					}
					return obj
				}, [])
			}
			vars.forEach((k) => {
				this[k] = data[k]
			})
		}
	}
	assignDiff(data, vars = null) {
		if (data !== null) {
			if (vars === null) {
				vars = Object.keys(this).reduce((obj, item, index) => {
					if (Object.keys(data).includes(item) && this[item] !== data[item] && data[item] !== undefined) {
						obj[index] = item
					}
					return obj
				}, [])
			}
			vars.forEach((k) => {
				this[k] = data[k]
			})
		}
	}
}
module.exports = sentiData