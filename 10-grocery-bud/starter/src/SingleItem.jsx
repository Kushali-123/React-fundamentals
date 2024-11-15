import React from 'react'

const SingleItem = ({ item, removeItem, editItem }) => {

  return (
    <div className="single-item">
      <input
        type="checkbox"
        value={item.completed}
        onChange={() => editItem(item.id)}
      ></input>
      <p
        style={{
          textDecoration: item.completed && 'line-through',
          textTransform: 'capitalize',
        }}
      >
        {item.name}
      </p>
      <button type='button' className='btn remove-btn' onClick={()=> removeItem(item.id)}>delete</button>
    </div>
  )
}

export default SingleItem
