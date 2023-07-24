import { useEffect, useState } from 'react'
import swap from './assets/swap.png'

function App() {
  const [currencies, setCurrencies] = useState([])
  const [dollar, setDollar] = useState(88)
  const [euro, setEuro] = useState(88)
  const [have, setHave] = useState('')
  const [get, setGet] = useState('')
  const [haveCurrency, setHaveCurrency] = useState(1)
  const [getCurrency, setGetCurrency] = useState(1)

  const getCurrencies = async () => {
    try {
      const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
      const response = await fetch(url)
      const data = await response.json()
      const arr = []
      const keys = Object.keys(data.Valute)
      for (let i = 0; keys.length > i; i++) {
        arr.push({code:data.Valute[keys[i]].CharCode,
                  value:data.Valute[keys[i]].Value,
                  name:data.Valute[keys[i]].Name})
      }
      arr.unshift({code: 'RUB',
                  value: 1,
                  name: 'Российский рубль'})
      setCurrencies(arr)
      setDollar(arr.filter(cur => cur.code === 'USD')[0].value.toFixed(2))
      setEuro(arr.filter(cur => cur.code === 'EUR')[0].value.toFixed(2))
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getCurrencies()
  }, [])
  
  useEffect(() => {
    setGet(haveCurrency / getCurrency * have)
  }, [haveCurrency, getCurrency])

  return (
    <div className="App">
      <div className="container">
        <h1 className='title'><span>My</span>Converter</h1>
        <div className="converter">
          <div className="block">
            <h2 className="what left">что у меня есть</h2>
            <form className='form left'>
              <select onChange={event => setHaveCurrency(+event.target.value)} className="currencies">
                {currencies.map(cur => <option key={cur.code} value={cur.value}>
                                        {cur.code} - {cur.name}
                                      </option>)}
              </select>
              <input onChange={event => {
                setHave(event.target.value)
                setGet(haveCurrency / getCurrency * event.target.value)
              }} value={have} className="value" type="number" />
            </form>
          </div>
          <button className="swap">
            <img src={swap} alt="swap" />
          </button>
          <div className="block">
            <h2 className="what">что я получу</h2>
            <form className='form'>
              <select onChange={event => setGetCurrency(+event.target.value)} className="currencies">
                {currencies.map(cur => <option key={cur.code} value={cur.value}>
                                          {cur.code} - {cur.name}
                                        </option>)}
              </select>
              <input onChange={event => {
                setGet(event.target.value)
                setHave(getCurrency / haveCurrency * event.target.value)
              }} value={get} className="value" type="number" />
            </form>
          </div>
        </div>
        <div className='data'>
          <article className='rate'>
            <h2 className='subtitle'>Курс доллара</h2>
            <h2 className='number'>{dollar}</h2>
          </article>
          <article className='rate'>
            <h2 className='subtitle'>Курс евро</h2>
            <h2 className='number'>{euro}</h2>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
