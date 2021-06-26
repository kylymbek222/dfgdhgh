import React, {useState} from 'react'
import "../../css/students/studentProfile.scss"
import {connect} from "react-redux";
import {getStudentsTC} from "../../reducers/studentDataReducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

const StudentProfile = (props)=>{
    // если студент очник, то показать справки educForm: 'all'
    // если студент заочник, то показать справки educForm: 'all' и educForm: 'zaochnyi'

    // нужные данные: бюджет/контракт, заочник/очник, допуск/недопуск

    // переводы - ок студентов, оплата контракта - бухгалтерия, учебная карта - ????
    const [isOnBudget, setOnBudgetValue] = useState('')

    const faculty = 'Факультет информационных техногий', student = 'Иванов А.И.', course = 1
    const group = 'ПИ-1-17', educForm = 'очная бакалавр'

    const allowStudent = () => {

    }

    const notAllowStudent = () => {

    }

    const setSpecialGrade = () => {

    }

    return <div className="student-search-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-around', margin: 'auto', height: '200px'}}>
            <div style={{textAlign: 'center'}}>
                <h2 style={{fontSize: '20px'}}>{student}</h2>
                <p>{faculty}</p>
                <p>{group}</p>
                <p>Шифр студента из БД</p>
                <p>{educForm}</p>
            </div>

            <div>
                <img height='100%' alt=''
                    src="data:image/png;base64,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"/>
            </div>

            <div>
                <div className="dropdown flex-fill" style={{marginBottom: '10px'}}>
                    <button type="button" className="btn btn-primary dropdown-toggle btn-block" data-toggle="dropdown"
                            aria-haspopup="true"
                            id="dropdown_refs" data-bs-toggle="dropdown" aria-expanded="false">Сформировать справку
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdown_refs" style={{minWidth: '205px'}}>
                        {props.references.map(el =>
                            <li className="dropdown-item" key={el.type}>
                            <NavLink style={{textDecoration: 'none'}} to={{
                                pathname: '/references',
                                props: {
                                    faculty: faculty, student: student,
                                    course: course, group: group, educForm: educForm, type: el.type
                                }
                            }}>{el.name}</NavLink>
                                <hr style={{margin: 0}}/>
                            </li>
                        )}
                    </ul>
                </div>
                <div style={{marginBottom: '10px'}}>
                    <button type="button" onClick={allowStudent}
                            className="btn btn-primary btn-block">Выставить допуск</button>
                </div>
                <div style={{marginBottom: '10px'}}>
                    <button type="button" onClick={notAllowStudent}
                            className="btn btn-primary btn-block">Выставить недопуск</button>
                </div>
                <div>
                    <button type="button" onClick={setSpecialGrade} className="btn btn-primary btn-block">Выставить особую оценку</button>
                </div>

            </div>
        </div>
        <div>
            <h2 style={{marginTop:'20px', textAlign:'center'}}>Переводы</h2>
            <table className="table">
                <tbody>
                <tr>
                    <th>Курс</th>
                    <th>Уч. год</th>
                    <th>Приказ</th>
                    <th>№</th>
                    <th>Дата</th>
                    <th>Примечание</th>
                    <th>Специальность</th>
                    <th>Группа</th>
                </tr>
                <tr>
                    <td> 1 </td>
                    <td> 2017-2018 </td>
                    <td> Зачисление </td>
                    <td> 86950 </td>
                    <td> 07.08.17 </td>
                    <td> 1-семестр </td>
                    <td> Программная инженерия(очная бакалавр) </td>
                    <td> ПИ(б)-4-17 </td>
                </tr>
                </tbody>
            </table>
        </div>

        {            // если студент на бюджете, то таблицу с оплатой контракта не показывать
            isOnBudget ? <div/> :
            <div>
                <h2 style={{marginTop:'20px', textAlign:'center'}}>Оплата контракта</h2>
                <table className="table">
                    <tbody>
                    <tr>
                        <th>Курс</th>
                        <th>Уч. год</th>
                        <th>Контракт</th>
                        <th>Оплатил</th>
                        <th>Долг</th>
                        <th>Группа на момент оплаты</th>
                        <th>Специальность на момент оплаты</th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> 2017-2018 </td>
                        <td> 43800 </td>
                        <td> 20000 </td>
                        <td> 23800 </td>
                        <td> ПИ(б)-4-17 </td>
                        <td> Программная инженерия(очная бакалавр) </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        }

        <div>
            <h2 style={{marginTop:'20px', textAlign:'center'}}>Учебная карточка</h2>
            <table className="table">
                <caption><strong> 1 курс&nbsp;&nbsp;&nbsp;&nbsp;
                    1 семестр&nbsp;&nbsp;&nbsp;&nbsp;
                    ПИ(б)-4-17</strong> </caption>
                <tbody>
                <tr>
                    <th>№</th>
                    <th>Компонент</th>
                    <th>Блок</th>
                    <th>Дисциплина</th>
                    <th>Кол. кред.</th>
                    <th>Всего по уч. пл.</th>
                    <th>Форма итогового контроля</th>
                    <th>Оценка</th>
                    <th>Кол. баллов</th>
                    <th>Дата сдачи</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>ГК</td>
                    <td>ГСЭ</td>
                    <td>Английский язык 1</td>
                    <td>3</td>
                    <td>90</td>
                    <td>Экзамен</td>
                    <td>отл</td>
                    <td>100</td>
                    <td>04.01.18</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>ГК</td>
                    <td>ГСЭ</td>
                    <td>Английский язык 1</td>
                    <td>3</td>
                    <td>90</td>
                    <td>Экзамен</td>
                    <td>отл</td>
                    <td>100</td>
                    <td>04.01.18</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>ГК</td>
                    <td>ГСЭ</td>
                    <td>Английский язык 1</td>
                    <td>3</td>
                    <td>90</td>
                    <td>Экзамен</td>
                    <td>отл</td>
                    <td>100</td>
                    <td>04.01.18</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>ГК</td>
                    <td>ГСЭ</td>
                    <td>Английский язык 1</td>
                    <td>3</td>
                    <td>90</td>
                    <td>Экзамен</td>
                    <td>отл</td>
                    <td>100</td>
                    <td>04.01.18</td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
}

let mapStateToProps = (state) => ({
    references: state.baseInfo.references
});

export default connect(mapStateToProps, {getStudentsTC})(StudentProfile);
