const { authenticate } = require('../index')
// const { encrypt, decrypt } = require('../index')
const { encrypt } = require('../index')
const { decrypt } = require('../index')
// const verifyAPIVersion = require('../index')
const loadenv = require('../lib/loadenv')

const { ENCRYPTION_KEY } = loadenv

let enc = encrypt('Hello World')
let token = encrypt(ENCRYPTION_KEY) 
console.log(enc)
console.log(decrypt(enc))
console.log(authenticate(token))
