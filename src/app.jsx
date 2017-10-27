/*
██████  ███████  ██████  ██    ██ ██ ██████  ███████ ███████
██   ██ ██      ██    ██ ██    ██ ██ ██   ██ ██      ██
██████  █████   ██    ██ ██    ██ ██ ██████  █████   ███████
██   ██ ██      ██ ▄▄ ██ ██    ██ ██ ██   ██ ██           ██
██   ██ ███████  ██████   ██████  ██ ██   ██ ███████ ███████
                    ▀▀
*/
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
// classnames lib makes it easier to build classes which use dynamic data
var Api = require('./utils/api');
/* API is custom class that just does one thing: takes the data from api,
  transforms it into a usable format.
  By keeping it in a seperate class file though means can change the API used without breaking the main app. */
/*
  ██    ██  █████  ██████  ███████
  ██    ██ ██   ██ ██   ██ ██
  ██    ██ ███████ ██████  ███████
   ██  ██  ██   ██ ██   ██      ██
    ████   ██   ██ ██   ██ ███████
  */
var query = ''; //used to process query at a later point
var cityWeather = []; //Cache from API
var currentCity = '';
//
//
// REACT Components
//
//
var Weather = React.createClass({
  render: function() {
    // Build class names with dynamic data
    var weatherClass = classNames('wi wi-owm-' + this.state.weather);
    var bgColorClass = 'weather-widget '; // very-warm, warm, normal, cold, very-cold

    // Set the background colour based on the temperature
    if (this.state.temp >= 30) {
      bgColorClass += 'very-warm';
    } else if (this.state.temp > 20 && this.state.temp < 30) {
      bgColorClass += 'warm';
    } else if (this.state.temp > 10 && this.state.temp < 20) {
      bgColorClass += 'normal';
    } else if (this.state.temp > 0 && this.state.temp < 10) {
      bgColorClass += 'cold';
    } else if (this.state.temp <= 0) {
      bgColorClass += 'very-cold';
    }

    // Render the DOM elements
    return <div className={bgColorClass}>
      <h1 className="city">{cities[currentCity]}</h1>
      <div className="weather">
        <i className={weatherClass}></i>
      </div>
      <section className="weather-details">
        <div className="temp">
          <span className="temp-number">{this.state.temp}</span>
          <span className="wi wi-degrees"></span>
        </div>
        <div className="humidity">
          <i className="wi wi-raindrop"></i>{this.state.humidity}
          %</div>
        <div className="wind">
          <i className="wi wi-small-craft-advisory">{this.state.wind}
            <span className="vel">Km/h</span>
          </div>
        </section>
      </div>

      } }); // assign component to DOM var element = React.createElement(Weather, {});
    ReactDOM.render(element, document.querySelector('.container'))
    //
    // React Props
    //
    getInitialState : function() {
      return {weather: '', temp: 0, humidity: 0, wind: 0}
}
