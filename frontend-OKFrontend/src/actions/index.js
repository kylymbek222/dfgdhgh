import {
  SET_DISCIPLINES,
  ADD_DISCIPLINE,
  DELETE_DISCIPLINE,
  UPDATE_DISCIPLINE,
  SET_STUDENTS,
  SET_CURRENT_USER_DATA,
  SET_SUCCESS_INITIALIZED,
  SET_TEACHERS,
  SET_GROUPS,
  SET_PROFILES,
  SET_DIRECTIONS,
  SET_DEPARTMENTS,
  SET_FACULTIES,
  ADD_GROUP,
  DELETE_GROUP,
  UPDATE_GROUP,
  SET_STUDENT_ALLOWANCE, SET_STUDENT_NO_ALLOWANCE
} from './types';

// const ROOT_URL = '';

export const setDisciplinesAC = (disciplines) => ({
  type: SET_DISCIPLINES, disciplines
})
export const setStudentsAC = (students) => ({
  type: SET_STUDENTS, students
})
export const setTeachersAC = (teachers) => ({
  type: SET_TEACHERS, teachers
})
export const setGroupsAC = (groups) => ({
  type: SET_GROUPS, groups
})
export const setProfilesAC = (profiles) => ({
  type: SET_PROFILES, profiles
})
export const setDirectionsAC = (directions) => ({
  type: SET_DIRECTIONS, directions
})
export const setDepartmentsAC = (departments) => ({
  type: SET_DEPARTMENTS, departments
})
export const setFacultiesAC = (faculties) => ({
  type: SET_FACULTIES, faculties
})
export const setCurrentUserDataAC = (data) => ({
  type: SET_CURRENT_USER_DATA, data
})
export const setSuccessInitializedAC = () => ({
  type: SET_SUCCESS_INITIALIZED
})


export const addDisciplineAC = (newDiscipline) => ({
  type: ADD_DISCIPLINE, newDiscipline
})
export const addGroupAC = (newGroup) => ({
  type: ADD_GROUP, newGroup
})
export const setStudentAllowanceAC = () => ({
  type: SET_STUDENT_ALLOWANCE
})


export const deleteDisciplineAC = (disciplineId) => ({
  type: DELETE_DISCIPLINE, disciplineId
})
export const deleteGroupAC = (groupId) => ({
  type: DELETE_GROUP, groupId
})
export const setStudentNoAllowanceAC = () => ({
  type: SET_STUDENT_NO_ALLOWANCE
})

export const updateDisciplineAC = (disciplineId, newData) => ({
  type: UPDATE_DISCIPLINE, disciplineId, newData
})
export const updateGroupAC = (groupId, newData) => ({
  type: UPDATE_GROUP, groupId, newData
})
