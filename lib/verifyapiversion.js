const verifyAPIVersion = (version) => {
	switch (version) {
		case 'v1':
		case 'v1.0':
		case 'v1.0.0':
		case '1':
		case '1.0':
		case '1.0.0':
		case 'ver1':
		case 'version1':
		case 'v2':
		case 'v2.0':
		case 'v2.0.0':
		case '2':
		case '2.0':
		case '2.0.0':
		case 'ver2':
		case 'version2':
			return true
		default:
			return false
	}
}

module.exports = verifyAPIVersion