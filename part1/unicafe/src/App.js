import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let title = "give feedback"
  let stats = "statistics"
  
  return (
    <div>
      <Header text={title} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text={stats} />
      <Statistics good={good} neutral={neutral} bad={bad} />
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

const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad;
  if (total === 0) {
    return <p>No feedback given</p>
  }
  return (
    <>
      <Statistic text={"good"} value={props.good} />
      <Statistic text={"neutral"} value={props.neutral} />
      <Statistic text={"bad"} value={props.bad} />
      <Statistic text={"all"} value={total} />
      <Statistic text={"average"} value={(props.good - props.bad) / total} />
      <Statistic text={"positive"} value={100 * (props.good / total) + " %"} />
    </>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

export default App;
