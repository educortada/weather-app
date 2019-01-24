import React from 'react'

// Stateless functional component.
// Improve performance since there’s no state or lifecycle methods to worry about.
const Titles = () => (
  <div>
    <h1 className="title-container__title">Weather finder</h1>
    <p className="title-container__subtitle">Find out temperature, conditions and more...</p>
  </div>
)

export default Titles