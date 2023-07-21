import swap from './assets/swap.png'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className='title'><span>My</span>Converter</h1>
        <div className="converter">
          <div className="block">
            <h2 className="what left">что у меня есть</h2>
            <form className='form'>
              <select className="currencies">
                <option value="rub" key="">USD</option>
                <option value="rub" key="">USD</option>
                <option value="rub" key="">USD</option>
                <option value="rub" key="">USD</option>
                <option value="rub" key="">USD</option>
              </select>
              <input className="value" type="text" />
            </form>
          </div>
          <button className="swap">
            <img src={swap} alt="swap" />
          </button>
          <div className="block">
            <h2 className="what">что я получу</h2>
            <form className='form'>
              <select className="currencies">
                <option value="rub" key="">USD</option>
              </select>
              <input className="value" type="text" />
            </form>
          </div>
        </div>
        <div className='data'>
          <article className='rate'>
            <h2 className='subtitle'>Курс доллара</h2>
            <h2 className='number'>88.76</h2>
          </article>
          <article className='rate'>
            <h2 className='subtitle'>Курс евро</h2>
            <h2 className='number'>88.76</h2>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
