import {basePath, apiCore} from '../api/index'

const profilesApi = {
    getProfiles() {
        return apiCore.get(`${basePath}/profiles`)
            .then(response => response)
    }
}

export default profilesApi
