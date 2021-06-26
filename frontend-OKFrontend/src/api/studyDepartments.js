import {basePath, apiCore} from '../api/index'

const departmentsApi = {
    getDepartments() {
        return apiCore.get(`${basePath}/kafedri`)
            .then(response => response)
    },
}

export default departmentsApi
