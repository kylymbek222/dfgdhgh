import {basePath, apiCore} from '../api/index'

const directionsApi = {
    getDisciplines() {
        return apiCore.get(`${basePath}/napravlenie`)
            .then(response => response)
    }
}

export default directionsApi
