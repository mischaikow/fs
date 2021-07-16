import React from 'react'

const Filter = ({ filterName, setFilterName }) => {
  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <form>
      filter shown with <input value={filterName} onChange={handleFilterChange}/>
    </form>
  )
}

export default Filter
