const createAPI = require('apisauce').create
const Resource = require('./dataClasses/Resource')
const Entity = require('./dataClasses/Entity')
const Test = require('./dataClasses/Test')
const Permission = require('./dataClasses/Permission')

class aclBackendPHP {
	apiCall = null

	constructor(backendurl) {
		console.log(backendurl)
		this.apiCall = createAPI({
			baseURL: backendurl,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': 'Senti.io v1'
			}
		})
	}
	async registerResource(uuid, majorType = 0, minorType = 0) {
		let resource = new Resource({ "uuid": uuid, "majorType": majorType, "minorType": minorType })
		return await this.apiCall.post('resource/' + resource.uuid, resource).then(rs => {
			//console.log("registerResource", uuid, resource, rs.ok, rs.status, rs.data)
			return new Resource(rs.data)
		})
	}
	async deleteResource(uuid) {
		return await this.apiCall.delete('resource/' + uuid).then(rs => {
			return + new Resource(rs.data)
		})
	}
	async getResource(uuid) {
		return await this.apiCall.get('resource/' + uuid).then(rs => {
			return new Resource(rs.data)
		})
	}
	getResourceWithCallback(uuid, cb) {
		this.apiCall.get('resource/' + uuid).then(rs => {
			cb(new Resource(rs.data))
		})
	}
	async addResourceToParent(uuid, parentUUID) {
		return await this.apiCall.post('resource/' + uuid + '/parent/' + parentUUID).then(rs => {
			//console.log("addResourceToParent", uuid, parentUUID, rs.ok, rs.status)
			return new Resource(rs.data)
		})
	}
	async removeResourceFromParent(uuid, parentUUID) {
		return await this.apiCall.delete('resource/' + uuid + '/parent/' + parentUUID).then(rs => {
			return new Resource(rs.data)
		})
	}
	async getParentsForResource(uuid) {
		return await this.apiCall.get('resource/' + uuid + '/parent').then(rs => {
			return new Resource(rs.data)
		})
	}
	async registerEntity(uuid) {
		return await this.apiCall.post('entity/' + uuid, { "uuid": uuid }).then(rs => {
			console.log('entity/' + uuid, rs.ok)
			return new Entity(rs.data)
		})
	}
	async deleteEntity(uuid) {
		return await this.apiCall.delete('entity/' + uuid).then(rs => {
			return new Entity(rs.data)
		})
	}
	async getEntity(uuid) {
		return await this.apiCall.get('entity/' + uuid).then(rs => {
			return new Entity(rs.data)
		})
	}
	async addEntityToParent(uuid, parentUUID) {
		return await this.apiCall.post('entity/' + uuid + '/parent/' + parentUUID).then(rs => {
			console.log('post:entity/' + uuid + '/parent/' + parentUUID, rs.ok)
			return new Entity(rs.data)
		})
	}
	async removeEntityFromParent(uuid, parentUUID) {
		return await this.apiCall.delete('entity/' + uuid + '/parent/' + parentUUID).then(rs => {
			console.log('delete:entity/' + uuid + '/parent/' + parentUUID, rs.ok)
			return new Entity(rs.data)
		})
	}
	async getParentsForEntity(uuid) {
		return await this.apiCall.get('entity/' + uuid + '/parent').then(rs => {
			return new Entity(rs.data)
		})
	}
	async getEntityForResource(uuid) {
		return await this.apiCall.get('entity/' + uuid + '/parent').then(rs => {
			return new Entity(rs.data)
		})
	}
	async registerPrivilege(privilege) {
		return await this.apiCall.post('privilege/', { "privilege": privilege }).then(rs => {
			return rs.ok
		})
	}
	async addPrivileges(entityUUID, resourceUUID, privileges) {
		return await this.apiCall.post('permission/' + entityUUID + '/' + resourceUUID, { "privileges": privileges }).then(rs => {
			console.log('permission/' + entityUUID + '/' + resourceUUID, rs.ok)
			if (rs.ok === false) {
				
			}
			return rs.ok
		})
	}
	async removePrivileges(entityUUID, resourceUUID, privilege) {
		return await this.apiCall.delete('permission/' + entityUUID + '/' + resourceUUID + '/' + privilege).then(rs => {
			console.log('delete permission/' + entityUUID + '/' + resourceUUID + '/' + privilege, rs.ok)
			return rs.ok
		})
	}
	async testPrivileges(entityUUID, resourceUUID, privileges) {
		console.log(privileges.join('|'), 'test/' + entityUUID + '/' + resourceUUID + '/' + privileges.join('|'))
		return await this.apiCall.get('test/' + entityUUID + '/' + resourceUUID + '/' + privileges.join('|')).then(rs => {
			//console.log(rs)
			return new Test(rs.data)
		})
	}
	async listPrivileges(entityUUID, resourceUUID, noTraverse = false) {
		let traversParam = (noTraverse === true) ? '?noTraverse=1' : ''
		return await this.apiCall.get('listPrivileges/' + entityUUID + '/' + resourceUUID + traversParam).then(rs => {
			console.log('listPrivileges/' + entityUUID + '/' + resourceUUID, rs.ok)
			return rs.data
		})
	}
	async listExplicitPrivileges(entityUUID, resourceUUID) {
		return await this.apiCall.get('permission/' + entityUUID + '/' + resourceUUID).then(rs => {
			console.log('permission/' + entityUUID + '/' + resourceUUID, rs.ok)
			return rs.data
		})
	}
	async findResources(entityUUID, resourceUUID, majorType, privilege = '', minorType = 0) {
		return await this.apiCall.get('findResources/' + entityUUID + '/' + resourceUUID + '/' + majorType  + '/' + privilege).then(rs => {
			console.log('findResources/' + entityUUID + '/' + resourceUUID + '/' + majorType  + '/' + privilege, rs.ok, rs.data)
			console.log(rs)
			return rs.data
		})
	}

}
module.exports = aclBackendPHP