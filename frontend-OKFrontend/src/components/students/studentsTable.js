import React from 'react'
import "../../css/students/searchStudents.scss";
import {NavLink} from "react-router-dom";

let StudentsTable = (props) => {
    return <div>
        <table className="table">
            <tbody>
            <tr>
                <th>ID студента</th>
                <th>ФИО студента</th>
                <th>Группа студента</th>
                <th>Факультет</th>
                <th>Профиль студента</th>
            </tr>
            {props.students.map(st =>
                <Range key={st.id} id={st.id} name={st.name} group={st.group} facult={st.facult}/>)}
            </tbody>
        </table>
    </div>
}
export default StudentsTable

const Range = (props) => {

    return (
        <tr>
            <td> {props.id} </td>
            <td> {props.name} </td>
            <td> {props.group} </td>
            <td> {props.facult} </td>
            <td>
                <NavLink to={'/student/' + props.id}>
                    Перейти
                </NavLink></td>
        </tr>
    )
}
