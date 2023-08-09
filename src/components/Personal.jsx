import Texts, { word } from "../Texts"


function Personal({formVals,handleChange}) {
    return (
        <div>
            <h3>1.{Texts(word.info)}</h3>
            <table className='table'>
                <thead></thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className='title-td'>{Texts(word.fio)}</td>
                        <td colSpan={2}><input required name="fio" value={formVals.fio} onChange={handleChange} type="text" /></td>
                    </tr>
                    <tr>
                        <td className='title-td'>{Texts(word.date_of_birt)}</td>
                        <td ><input required type="text" name="date_of_birth" value={formVals.date_of_birt} onChange={handleChange} /></td>
                        <td className='title-td'>{Texts(word.place_of_birt)}</td>
                        <td ><input required type="text" name="birth_place" value={formVals.birth_place} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td className='title-td'  >{Texts(word.citizen)}</td>
                        <td ><input required type="text" name='citizen' value={formVals.citizen} onChange={handleChange} /></td>
                        <td className='title-td'>{Texts(word.nation)}</td>
                        <td ><input required type="text" name='nation' value={formVals.nation} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td className='title-td'>{Texts(word.call_numbers)}</td>
                        <td >
                            <label htmlFor="home">{Texts(word.home_phone)}:</label>
                            <input required type="text" name='home_phone' value={formVals.home_phone} onChange={handleChange} id='home' />
                        </td>
                        <td >
                            <label htmlFor="calTel">{Texts(word.mobile_phone)}:</label>
                            <input required type="text" name='mobile_phone' value={formVals.mobile_phone} onChange={handleChange} id='calTel' />
                        </td>
                        <td >
                            <label htmlFor="workTel">{Texts(word.work_phone)}:</label>
                            <input required type="text" name='work_phone' value={formVals.work_phone} onChange={handleChange} id='workTel' />
                        </td>
                    </tr>
                    <tr>
                        <td className='title-td'>E-mail:</td>
                        <td ><input required type="email" name='mail' value={formVals.mail} onChange={handleChange} /></td>
                        <td className='title-td'>{Texts(word.other_contact)} : </td>
                        <td ><input required type="text" name='other_contact' value={formVals.other_contact} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className='title-td'>{Texts(word.registrated_place)}</td>
                        <td colSpan={2}><input required name='registated_place' value={formVals.registrated_place} onChange={handleChange} type="text" /></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className='title-td'>{Texts(word.living_place)}</td>
                        <td colSpan={2}><input required type="text" name='living_place' value={formVals.living_place} onChange={handleChange} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Personal