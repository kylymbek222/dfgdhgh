import React from 'react'
import '../../css/references.scss'

const ReferenceForm2 = ({faculty, student, course, group, educForm, date}) => {
    // специальность

    return <div className="refContainer" id="refContainer2">
        <p className="italic">МИНИСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</p>
        <p className="italic">Кыргызский государственный технический университет им. И. Раззакова</p>
        <p className="bold">{faculty}</p>
        <p className="bold">СПРАВКА №2-1111-2585</p>
        <p>Настоящая справка подтверждает, что</p>
        <p className="bold italic">{student}</p>
        <p>действительно является студентом(кой) {course}-курса группы {group}</p>
        <p>специальности: (очная бакалавр) ({faculty}).</p>
        <p>Форма обучения: ({educForm})</p><br/>
        <p>Общий срок обучения: 4 года.</p><br/>
        <p>Справка выдана по месту требования.</p><br/>
        <div className="flex">
            <div><p>{date}</p></div>
            <div>
                <p>Штрих-код</p>
            </div>
            <div>
                <p>Декан (Директор){Array(32).join('_')}</p>
                <p>Секретарь (методист) факультета{Array(15).join('_')}</p>
            </div>
        </div>
        <p>ФИО методиста</p>
    </div>
}

export default ReferenceForm2
