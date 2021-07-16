import React from 'react'
import Part from './Part.js'
import Total from './Total.js'

const Course = ({ parts }) => {
  return (
    <div>
      {parts.map(aPart => <Part key={aPart.id} part={aPart} />)}
      <Total parts={parts} />
    </div>
  )
}

export default Course
