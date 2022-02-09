import React from "react"
import "./FilterSection.scss"

const FilterSection = (props) => {
  function handleChange(e) {
    props.onChange(e.target.value)
  }

  return (
    <h2 className="h2-section">
      <div className="filter-container">
        <label>Filter Characters </label>
        <select
          value={props.value}
          onChange={handleChange}
          name="filter"
          className="characters"
        >
          <option value="all">all</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="alive">alive</option>
          <option value="dead">dead</option>
        </select>
      </div>
    </h2>
  )
}

export default FilterSection
