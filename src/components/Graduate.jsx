import React from 'react'
import Texts, { word } from '../Texts'

function Graduate({formVals,handleChange}) {
  return (
    <div>
      <h3>2.{Texts(word.graduate)}</h3>
      <table className='table'>
        <thead></thead>
        <tbody>
          <tr>
            <td className='title-td'>{Texts(word.started_year)}</td>
            <td className='title-td'>{Texts(word.ended_year)}</td>
            <td className='title-td'>{Texts(word.institute_name)}</td>
            <td className='title-td'>{Texts(word.speciality)}</td>
          </tr>
          <tr>
            <td ><input name='study_start_year' value={formVals.study_start_year} onChange={handleChange} type="text" /></td>
            <td ><input type="text" name='study_end_year' value={formVals.study_end_year} onChange={handleChange} /></td>
            <td ><input type="text" name='institute_name' value={formVals.institute_name} onChange={handleChange}/></td>
            <td ><input type="text" name='speciality' value={formVals.speciality} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td className='title-td' colSpan={2}>{Texts(word.addition)}</td>
            <td colSpan={2}><input type="text" name='addition_study' value={formVals.addition_study} onChange={handleChange} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Graduate