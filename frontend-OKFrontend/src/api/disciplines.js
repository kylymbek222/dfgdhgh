// import baseApi from "../api/index";
import {basePath, apiCore} from '../api/index'

const disciplinesApi =  {
    getDisciplines(semestr, facult, departments) {
        // baseApi.prototype._apiCore.get(`${this._basePath}`+`users?page=${activePage}&count=${pageSize}`)
        //return apiCore.get(`${basePath}/disciplines/faculty/${fit}/kafedra/${kafedra}/semester/${sem}`)
        return apiCore.get(`${basePath}/disciplines?faculty=${facult}&kafedra=${departments}&semesters=${semestr}`)
            .then(response => response)
    },
    addDiscipline(body) {
        return apiCore.post(`${basePath}/disciplines`, body)
            .then(response => response)
    },
    deleteDiscipline(disciplineId) {
        return apiCore.delete(`${basePath}/disciplines/${disciplineId}`, )
            .then(response => response)
    },
    updateDiscipline(disciplineId, newData) {
        return apiCore.put(`${basePath}/disciplines/${disciplineId}`, newData)
            .then(response => response)
    }
}

export default disciplinesApi
