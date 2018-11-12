var mqttalk = require('../mqttalk')
// var module = require('mqttalk/lib/module')

const jsonFromObject = mqttalk.jsonFromObject
const jsonToObject = mqttalk.jsonToObject
const execCmd = mqttalk.execCmd
const timestamp = mqttalk.timestamp
const encrypt = mqttalk.encrypt
const decrypt = mqttalk.decrypt
const createPayload = mqttalk.createPayload
// const pub = mqttalk.pub
// const sub = mqttalk.sub


const payload = {
	id: 1,
	status: 'online',
	timestamp: timestamp()
}

let json = jsonFromObject(payload)
let obj = jsonToObject(json)

console.log(json)
console.log(obj)

let encrypted = encrypt('Dette bliver krypteret')

console.log(encrypted)

let decrypted = decrypt(encrypted)
console.log(decrypted)

console.log(createPayload('This is my message', 'senti/sensor/sentiwii/8020'))
console.log(createPayload(encrypt('This is my message'), 'senti/sensor/sentiwii/8020'))

console.log(execCmd('node', '-v'))