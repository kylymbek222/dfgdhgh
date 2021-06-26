import React from 'react'
import '../../css/references.scss'

const ReferenceFormVyzov = ({faculty, student, course, group, educForm, date}) => {
    // специальность

    return <div className="refContainer" id="refContainerVyzov">
        <p className="italic">МИНИСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</p>
        <p className="italic">Кыргызский государственный технический университет им. И. Раззакова</p>
        <p className="bold">{faculty}</p>
        <p className="bold">СПРАВКА-ВЫЗОВ №1-</p>
        <p className="bold">Специальность: (очная бакалавр) ({faculty})</p>
        <p className="bold">Группа {group}</p>
        <p className="bold italic">{student}</p>

        <p>Вызывается для установочных занятий, сдачи экзаменов и зачетов, государственных</p>
        <p>экзаменов, подготовки и защиты дипломного проекта (нужное подчеркнуть).</p>
        <p>В связи с этим {faculty} предоставить ему(ей) дополнительный оплачиваемый</p>
        <p>отпуск с сохранением средней заработной платы на период (начало сессии + 3 недели).</p><br/>
        <p>Справка выдана по месту требования</p>
        <div className="flex">
            <div><p>Штрих-код</p></div>
            <div>
                <p>Ректор (Проректор){Array(30).join('_')}</p>
                <p>Декан (Директор){Array(32).join('_')}</p>
                <p>{date}</p>
            </div>
        </div>
        <p>ФИО методиста</p><br/>

        <p className="littleText">{Array(30).join('-')} ЛИНИЯ ОТРЫВА {Array(30).join('-')}</p><br/>

        <p className="bold">СПРАВКА - ПОДТВЕРЖДЕНИЕ</p>
        <p className="bold italic">{student}</p>
        <p>{Array(110).join('_')}</p>
        <p className="littleText">место работы и должность</p>
        <p>в дополнительный оплачиваемый отпуск выбыл(-а) "___" {Array(20).join('_')} 20___г.</p>
        <p>М.П. Руководитель предприятия {Array(40).join('_')}</p><br/>
        <p>Принял(а) участие на установочной сессии, при сдаче экзаменов и зачетов, государственных</p>
        <p>экзаменов, подготовке и защите дипломного проекта (нужное подчеркнуть).</p>
        <p>Сведения об итогах экзаменационной сессии {Array(50).join('_')}</p>
        <p>с "___" {Array(20).join('_')} 20___г. по "___" {Array(20).join('_')} 20___г.</p>
        <div className="flex">
            <p>М.П.</p>
            <div>
                <p>Ректор (Проректор){Array(30).join('_')}</p>
                <p>Декан (Директор){Array(32).join('_')}</p>
            </div>
        </div>
        <p>Прибыл(а) на предприятие "___" {Array(20).join('_')} 20___г.</p>
        <p>М.П. Руководитель предприятия {Array(40).join('_')}</p>
        <p>ФИО методиста</p><br/>
    </div>
}

export default ReferenceFormVyzov
