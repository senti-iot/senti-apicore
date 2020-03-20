
class aclClient {
	backend = null
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

	constructor(backend) {
		this.backend = backend
	}
	async registerResource(uuid, majorType = 0, minorType = 0) {
		return await this.backend.registerResource(uuid, majorType, minorType)
	}
	async getResource(uuid) {
		let result = await this.backend.getResource(uuid)
		return result
	}
	async deleteResource(uuid) {
		return await this.backend.deleteResource(uuid)
	}
	async addResourceToParent(uuid, parentUUID) {
		return await this.backend.addResourceToParent(uuid, parentUUID)
	}
	async removeResourceFromParent(uuid, parentUUID) {
		return await this.backend.removeResourceFromParent(uuid, parentUUID)
	}
	async getParentsForResource(uuid) {
		return await this.backend.getParentsForResource(uuid)
	}

	getResourceWithCallback(uuid, cb) {
		this.backend.getResourceWithCallback(uuid, cb)
	}

	async registerEntity(uuid) {
		let result = await this.backend.registerEntity(uuid)
		return result
	}
	async deleteEntity(uuid) {
		let result = await this.backend.deleteEntity(uuid)
		return result
	}
	async getEntity(uuid) {
		let result = await this.backend.getEntity(uuid)
		console.log(result)
		return result
	}
	async addEntityToParent(uuid, parentUUID) {
		let result = await this.backend.addEntityToParent(uuid, parentUUID)
		return result
	}
	async removeEntityFromParent(uuid, parentUUID) {
		let result = await this.backend.removeEntityFromParent(uuid, parentUUID)
		return result
	}
	async getEntityForResource(UUID) {
		return await this.backend.getEntityForResource(UUID)
	}
	async addPrivileges(entityUUID, resourceUUID, privileges) {
		return await this.backend.addPrivileges(entityUUID, resourceUUID, privileges)
	}
	async removePrivileges(entityUUID, resourceUUID, privilege) {
		return await this.backend.removePrivileges(entityUUID, resourceUUID, privilege)
	}
	async testPrivileges(entityUUID, resourceUUID, privileges) {
		let result = await this.backend.testPrivileges(entityUUID, resourceUUID, privileges)
		return result
	}
	async testResource(entityUUID, resourceUUID, privileges) {
		let result = await this.backend.testResource(entityUUID, resourceUUID, privileges)
		return result
	}
	async testResources(entityUUID, resourceUUIDs, privileges) {
		let result = await this.backend.testResources(entityUUID, resourceUUIDs, privileges)
		return result
	}
	async listPrivileges(entityUUID, resourceUUID, noTraverse = false) {
		let result = await this.backend.listPrivileges(entityUUID, resourceUUID, noTraverse)
		return result
	}
	async listExplicitPrivileges(entityUUID, resourceUUID) {
		let result = await this.backend.listExplicitPrivileges(entityUUID, resourceUUID)
		return result
	}
	async findResources(entityUUID, resourceUUID, majorType, privilege) {
		let result = await this.backend.findResources(entityUUID, resourceUUID, majorType, privilege)
		return result
	}

}
module.exports = aclClient