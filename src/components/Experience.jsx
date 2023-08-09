import React from 'react'
import Texts, { word } from '../Texts'

function Experience({ formVals, handleChange }) {
    return (
        <div>
            <h3>4.{Texts(word.title4)} ?</h3>
            <table className='table'>
                <thead></thead>
                <tbody>
                    <tr >
                        <td colSpan={2} className='title-td'>{Texts(word.year_and_month)}</td>
                        <td className='title-td' rowSpan={2}>{Texts(word.company_name)}:</td>
                        <td colSpan={2}><input name='company_name' value={formVals.company_name} onChange={handleChange} type="text" /></td>
                    </tr>
                    <tr>
                        <td ro className='title-td'>{Texts(word.admission)}</td>
                        <td className='title-td'>{Texts(word.dismissial)}</td>
                    </tr>
                    <tr>
                        <td ><input type="text" name='work_admission' value={formVals.work_admission} onChange={handleChange} /></td>
                        <td ><input type="text" name='work_dismissial' value={formVals.work_dismissial} onChange={handleChange} /></td>
                        <td className='title-td'>{Texts(word.job_title)}</td>
                        <td ><input type="text" name='job_title' value={formVals.job_title} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td ><input type="text" name='work_admission' value={formVals.work_admission} onChange={handleChange} /></td>
                        <td ><input type="text" name='work_dismissial' value={formVals.work_dismissial} onChange={handleChange} /></td>
                        <td className='title-td'>{Texts(word.empleyes_number)}</td>
                        <td className='title-td'>{Texts(word.subordinates_number)}</td>
                    </tr>
                    <tr>
                        <td ><input type="text" name='work_admission' value={formVals.work_admission} onChange={handleChange} /></td>
                        <td ><input type="text" name='work_dismissial' value={formVals.work_dismissial} onChange={handleChange} /></td>
                        <td className='title-td'>{Texts(word.your_work)}</td>
                        <td ><input type="text" name='duties_you_perform' value={formVals.duties_you_perform} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td ><input type="text" name='work_admission' value={formVals.work_admission} onChange={handleChange} /></td>
                        <td ><input type="text" name='work_dismissial' value={formVals.work_dismissial} onChange={handleChange} /></td>
                        <td className='title-td'>{Texts(word.cause_search_work)}</td>
                        <td ><input type="text" name='couse_search_work' value={formVals.couse_search_work} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td ><input type="text" name='work_admission' value={formVals.work_admission} onChange={handleChange} /></td>
                        <td ><input type="text" name='work_dismissial' value={formVals.work_dismissial} onChange={handleChange} /></td>
                        <td className='title-td'>{Texts(word.wage)}</td>
                        <td ><input type="text" name='wage' value={formVals.wage} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className='title-td'>{Texts(word.professional_achivments)}</td>
                        <td colSpan={2} ><input type="text" name='professional_achivments_at_work' value={formVals.professional_achivments_at_work} onChange={handleChange} /></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Experience