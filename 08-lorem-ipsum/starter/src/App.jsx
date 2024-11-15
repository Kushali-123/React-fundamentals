import { useState } from 'react'
import data from '../src/data';
import { nanoid } from 'nanoid'


const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0,amount));
  }

  return (
    <div className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>Generate</button>
      </form>
      <div className='lorem-text'>
        {text.map((item, index) => {
          return <p key = {nanoid()}>{item}</p>
        })}
      </div>
    </div>
  )
}
export default App
