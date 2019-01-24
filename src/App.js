import React, { Component } from 'react'
import './App.css'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'b29dd6fbce478e017962729209e9c07c'

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (event) => {
    event.preventDefault() 
    //Prevent event 'submit' from submitting a form when click on the button.
    const city = event.target.city.value
    const country = event.target.country.value
    // Call API
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await apiCall.json()
    
    // When city and country are true
    if (city && country){
      console.log(data)
      // Change state value
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
        this.setState({
          temperature: undefined,
          city: undefined,    
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: 'Please enter the value!'
        })
    }
  }
 
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature = {this.state.temperature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
