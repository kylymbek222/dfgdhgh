import {basePath, apiCore} from '../api/index'

const groupsApi = {
    getGroups() {
        return apiCore.get(`${basePath}/groups`)
            .then(response => response)
    },
    addGroup(body) {
        return apiCore.post(`${basePath}/groups`, body)
            .then(response => response)
    },
    deleteGroup(groupId) {
        return apiCore.delete(`${basePath}/groups/${groupId}`, )
            .then(response => response)
    },
    updateGroup(groupId, newData) {
        return apiCore.put(`${basePath}/groups/${groupId}`, newData)
            .then(response => response)
    }
}

export default groupsApi
