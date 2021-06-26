import React from "react";

const ForeignStudentsList = () => {
    return <div className="table container-fluid">
        {/*<div className="row align-items-end justify-content-center">*/}
        <div className="row bd-example-row justify-content-center">
            <table>
                {/*Список иностранных студентов факультета*/}
                <tbody>
                <tr>
                    <th>Шифр студента</th>
                    <th>ФИО студента</th>
                    <th>Адрес в КР</th>
                    <th>Место прописки за рубежом</th>
                    <th>Номер телефона</th>
                </tr>
                <tr>
                    <td>11/11111</td>
                    <td>Иванов И.И.</td>
                    <td>ул.Советская д1 кв1</td>
                    <td>РК, г.Алматы, пр.Райымбека д1 кв 1</td>
                    <td>+996555555555</td>
                </tr>
                <tr>
                    <td>11/11111</td>
                    <td>Иванов И.И.</td>
                    <td>ул.Советская д1 кв1</td>
                    <td>РК, г.Алматы, пр.Райымбека д1 кв 1</td>
                    <td>+996555555555</td>
                </tr>
                <tr>
                    <td>11/11111</td>
                    <td>Иванов И.И.</td>
                    <td>ул.Советская д1 кв1</td>
                    <td>РК, г.Алматы, пр.Райымбека д1 кв 1</td>
                    <td>+996555555555</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default ForeignStudentsList
