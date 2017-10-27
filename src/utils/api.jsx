var Fetch = require('whatwg-fetch'); //lib which fetches from a web API
var rootUrl = 'http://datapoint.metoffice.gov.uk/public/data/';
var apiKey = 'resource?key=f21b943d-5bfd-4efc-82a9-3c912fc9d5aa';
var locations = 'val/wxfcs/all/json/sitelist';
module.exports = {
    get: function(place) {
        return fetch(rootUrl + place + apiKey, {
            headers: {
                // No need for special headers
            }
        })
        .then(function(response) {
            return response.json();
        });
    }
};
