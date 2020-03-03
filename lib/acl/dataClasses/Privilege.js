class Privilege {
	static organisation = {
		read: "org.read",
		create: "org.create",
		modify: "org.modify",
		changeparent: "org.changeparent",
		delete: "org.delete",
		list: "org.list"
	}
	static group = {
		read: "group.read",
		create: "group.create",
		modify: "group.modify",
		changeparent: "group.changeparent",
		delete: "group.delete",
		list: "group.list"
	}
	static user = {
		read: "user.read",
		create: "user.create",
		modify: "user.modify",
		changeparent: "user.changeparent",
		delete: "user.delete",
		list: "user.list"
	}
	static device = {
		read: "device.read",
		create: "device.create",
		modify: "device.modify",
		changeparent: "device.changeparent",
		delete: "device.delete",
		list: "device.list"
	}
	static deviceType = {
		read: "deviceType.read",
		create: "deviceType.create",
		modify: "deviceType.modify",
		changeparent: "deviceType.changeparent",
		delete: "deviceType.delete",
		list: "deviceType.list"
	}
	static registry = {
		read: "registry.read",
		create: "registry.create",
		modify: "registry.modify",
		changeparent: "registry.changeparent",
		delete: "registry.delete",
		list: "registry.list"
	}
	static cloudfunction = {
		read: "cloudfunction.read",
		create: "cloudfunction.create",
		modify: "cloudfunction.modify",
		changeparent: "cloudfunction.changeparent",
		delete: "cloudfunction.delete",
		list: "cloudfunction.list"
	}
	static subscription = {
		read: "subscription.read",
		create: "subscription.create",
		modify: "subscription.modify",
		changeparent: "subscription.changeparent",
		delete: "subscription.delete",
		list: "subscription.list"
	}
	static dashboard = {
		read: "dashboard.read",
		create: "dashboard.create",
		modify: "dashboard.modify",
		changeparent: "dashboard.changeparent",
		share: "dashboard.share",
		delete: "dashboard.delete",
		list: "dashboard.list"
	}
	static internal = {
		mail: "internal.mail"
	}
}
module.exports = Privilege