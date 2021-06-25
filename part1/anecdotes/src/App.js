import React, { useState } from 'react'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [likes, setLikes] = useState(Array(7).fill(0))

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <p>{anecdotes[selected]}</p>
      <p>has {likes[selected]} votes</p>
      <p>
        <Button handleClick={() => setLikes(arrayIncrementCopy(likes, selected))} text="vote" />
        <Button handleClick={() => setSelected(getRandomInt(0,7))} text="next anecdote" />
      </p>
      <Header text={"Anecdote with most votes"} />
      <p>{anecdotes[maxArrayIndex(likes)]}</p>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const arrayIncrementCopy = (anArray, index) => {
  const copy = [ ...anArray ]
  copy[index] += 1
  return copy
}

const maxArrayIndex = (anArray) => {
  let ans = 0
  for (let i = 0; i < anArray.length; i++) {
    if (anArray[i] > anArray[ans]) {
      ans = i
    }
  }
  return ans
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export default App;
