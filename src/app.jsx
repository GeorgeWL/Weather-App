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
