import { useState } from 'react'
import Experience from './components/Experience'
import Graduate from './components/Graduate'
import Importants from './components/Importants'
import Knowledge from './components/Knowledge'
import Personal from './components/Personal'
import Texts, { word } from './Texts'

function App() {


  const [lang, setLang] = useState(localStorage.getItem('lang') || 'uz')

  function handleLang(e) {
    localStorage.setItem('lang', e.target.value)
    setLang(e.target.value)
  }

  const [formVals, setFormVals] = useState({
    fio: '',
    wage_important: '',
    moral_climat: '',
    work_stability: '',
    work_office: '',
    new_skills: '',
    compnay_prestig: '',
    work_flexibility: '',
    close_work: '',
    interesting_job: '',
    career_growth: ''
  })
  const handleChange = (e) => {
    setFormVals({
      ...formVals,
      [e.target.name]: e.target.value,
    })
  }

  const submit = () => {
    alert('successfuly done')
  }

  return (
    <div className='container'>
      <div>
        <h1 style={{ textAlign: 'center' }}>{Texts(word.firstLatter)}</h1>
        <select value={lang} onChange={(e) => handleLang(e)}>
          <option value="uz">UZB</option>
          <option value="ru">RUS</option>
        </select>
      </div>
      <form onSubmit={submit}>

        <Personal formVals={formVals} handleChange={handleChange} />
        <Graduate formVals={formVals} handleChange={handleChange} />
        <Knowledge formVals={formVals} handleChange={handleChange} />
        <Experience formVals={formVals} handleChange={handleChange} />
        <Importants formVals={formVals} handleChange={handleChange} />
        <div style={{textAlign:'center'}}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App