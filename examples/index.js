const loadenv = require('../lib/loadenv')
// const { authenticate } = require('../index')
const { api, authenticate, encrypt, decrypt } = require('../index')
const verifyAPIVersion = require('../index').verifyapiversion
// const { api } = require('../index')

const { ENCRYPTION_KEY } = loadenv

let enc = encrypt('Hello World')
let token = encrypt(ENCRYPTION_KEY) 
console.log(enc)
console.log(decrypt(enc))
console.log(authenticate(token)) // true
console.log(verifyAPIVersion('v1')) // true

const apiCall = async () => {
	let response
	response = await api.get('/template/v1')
	console.log(response.data)
}

apiCall()
