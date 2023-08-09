
import Texts, { word } from "../Texts"



function Importants({ formVals, handleChange }) {



    const selectNum = ['select', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const names = [formVals.wage_important, formVals.moral_climat, formVals.work_stability, formVals.work_office, formVals.new_skills, formVals.compnay_prestig, formVals.work_flexibility, formVals.close_work, formVals.interesting_job, formVals.career_growth]

    const mapNumbers = selectNum.filter(x => !names.includes(String(x)))

    function select(title, name) {
        return <>
            <td colSpan={1} className='title-td'>{Texts(word[title])}</td>
            <td colSpan={1} className='select-td'>
                <p>{formVals[name] || ''}</p>
                <select required style={{ padding: '0 10px' }} name={name} value={formVals[name]} onChange={handleChange}   >
                    {mapNumbers.map(num => {
                        return <option key={num} value={num} >{num}</option >
                    })}
                </select>

            </td>
        </>
    }

    return (
        <div>
            <h3>5.{Texts(word.title5)} ?</h3>
            <table className='table'>
                <thead></thead>
                <tbody>
                    <tr >
                        {select('wage', 'wage_important')}
                        {select('moral_climat', 'moral_climat')}
                    </tr>
                    <tr >
                        {select('stability', 'work_stability')}
                        {select('work_office', 'work_office')}
                    </tr>
                    <tr >
                        {select('new_skills', 'new_skills')}
                        {select('company_prestig', 'compnay_prestig')}
                    </tr>
                    <tr >
                        {select('flex_work', 'work_flexibility')}
                        {select('close_work', 'close_work')}
                    </tr>
                    <tr >
                        {select('interesting_job', 'interesting_job')}
                        {select('career_growth', 'career_growth')}
                    </tr>
                </tbody>
            </table>

            <table className='table mt-5'>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="numbers">6.</td>
                        <td colSpan={2} className="title-td">{Texts(word.business_3_advantages)}</td>
                        <td colSpan={2}>
                            <input type="text" name="business_3_advantages" value={formVals.business_3_advantages} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className="numbers">7.</td>
                        <td colSpan={2} className="title-td">{Texts(word.your_shortcoming)}</td>
                        <td colSpan={2}>
                            <input type="text" name="your_shortcoming" value={formVals.your_shortcoming} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className="numbers">8.</td>
                        <td colSpan={2} className="title-td">{Texts(word.want_acquire_skills)}</td>
                        <td colSpan={2}>
                            <input type="text" name="want_acquire_skills" value={formVals.want_acquire_skills} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className="numbers">9.</td>
                        <td colSpan={2} className="title-td">{Texts(word.can_be_fired)}</td>
                        <td colSpan={2}>
                            <input type="text" name="can_be_fired" value={formVals.can_be_fired} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className="numbers">10.</td>
                        <td colSpan={2} className="title-td">{Texts(word.business_trips)}</td>
                        <td colSpan={2}>
                            <input type="text" name="business_trips" value={formVals.business_trips} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className="numbers">11.</td>
                        <td colSpan={2} className="title-td">{Texts(word.administrative_criminal)}</td>
                        <td colSpan={2}>
                            <input type="text" name="administrative_criminal" value={formVals.administrative_criminal} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className="numbers">12.</td>
                        <td colSpan={2} className="title-td">{Texts(word.how_long_you_uneployed)}</td>
                        <td colSpan={2}>
                            <input type="text" name="how_long_you_uneployed" value={formVals.how_long_you_uneployed} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className="numbers">13.</td>
                        <td colSpan={2} className="title-td">{Texts(word.friends_relatives_on_yuksalish)}</td>
                        <td colSpan={2}>
                            <input type="text" name="friends_relatives_on_yuksalish" value={formVals.friends_relatives_on_yuksalish} onChange={handleChange} />
                        </td>
                    </tr>
                    <td colSpan={2} className="title-td">{Texts(word.if_have_employe_fullname)}</td>
                    <td colSpan={2}>
                        <input type="text" name="if_have_employe_fullname" value={formVals.if_have_employe_fullname} onChange={handleChange} />
                    </td>
                    <tr>
                        <td className="numbers">14.</td>
                        <td colSpan={2} className="title-td">{Texts(word.how_you_found_us)}</td>
                        <td colSpan={2}>
                            <input type="text" name="how_you_found_us" value={formVals.how_you_found_us} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className="numbers">15.</td>
                        <td colSpan={2} className="title-td">{Texts(word.when_you_able_start_work)}</td>
                        <td colSpan={2}>
                            <input type="text" name="when_you_able_start_work" value={formVals.when_you_able_start_work} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className="numbers">16.</td>
                        <td colSpan={2} className="title-td">{Texts(word.expected_salary)}</td>
                        <td colSpan={2}>
                            <input type="text" name="expected_salary" value={formVals.expected_salary} onChange={handleChange} />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3 className="mt-5">17.{Texts(word.addition_info)}</h3>
            <table>
                <thead></thead>
                <tbody className="addition-table">
                    <tr>
                        <td colSpan={2} className="title-td">{Texts(word.own_car)}</td>
                        <td colSpan={2} className="title-td">{Texts(word.driving_licence)}</td>
                    </tr>
                    <tr>
                        <td className="title-td">{Texts(word.stamp)}</td>
                        <td ><input type="text" name="car_stamp" value={formVals.car_stamp} onChange={handleChange} /></td>
                        <td className="driving_licence title-td">A</td>
                        <td className="driving_licence  title-td">B</td>
                        <td className="driving_licence  title-td">C</td>
                        <td className="driving_licence  title-td">D</td>
                    </tr>
                    <tr>
                        <td className="title-td">{Texts(word.car_produced_date)}</td>
                        <td ><input type="text" name="car_produced_date" value={formVals.car_produced_date} onChange={handleChange} /></td>
                        <td className="driving_licence">
                            <select style={{ padding: '0 10px' }} name='driving_licence_category_a' value={formVals.driving_licence_category_a} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td className="driving_licence">
                            <select style={{ padding: '0 10px' }} name='driving_licence_category_b' value={formVals.driving_licence_category_b} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td className="driving_licence">
                            <select style={{ padding: '0 10px' }} name='driving_licence_category_c' value={formVals.driving_licence_category_c} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td className="driving_licence">
                            <select style={{ padding: '0 10px' }} name='driving_licence_category_d' value={formVals.driving_licence_category_d} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="mt-5">{Texts(word.recomendate_person)}</h3>
            <div >
                <label htmlFor="first">1)</label>
                <input type="text" id="first" name="recomendate_person_first" value={formVals.recomendate_person_first} onChange={handleChange} />
            </div>
            <div className="mt-5">
                <label htmlFor="second">2)</label>
                <input type="text" id="second" name="recomendate_person_second" value={formVals.recomendate_person_second} onChange={handleChange} />
            </div>
            <p>{Texts(word.agree_notification)}</p>
            <br />
            <div>
                <label htmlFor="completed_date">{Texts(word.completed_date)}</label>
                <input type="text" id="completed_date" name="completed_date" value={formVals.completed_date} onChange={handleChange} />
            </div>
        </div>
    )
}

export default Importants