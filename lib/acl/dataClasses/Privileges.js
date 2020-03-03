
class Privileges {

	static types = {
		ORG: 1,
		GROUP: 2,
		GROUPS: 3,
		USER: 4,
		USERS: 5,
		DEVICE: 6,
		DEVICES: 7,
		REGISTRY: 8,
		DASHBOARD: 9,
		DASHBOARDS: 10,
		CLOUDFUNCTION: 11,
		CLOUDFUNCTIONS: 12,
		DATASUBSCRIPTION: 13,
		DATASUBSCRIPTIONS: 14,
		APPUI: 15,
		ACLORG: 16
	}
	static privilege = {
		organisation: {
			read: "org.read",
			create: "org.create",
			modify: "org.modify",
			changeparent: "org.changeparent",
			delete: "org.delete",
			list: "org.list"
		},
		group: {
			read: "group.read",
			create: "group.create",
			modify: "group.modify",
			changeparent: "group.changeparent",
			delete: "group.delete",
			list: "group.list"
		},
		user: {
			read: "user.read",
			create: "user.create",
			modify: "user.modify",
			changeparent: "user.changeparent",
			delete: "user.delete",
			list: "user.list"
		},
		device: {
			read: "device.read",
			create: "device.create",
			modify: "device.modify",
			changeparent: "device.changeparent",
			delete: "device.delete",
			list: "device.list"
		}
	}


}
module.exports = Privileges