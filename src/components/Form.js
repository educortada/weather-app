import React from 'react'

// Stateless functional component.
// Improve performance since there’s no state or lifecycle methods to worry about.
const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Get weather</button>
  </form>
)

export default Form