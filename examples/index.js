const authenticate = require('../lib/authenticate')
const { encrypt, decrypt } = require('../lib/encryption')
const verifyAPIVersion = require('../lib/verifyapiversion')
const keys = require('../lib/loadenv')

const { ENCRYPTION_KEY } = keys


let enc = encrypt('Hello World')
let token = encrypt(ENCRYPTION_KEY) 
console.log(enc)
console.log(decrypt(enc))

console.log(authenticate(token))
