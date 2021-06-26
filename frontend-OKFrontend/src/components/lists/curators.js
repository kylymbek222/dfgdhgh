import React, {useState} from "react";
import {connect} from "react-redux";

const CuratorsList = (props) => {
    const [group, setGroup] = useState('')
    const [course, setCourse] = useState('')
    const [facult, setFacult] = useState('')
    const [showList, setShowValue] = useState(false)

    const showCurators = () => {
        //запрос на бэк. получение студентов

        // если кликается группа без выбора курса и факультета, то показать все группы
        // если выбирается курс и факультет без группы, то показать студентов всего курса факультета (сортировка по алфавиту?)
        if ((group) || (course && facult)) setShowValue(true)
        else alert("Выберите все необходимые фильтры.")
        // console.log('group', group, '  course', course, '    facult', facult)
    }

    return <div className="container-fluid">
        <div className="row align-items-end justify-content-center">
            <div className="col-md-3 col-lg-2">
                <p>Факультет</p>
                <select className="custom-select" value={facult}
                        onChange={e => setFacult(e.target.value)}>
                    <option value=''>Не выбран</option>
                    {props.faculties.map(el =>
                        <option key={el} value={el}>{el}</option>
                    )}
                </select>
            </div>
            <div className="col-md-3 col-lg-2">
                <p>Курс</p>
                <select className="custom-select"
                        onChange={e => setCourse(e.target.value)} value={course}>
                    <option value=''>Не выбран</option>
                    {props.baseInfo.courses.map(el =>
                        <option key={el} value={el}>{el}</option>
                    )}
                </select>
            </div>
            <div className="col-md-3 col-lg-2">
                <p>Группа</p>
                <select className="custom-select"
                        onChange={e => setGroup(e.target.value)} value={group}>
                    <option value=''>Не выбрана</option>
                    {props.groups.map(el =>
                        <option key={el.id} value={el.name}>{el.name}</option>
                    )}
                </select>
            </div>
            <div className="col-md-2 col-lg-2">
                <button type="button" className="btn btn-primary" onClick={showCurators}>Найти</button>
            </div>
        </div>

        <div className="row bd-example-row">
            <div className="col">
                {showList ?
                    <table className="table">
                        <tbody>
                        <tr>
                            <th>Группа</th>
                            <th>ФИО академ. советника</th>
                            <th>Номер телефона академ. советника</th>
                            <th>ФИО куратора</th>
                            <th>Номер телефона куратора</th>
                        </tr>
                        <tr>
                            <td>ПИ-1-17</td>
                            <td>Иванова И.И.</td>
                            <td>+996555111111</td>
                            <td>Иванова И.И.</td>
                            <td>+996555111111</td>
                        </tr>
                        <tr>
                            <td>ПИ-2-17</td>
                            <td>Иванова И.И.</td>
                            <td>+996555111111</td>
                            <td>Иванова И.И.</td>
                            <td>+996555111111</td>
                        </tr>
                        <tr>
                            <td>ПИ-3-17</td>
                            <td>Иванова И.И.</td>
                            <td>+996555111111</td>
                            <td>Иванова И.И.</td>
                            <td>+996555111111</td>
                        </tr>
                        <tr>
                            <td>ПИ-4-17</td>
                            <td>Иванова И.И.</td>
                            <td>+996555111111</td>
                            <td>Иванова И.И.</td>
                            <td>+996555111111</td>
                        </tr>
                        </tbody>
                    </table>
                    : <div/>}
            </div>
        </div>
    </div>
}

let mapStateToProps = (state) => ({
    baseInfo: state.baseInfo,
    faculties: state.faculties.faculties,
    groups: state.groups.groups
})

export default connect(mapStateToProps)(CuratorsList)
