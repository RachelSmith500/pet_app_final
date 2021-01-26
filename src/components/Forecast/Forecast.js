import React, { useState } from 'react';
import Axios from 'axios';
import './Forecast.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
      let temp = ''

        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params: {
              q: 'Minneapolis, U.S.',
              lat: '0',
              lon: '0',
              callback: 'test',
              id: '2172797',
              lang: 'null',
              units: 'imperial',
              mode: 'xml, html'
            },
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_SECRET_KEY,
              'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
              'useQueryString': true
            }
          };

    Axios.request(options).then(function (response) {
        console.log(response);
        // setResponseObj(response.data)
        console.log(response.data)
        let string = response.data
        let re = /\w*temp/g
        let index = string.search(re) + 6;
        let lastIndex = index + 5;
        let newString = string.slice(index,lastIndex);
        // console.log(newString);
        setResponseObj({temp: newString})
        temp = newString
        console.log(responseObj);
    }).catch(function (error) {
        console.error(error);
    });
}
   
return (
    <>
    <div className="forecast">
        <h2 className="font">Current Temp:</h2>
        <button onClick={getForecast}>Get Temperature</button>
            <div className="num">
                {responseObj.temp}
                {/* <h1>{temp}</h1> */}
            </div>
        {/* <button onClick={getForecast}>Get Temperature</button> */}
    </div>
    </>
   )

}

export default Forecast;


