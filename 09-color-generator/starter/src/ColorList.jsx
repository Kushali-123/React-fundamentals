import React, { useState } from 'react'
import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const ColorList = ({ colors }) => {
  return <section className="colors">
    {colors.map((color, index) => {
        return <SingleColor index = {index} key = {nanoid()} color = {color}/>
    })}
  </section>
}

export default ColorList
