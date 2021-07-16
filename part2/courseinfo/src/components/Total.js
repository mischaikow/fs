import React from 'react'

const Total = ({ parts }) => {
  return (
    <p>Total {parts.reduce((acc, part) => acc + part.exercises, 0)}</p>
  )
}

export default Total
