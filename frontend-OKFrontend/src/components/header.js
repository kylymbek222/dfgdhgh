import React from 'react'
import '../css/header.scss'
import {NavLink} from "react-router-dom";

const HeaderComponent = (props) => {
    const role = "dekanat"

    return <div>
        <nav className="navbar navbar-expand-md header fixed-top">
            <div className="container-fluid">
                <div className="collapse navbar-collapse navbar-nav">
                    {role === 'uch_otdel' ?
                        <ul className="menu">
                            <li><NavLink to=''>Учебные планы по направлению</NavLink></li>
                            <li><NavLink to=''>Учебные планы групп</NavLink></li>
                            <li><NavLink to=''>Индивидуальные планы студента</NavLink></li>
                            <li><NavLink to='/disciplines'>Дисциплины</NavLink></li>
                        </ul>
                        : <div/>
                    }
                    {
                        role === 'kafedra' ?
                            <ul className="menu">
                                <li><NavLink to=''>Группы и потоки</NavLink></li>
                                <li><NavLink to=''>Нагрузка преподавателей</NavLink></li>
                                <li><NavLink to=''>Нагрузка кафедры</NavLink></li>
                                <li><NavLink to=''>Учебный план кафедры</NavLink></li>
                                <li><NavLink to='/working-curriculum'>Рабочий учебный план кафедры</NavLink></li>
                            </ul>
                            : <div/>
                    }
                    {
                        role === 'dekanat' ?
                            <ul className="menu">
                                <li className="dropdown">
                                    <a className="nav-link dropdown-toggle nav-item" data-bs-toggle="dropdown">Списки</a>
                                    <ul className="submenu">
                                        <li className="">
                                            <NavLink to="/lists/foreign-students" className="">Иностранные
                                                студенты</NavLink></li>
                                        <li className="">
                                            <NavLink to="/lists/students-by-courses" className="">Студенты
                                                по группам и курсам</NavLink>
                                        </li>
                                        <li className="">
                                            <NavLink to="/lists/curators" className="">Кураторы и академ.
                                                советники</NavLink></li>
                                        <li className="">
                                            <NavLink to="" className="">Допуски к гос. экзаменам</NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                       aria-expanded="false">Отчеты</a>
                                    <ul className="submenu">
                                        <li className="">
                                            <NavLink to="" className="">Бальный журнал</NavLink></li>
                                        <li className="">
                                            <NavLink to="" className="">Оплата контракта</NavLink>
                                        </li>
                                        <li className="">
                                            <NavLink to="" className="">Успеваемость в разрезе дисциплины</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li><NavLink to=''>Форма для ГАК для группы</NavLink></li>
                                <li><NavLink to=''>Академическая разница</NavLink></li>
                                <li><NavLink to='/search'>Поиск студента</NavLink></li>
                            </ul>
                            : <div/>
                    }
                </div>
            </div>
        </nav>

    </div>
}

export default HeaderComponent
