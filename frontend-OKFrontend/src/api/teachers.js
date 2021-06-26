import {basePath, apiCore} from '../api/index'

const teachersApi =  {
    getCurators() {
        return apiCore.get(`${basePath}`)
            .then(response => response)
    }
}

export default teachersApi
