import {basePath, apiCore} from '../api/index'

const studentsAllowanceAPI = {
    setStudentsAllowance() {
        return apiCore.get(`${basePath}`)
            .then(response => response)
    },
    setStudentsNoAllowance() {
        return apiCore.get(`${basePath}`)
            .then(response => response)
    }
}

export default studentsAllowanceAPI
