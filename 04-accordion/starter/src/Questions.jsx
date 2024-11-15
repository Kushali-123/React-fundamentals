import React from 'react'
import Question from './Question'

const Questions = ({questions, activeId, toggleQuestion}) => {
  return (
    <section className='container'>
      <h1>Questions</h1>  
      {questions.map((question) => {
        return (
          <Question
            {...question}
            key={question.id}
            toggleQuestion={toggleQuestion}
            activeId={activeId}
          />
        )
      })}
    </section>
  )
}

export default Questions