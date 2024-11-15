import { useState } from 'react';
import data from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId , setActiveId] = useState(null);

  const toggleQuestion = (id) => {
   {id === activeId ? setActiveId(null) : setActiveId(id)  }
  }

  return (
    <main>
      <Questions questions = {questions} toggleQuestion = {toggleQuestion} activeId = {activeId}/>
    </main>
  )
};
export default App;
