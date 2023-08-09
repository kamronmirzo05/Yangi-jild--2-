import Texts, { word } from "../Texts"



function Knowledge({ formVals, handleChange }) {



    return (
        <div>
            <h3>3.{Texts(word.knowledge)}</h3>
            <p>3.1.{Texts(word.which_langs)} ?</p>
            <table className='table'>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className='title-td'>{Texts(word.lang)}</td>
                        <td className='title-td'>{Texts(word.write)}</td>
                        <td className='title-td'>{Texts(word.read)}</td>
                        <td className='title-td'>{Texts(word.speak)}</td>
                    </tr>
                    <tr>
                        <td >{Texts(word.uzb)}</td>
                        <td>
                            <select style={{ padding: '0 10px' }} name='uzb_lang_write_knowladge' value={formVals.uzb_lang_write_knowladge} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td>
                            <select style={{ padding: '0 10px' }} name='read_knowladge' value={formVals.uzb_lang_read_knowladge} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td>
                            <select style={{ padding: '0 10px' }} name='uzb_lang_speak_knowladge' value={formVals.uzb_lang_speak_knowladge} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td >{Texts(word.rus)}</td>
                        <td>
                            <select style={{ padding: '0 10px' }} name='rus_lang_write_knowladge' value={formVals.rus_lang_write_knowladge} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td>
                            <select style={{ padding: '0 10px' }} name='rus_lang_read_knowladge' value={formVals.rus_lang_read_knowladge} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td>
                            <select style={{ padding: '0 10px' }} name='uzb_lang_speak_knowladge' value={formVals.uzb_lang_speak_knowladge} onChange={handleChange}>
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td >{Texts(word.eng)}</td>
                        <td>
                            <select style={{ padding: '0 10px' }} name='eng_lang_write_knowladge' value={formVals.eng_lang_write_knowladge} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td>
                            <select style={{ padding: '0 10px' }} name='eng_lang_read_knowladge' value={formVals.eng_lang_read_knowladge} onChange={handleChange}>
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td>
                            <select style={{ padding: '0 10px' }} name='eng_lang_speak_knowladge' value={formVals.eng_lang_speak_knowladge} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>


            <p>3.2.{Texts(word.level_know_comp)} ?</p>
            <table className='table'>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className='title-td' >MS Word</td>
                        <td >
                            <select style={{ padding: '0 10px' }} name='comp_word_knowladge' value={formVals.comp_word_knowladge} onChange={handleChange} >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td className='title-td'>1C:</td>
                        <td >
                            <select style={{ padding: '0 10px' }} name='comp_1C_knowladge' value={formVals.comp_1C_knowladge} onChange={handleChange}  >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className='title-td'>MS Excel</td>
                        <td >
                            <select style={{ padding: '0 10px' }} name='comp_excel_knowladge' value={formVals.comp_excel_knowladge} onChange={handleChange}  >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td className='title-td'>Интернет:</td>
                        <td >
                            <select style={{ padding: '0 10px' }} name='comp_internet_knowladge' value={formVals.comp_internet_knowladge} onChange={handleChange}  >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className='title-td'>Power Point</td>
                        <td >
                            <select style={{ padding: '0 10px' }} name='power_point_knowladge' value={formVals.power_point_knowladge} onChange={handleChange}  >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                        <td className='title-td'>{Texts(word.web_platforms)}</td>
                        <td >
                            <select style={{ padding: '0 10px' }} name='web_platform_knowladge' value={formVals.web_platforms_knowladge} onChange={handleChange}  >
                                <option value="no">❌</option>
                                <option value="yes">✅</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Knowledge