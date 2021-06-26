import React from 'react'
import ReferenceForm2 from "./form_2";
import ReferenceForm7 from "./form_7";
import ReferenceFormVyzov from "./form_vyzov";
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas'

const ReferenceContainer = (props) => {
    const newProps = props.location.props
    let refId = ''

    const refsShow = () => {
        switch (newProps.type) {
            case 'form_2':
                refId = 'refContainer2'
                return <ReferenceForm2 faculty={newProps.faculty} student={newProps.student}
                                       course={newProps.course} date={date}
                                       group={newProps.group} educForm={newProps.educForm}/>;
            case 'form_7':
                refId = 'refContainer7'
                return <ReferenceForm7 faculty={newProps.faculty} student={newProps.student}
                                       course={newProps.course} date={date}
                                       group={newProps.group} educForm={newProps.educForm}/>;
            case 'form_vyzov':
                refId = 'refContainerVyzov'
                return <ReferenceFormVyzov faculty={newProps.faculty} student={newProps.student}
                                           course={newProps.course} date={date}
                                           group={newProps.group} educForm={newProps.educForm}/>;
            default:
                alert('Произошла ошибка. Повторите попытку.')
        }
    }

    const printRef = () => {
        document.getElementById('pdf-print-buttons').style.display = 'none'
        window.print()
        document.getElementById('pdf-print-buttons').style.display = 'flex'
    }

    const saveAsPDF = () => {
        const ref = document.getElementById(refId)
        html2canvas(ref)
            .then(canvas => {
            debugger
            const divImage = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
                const imgProps= pdf.getImageProperties(canvas);
                const pdfWidth = pdf.internal.pageSize.getWidth()-40;
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                debugger
            pdf.addImage(divImage, 'PNG', 20, 20, pdfWidth, pdfHeight);
            pdf.save(""+newProps.student+".pdf");
        })
    }

    let date = new Date()
    let dd = String(date.getDate()).padStart(2, '0')
    let mm = String(date.getMonth() + 1).padStart(2, '0')
    let yyyy = date.getFullYear()
    date = dd + '/' + mm + '/' + yyyy

    return <div className="container-fluid">
        <div className="row justify-content-center" id="pdf-print-buttons">
            <div className="col-md-2">
                <button type="button" onClick={printRef} className="btn btn-primary btn-block">Распечатать</button>
            </div>
            <div className="col-md-2">
                <button type="button" onClick={saveAsPDF} className="btn btn-primary btn-block">Сохранить в .pdf</button>
            </div>
        </div><br/>

        {refsShow()}
    </div>
}

export default ReferenceContainer
