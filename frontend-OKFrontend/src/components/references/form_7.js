import React from 'react'
import '../../css/references.scss'

const ReferenceForm7 = ({faculty, student, course, group, educForm, date}) => {
    // специальность

    return <div className="refContainer" id="refContainer7">
        <p className="italic">МИНИСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</p>
        <p className="italic">Кыргызский государственный технический университет им. И. Раззакова</p>
        <p className="bold">{faculty}</p>
        <p className="bold">СПРАВКА №2-</p>
        <p>Настоящая справка подтверждает, что</p>
        <p className="bold italic">{student}</p>
        <p>действительно является студентом(кой) {course}-курса группы {group}</p>
        <p>специальности: (очная бакалавр) ({faculty}).</p><br/>
        <p>Справка выдана для предъявления {Array(70).join('_')}</p>
        <p>{Array(109).join('_')}</p>
        <div className="flex">
            <div>
                <p>Штрих-код</p>
                <p>{date}</p>
            </div>
            <div>
                <p>Ректор (Проректор){Array(30).join('_')}</p>
                <p>Декан (Директор){Array(32).join('_')}</p>
                <p>Секретарь (методист) факультета{Array(15).join('_')}</p>
            </div>
        </div>
        <p>ФИО методиста</p>
    </div>
}

export default ReferenceForm7
