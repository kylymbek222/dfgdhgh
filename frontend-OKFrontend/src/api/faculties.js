import {basePath, apiCore} from '../api/index'

const facultiesApi = {
    getFaculties() {
        return apiCore.get(`${basePath}/faculties}`)
            .then(response => response)
    }
}

export default facultiesApi
