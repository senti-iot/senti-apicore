const mqtt = require('mqtt')

class secureMqttHandler {
	constructor(host, user, pass, clientPrefix = 'senti_') {
		this.mqttClient = null
		this.host = host
		this.user = user
		this.pass = pass
		this.clientPrefix = clientPrefix
		this.topics = []
	}
	init() {}
	connect() {
		this.mqttClient = mqtt.connect(this.host, {
			clientId: this.clientPrefix + Math.random().toString(16).substr(2, 8),
			username: this.user,
			password: this.pass,
            // reconnectPeriod: 1000
		});
		this.init()
		this.mqttClient.on('error', (err) => {
			console.log(err)
		});
		this.mqttClient.on('connect', () => {
			console.log('MQTT client connected')
			this.topics.forEach(topic => {
				this.mqttClient.subscribe(topic, { qos: 1 }, () => {
					console.log('MQTT client subscribed to: ' + topic)
				})
			})
		})
		this.mqttClient.on('close', () => {
			console.log(`MQTT client closed - reconnecting: ${this.mqttClient.reconnecting ? 'yes' : 'no'}`)
            if (!this.mqttClient.reconnecting) {
                console.log('MQTT client reconnect.')
                this.mqttClient.reconnect()
            }
		});
	}
	// Sends a mqtt message
	sendMessage(topic, message) {
		this.mqttClient.publish(topic, message)
	}
}
module.exports = secureMqttHandler