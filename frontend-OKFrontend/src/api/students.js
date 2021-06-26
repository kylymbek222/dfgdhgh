import {basePath, apiCore} from '../api/index'

const studentsApi =  {
    getStudents(name) {
        return apiCore.get(`${basePath}/Students/${name}`)
            .then(response => response)
    },
    getForeignStudents() {
        // return apiCore.get(`${basePath}`)
        //     .then(response => response)
    },
    getStudentsByGroup(course, group) {
        // return apiCore.get(`${basePath}`)
        //     .then(response => response)
    },
    getStudentsByCourse(course) {
        // return apiCore.get(`${basePath}`)
        //     .then(response => response)
    }
}

export default studentsApi
